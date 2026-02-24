const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// 1. 15문항 데이터셋 생성 (국어 8문항, 영어 7문항)
const passages = [
  {
    subject: "Korean",
    text: "최근 인공지능(AI) 기술이 비약적으로 발전함에 따라 ‘AI 윤리’에 대한 논의가 가열되고 있다. AI는 방대한 데이터를 학습하여 인간의 판단을 보조하거나 대체하지만, 그 과정에서 데이터에 내재된 편향성이 증폭되어 차별을 야기할 수 있다는 우려가 크다. 따라서 AI 개발 단계에서부터 투명성과 공정성을 확보하기 위한 제도적 장치가 필수적이다. (인문 지문 1)",
    questions: [
      { id: 1, text: "위 글의 핵심 주장으로 가장 적절한 것은?", options: ["데이터 학습량 확대", "인간 판단의 우위 인정", "제도적 장치 마련 시급", "편향성 제거 포기", "기술적 오류 수용"] },
      { id: 2, text: "‘편향성’의 문맥상 의미와 가장 가까운 것은?", options: ["기울어짐", "공정함", "투명함", "다양함", "일치함"] },
      { id: 3, text: "위 글을 통해 추론할 수 있는 내용으로 적절하지 않은 것은?", options: ["AI는 편향성을 가질 수 있다.", "데이터는 차별의 원인이 될 수 있다.", "AI 윤리는 개발 단계부터 고려되어야 한다.", "인간의 판단은 항상 AI보다 정확하다.", "투명성 확보는 공정성을 위해 필요하다."] },
      { id: 4, text: "글의 전개 방식으로 가장 적절한 것은?", options: ["비유적 표현 활용", "상반된 견해 절충", "문제 상황 제시 및 대안", "역사적 변천 과정 서술", "전문가의 권위 인용"] }
    ]
  },
  {
    subject: "Korean",
    text: "양자 컴퓨터는 기존 컴퓨터와 달리 0과 1이 동시에 존재하는 중첩(superposition) 상태를 이용한다. 큐비트(qubit)라 불리는 이 단위는 연산 속도를 획기적으로 높일 수 있으나, 외부 간섭에 매우 취약하다는 단점이 있다. (기술 지문 2)",
    questions: [
      { id: 5, text: "양자 컴퓨터의 핵심 원리로 언급된 것은?", options: ["병렬 처리", "순차 연산", "중첩 상태", "트랜지스터", "이진법"] },
      { id: 6, text: "큐비트의 특징으로 적절한 것은?", options: ["외부 간섭에 강하다", "0과 1만 가진다", "연산 속도가 느리다", "중첩 상태를 가진다", "상용화가 완료되었다"] },
      { id: 7, text: "‘중첩’의 과학적 의미를 묻는 질문에 대한 답은?", options: ["물리적 겹침", "상태의 동시성", "데이터의 삭제", "에너지의 전달", "시간의 지연"] },
      { id: 8, text: "글의 제목으로 가장 적절한 것은?", options: ["컴퓨터의 역사", "양자의 정의", "양자 컴퓨터의 원리와 과제", "반도체의 미래", "데이터의 진화"] }
    ]
  },
  {
    subject: "English",
    text: "Global supply chains have become increasingly complex. The recent disruption showed that reliance on a single supplier can be risky. Companies are now diversifying their sources to ensure resilience. This shift, often called 'reshoring', is reshaping international trade patterns. (English Passage 1)",
    questions: [
      { id: 9, text: "What is the main topic of the passage?", options: ["Historical trade routes", "Complexities of supply chains", "Benefits of single sourcing", "The history of shipping", "Retail management tips"] },
      { id: 10, text: "According to the passage, why are companies diversifying?", options: ["To reduce costs", "To ensure resilience", "To find cheaper labor", "To avoid taxation", "To improve marketing"] },
      { id: 11, text: "What does 'reshoring' imply?", options: ["Moving back home", "Investing abroad", "Closing factories", "Hiring more people", "Selling products online"] },
      { id: 12, text: "Which word is closest in meaning to 'disruption'?", options: ["Continuity", "Interruption", "Prosperity", "Collaboration", "Regulation"] }
    ]
  },
  {
    subject: "English",
    text: "Minimalism is not just about cleaning up; it is a lifestyle. It focuses on intentionality, keeping only what truly adds value to one's life. By reducing physical clutter, individuals often find mental clarity and focus. (English Passage 2)",
    questions: [
      { id: 13, text: "What is the core idea of minimalism?", options: ["Buying more things", "Intentional living", "Cleaning houses only", "Ignoring problems", "Strict diet plans"] },
      { id: 14, text: "How does minimalism affect the mind?", options: ["It causes stress", "It improves clarity", "It reduces memory", "It leads to boredom", "It increases anxiety"] },
      { id: 15, text: "Which of the following is TRUE?", options: ["Minimalism is just cleaning", "Physical clutter helps focus", "Minimalism focuses on value", "Value is only financial", "Life is better with more"] }
    ]
  }
];

// 2. Typst 생성 및 실행
const buildExamPdf = (inputData) => {
  let typstCode = `
#set page(paper: "a4", margin: (top: 1.5cm, bottom: 1.5cm, left: 1cm, right: 1cm), columns: 2)
#set text(font: "NanumGothic", size: 9.5pt)

#let passage_box(body, color) = {
  box(fill: color, inset: 10pt, radius: 4pt, width: 100%, body)
}

#align(center)[
  #text(1.8em, weight: "bold")[${inputData.examTitle}] 
  #text(1.1em)[${new Date().toLocaleDateString()} 실전 15문항 모의고사]
]
#v(1em)
`;

  inputData.passages.forEach((p) => {
    const color = p.subject === 'Korean' ? 'rgb("#e6f7ff")' : 'rgb("#f5f5f5")';
    typstCode += `
= [${p.questions[0].id}~${p.questions[p.questions.length-1].id}] 다음을 읽고 물음에 답하시오. (${p.subject})

#passage_box([
  ${p.text}
], ${color})

#v(0.5em)
`;

    p.questions.forEach((q) => {
      typstCode += `
*${q.id}.* ${q.text}
#v(0.3em)
${q.options.map((opt, oIdx) => `${['①', '②', '③', '④', '⑤'][oIdx]} ${opt}`).join(' #h(0.5em) ')}
#v(1.2em)
`;
    });
  });

  fs.writeFileSync('final_15_test.typ', typstCode);
  execSync('typst compile final_15_test.typ final_test_exam.pdf');
  console.log('✅ Success: final_test_exam.pdf (15 Questions)');
};

buildExamPdf({ examTitle: "Wawa 실전 15문항 국어/영어 모의고사", passages });
