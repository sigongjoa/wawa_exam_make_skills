const { execSync } = require('child_process');
const fs = require('fs');

// [전문 인쇄용 15문항 데이터셋]
const passages = [
  {
    subject: "Korean",
    text: "현대 사회에서 데이터 리터러시(Data Literacy)는 필수적인 역량으로 꼽힌다. 이는 단순히 데이터를 읽는 능력을 넘어, 데이터의 출처를 비판적으로 검증하고 그 이면에 숨겨진 의도를 파악하는 능력을 의미한다. 가짜 뉴스와 조작된 통계가 난무하는 인포데믹(Infodemic) 시대에 데이터 리터러시는 민주 시민의 핵심 자질이다. (인문/사회 독해)",
    questions: [
      { id: 1, point: 2.8, text: "위 글의 논지 전개 방식으로 가장 적절한 것은?", options: ["시간적 흐름에 따른 변화", "전문가 의견의 상충 제시", "개념의 정의와 필요성 강조", "비유를 통한 구체적 형상화", "원인과 결과의 연쇄적 서술"] },
      { id: 2, point: 3.2, text: "‘인포데믹’에 대한 설명으로 적절하지 않은 것은?", options: ["정보의 과잉으로 발생한다.", "데이터의 조작이 포함될 수 있다.", "민주 시민의 자질을 위협한다.", "기술적 오류에 의해서만 발생한다.", "비판적 검증의 필요성을 높인다."] },
      { id: 3, point: 2.5, text: "데이터 리터러시의 진정한 의미로 언급된 것은?", options: ["빠른 데이터 검색 능력", "복잡한 수식 계산 능력", "데이터의 비판적 검증 능력", "방대한 데이터 저장 능력", "데이터의 시각화 도구 사용"] },
      { id: 4, point: 3.5, text: "위 글을 바탕으로 <보기>를 이해한 내용으로 적절한 것은?", options: ["통계는 항상 객관적이다.", "데이터 이면의 의도는 무시해도 된다.", "모든 정보는 비판적 수용이 필요하다.", "데이터 리터러시는 선택적 역량이다.", "인포데믹은 자연적인 현상일 뿐이다."] }
    ]
  },
  {
    subject: "Korean",
    text: "블록체인의 핵심은 '분산 원장' 기술이다. 이는 중앙 서버 없이 네트워크 참여자 모두가 장부를 공유하고 검증하는 방식이다. 이 과정에서 작업 증명(PoW)이나 지분 증명(PoS)과 같은 합의 알고리즘이 사용되며, 이는 데이터 위조를 사실상 불가능하게 만든다. 하지만 연산 과정에서의 에너지 소모와 처리 속도의 한계는 상용화의 큰 걸림돌이다. (기술 독해)",
    questions: [
      { id: 5, point: 2.7, text: "블록체인의 '분산 원장' 기술에 대한 설명으로 옳은 것은?", options: ["중앙 서버가 관리한다.", "특정 관리자만 열람한다.", "네트워크 참여자가 공유한다.", "데이터 수정이 매우 쉽다.", "오프라인에서만 작동한다."] },
      { id: 6, point: 3.1, text: "합의 알고리즘의 주요 역할은 무엇인가?", options: ["네트워크 속도 향상", "에너지 소모 절감", "데이터 위조 방지", "서버 용량 증설", "익명성 완전 보장"] },
      { id: 7, point: 2.9, text: "상용화의 걸림돌로 지적된 두 가지 요소는?", options: ["가격과 크기", "무게와 디자인", "에너지 소모와 처리 속도", "보안과 익명성", "언어와 국가 장벽"] },
      { id: 8, point: 3.3, text: "위 글의 제목으로 가장 적절한 것은?", options: ["비트코인의 역사", "블록체인의 원리와 한계", "중앙 서버의 중요성", "네트워크의 미래", "에너지 절약 기법"] }
    ]
  },
  {
    subject: "English",
    text: "Remote work has reshaped our understanding of workplace productivity. While many enjoy the flexibility, others struggle with the lack of 'social connection.' This phenomenon, often called 'the lonely office,' highlights the importance of human interaction in maintaining employee well-being and creative collaboration. (Business/Culture)",
    questions: [
      { id: 9, point: 2.6, text: "What is the main idea of the passage?", options: ["Advantages of office buildings", "Impact of remote work on social connection", "Cost-saving tips for companies", "History of internet technology", "How to manage time effectively"] },
      { id: 10, point: 3.4, text: "What does 'the lonely office' suggest?", options: ["A quiet working environment", "Lack of social interaction", "Cheaper office supplies", "Faster internet connection", "Advanced security systems"] },
      { id: 11, point: 2.5, text: "What is mentioned as important for creative collaboration?", options: ["Faster computers", "Lower salaries", "Human interaction", "Individual cabins", "More strict rules"] },
      { id: 12, point: 3.0, text: "The tone of the passage is...", options: ["Highly optimistic", "Balanced and critical", "Aggressive", "Indifferent", "Humorous"] }
    ]
  },
  {
    subject: "English",
    text: "Genetic engineering has opened new doors for medicine, allowing for targeted treatments for rare diseases. By modifying DNA, scientists can fix mutations that cause illness. However, the prospect of 'designer babies' raises profound ethical dilemmas regarding human identity and equality. (Biology/Ethics)",
    questions: [
      { id: 13, point: 2.8, text: "How does genetic engineering help medicine?", options: ["By making clinics cheaper", "By targeting rare diseases", "By improving nursing skills", "By reducing hospital stays", "By automating pharmacies"] },
      { id: 14, point: 3.5, text: "What is the ethical concern mentioned in the text?", options: ["High electricity usage", "Designer babies and identity", "Lack of laboratory space", "Noise pollution", "Difficulty in learning DNA"] },
      { id: 15, point: 2.7, text: "What is TRUE according to the passage?", options: ["DNA cannot be modified", "Ethics are not important", "Targeted treatment is impossible", "Scientists fix mutations", "Rare diseases are ignored"] }
    ]
  }
];

const buildPrintPdf = (inputData) => {
  let typstCode = `
#set page(paper: "a4", margin: (top: 1.5cm, bottom: 1.5cm, inside: 2.5cm, outside: 1.5cm), columns: 2)
#set text(font: "NanumGothic", size: 9.2pt)

#let passage_box(body, color) = {
  box(fill: color, stroke: 0.3pt + gray, inset: 12pt, radius: 4pt, width: 100%, body)
}

#let point(val) = {
  text(weight: "bold", size: 8pt, fill: gray)[(#val 점)]
}

#let student_info() = {
  rect(width: 100%, stroke: 0.5pt + black, inset: 10pt)[
    #grid(columns: (1fr, 1fr, 1fr), gutter: 1em,
      [#text(weight: "bold")[학년:] #h(2cm)],
      [#text(weight: "bold")[반:] #h(2cm)],
      [#text(weight: "bold")[성명:] #h(3cm)]
    )
  ]
}

#align(center)[
  #text(2.2em, weight: "bold")[${inputData.examTitle}] \\
  #v(0.5em)
  #text(1.2em)[2026학년도 제1회 통합 고사]
]

#v(1em)
#student_info()
#v(1.5em)
`;

  inputData.passages.forEach((p) => {
    const color = p.subject === 'Korean' ? 'rgb("#E6F7FF")' : 'rgb("#F5F5F5")';
    typstCode += `
= [${p.questions[0].id}~${p.questions[p.questions.length-1].id}] 다음을 읽고 물음에 답하시오. (${p.subject})

#passage_box([
  ${p.text}
], ${color})

#v(0.8em)
`;

    p.questions.forEach((q) => {
      typstCode += `
*${q.id}.* ${q.text} #point(${q.point})
#v(0.4em)
${q.options.map((opt, oIdx) => `${['①', '②', '③', '④', '⑤'][oIdx]} ${opt}`).join(' #h(0.4em) ')}
#v(1.5em)
`;
    });
  });

  fs.writeFileSync('pro_15_print.typ', typstCode);
  execSync('typst compile pro_15_print.typ final_pro_print_exam.pdf');
  console.log('✅ Professional Print Complete: final_pro_print_exam.pdf');
};

buildPrintPdf({ examTitle: "Wawa 전문 인쇄용 15문항 모의고사", passages });
