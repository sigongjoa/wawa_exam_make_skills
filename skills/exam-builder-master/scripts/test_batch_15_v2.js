const { execSync } = require('child_process');
const fs = require('fs');

const passages = [
  {
    subject: "Korean",
    text: "최근 인공지능(AI)이 인간의 언어와 감정을 모사하는 수준을 넘어, 스스로를 인식하는 ‘자아(Self-awareness)’를 가질 수 있는가에 대한 철학적 논쟁이 뜨겁다. 인지 과학자들은 AI가 정보를 처리하는 과정이 인간의 뇌와 유사해짐에 따라, 어느 시점에는 ‘의식의 창발’이 일어날 수 있다고 주장한다. 하지만 반대론자들은 AI의 결과물은 방대한 통계적 확률의 결과일 뿐, 주관적 경험(Qualia)이 결여되어 있다고 반박한다. (인문 독해)",
    questions: [
      { id: 1, text: "위 글의 핵심 주제로 가장 적절한 것은?", options: ["AI 기술의 발전 속도", "AI 자아 형성 가능성 논쟁", "통계적 확률의 한계", "뇌 과학의 미래", "인지 과학의 성과"] },
      { id: 2, text: "‘의식의 창발’의 문맥상 의미로 가장 적절한 것은?", options: ["의식이 새롭게 나타남", "의식이 완전히 사라짐", "의식이 외부로 전달됨", "의식이 기록됨", "의식이 통제됨"] },
      { id: 3, text: "위 글을 읽고 알 수 있는 내용으로 적절하지 않은 것은?", options: ["AI는 인간의 감정을 모사할 수 있다.", "AI의 정보 처리 방식은 뇌와 유사해지고 있다.", "반대론자들은 AI에게 주관적 경험이 없다고 본다.", "AI는 이미 스스로 자아를 가졌음이 증명되었다.", "철학적 논쟁은 AI 발전에 따라 가열되고 있다."] },
      { id: 4, text: "글의 전개 방식으로 가장 적절한 것은?", options: ["사례 나열", "대조되는 견해 제시", "시간순 변화 서술", "전문가 인터뷰", "원인 분석"] }
    ]
  },
  {
    subject: "Korean",
    text: "메타버스는 단순한 게임 공간을 넘어 가상 자산과 경제 활동이 일어나는 ‘디지털 경제권’으로 진화하고 있다. 블록체인 기술을 기반으로 한 NFT(대체 불가능 토큰)는 가상 세계 내의 아이템이나 부동산에 소유권을 부여하며 새로운 가치를 창출한다. 하지만 가상 자산의 가치 변동성이 크고 법적 보호 체계가 미비하다는 점은 해결해야 할 과제로 남아있다. (사회/경제)",
    questions: [
      { id: 5, text: "메타버스의 경제적 특징으로 언급되지 않은 것은?", options: ["디지털 경제권 형성", "가상 자산 거래", "블록체인 활용", "정부의 완전한 통제", "NFT를 통한 소유권 부여"] },
      { id: 6, text: "NFT가 가상 세계에서 하는 역할은?", options: ["서버 성능 향상", "사용자 익명성 보장", "아이템에 소유권 부여", "화면 해상도 개선", "로그인 속도 단축"] },
      { id: 7, text: "메타버스 경제의 한계점으로 지적된 것은?", options: ["기술적 오류", "법적 보호 체계 미비", "사용자 수 감소", "광고 수익 부족", "환경 파괴"] },
      { id: 8, text: "위 글의 제목으로 가장 적절한 것은?", options: ["블록체인의 원리", "메타버스 경제의 진화와 과제", "NFT 투자 기법", "가상 세계의 역사", "디지털 자산의 미래"] }
    ]
  },
  {
    subject: "English",
    text: "Artificial intelligence is revolutionizing the healthcare industry by providing high-precision diagnosis and personalized treatment plans. However, ethical concerns arise regarding 'data privacy' and the potential for 'algorithm bias.' If the training data is biased, the resulting diagnosis can lead to unequal healthcare outcomes for certain demographics. (Medical Ethics)",
    questions: [
      { id: 9, text: "What is the main topic of the passage?", options: ["Speed of AI processors", "AI in healthcare and its ethics", "History of medical science", "Software development tips", "Patient satisfaction surveys"] },
      { id: 10, text: "According to the text, what is a potential risk of biased data?", options: ["Faster recovery", "Cheaper medicine", "Unequal healthcare outcomes", "Better data privacy", "Advanced surgical tools"] },
      { id: 11, text: "Which word is closest in meaning to 'revolutionizing'?", options: ["Maintaining", "Destroying", "Transforming", "Ignoring", "Normalizing"] },
      { id: 12, text: "The passage suggests that AI in medicine...", options: ["is always perfect", "is too expensive", "requires ethical consideration", "will replace all doctors", "does not need data"] }
    ]
  },
  {
    subject: "English",
    text: "The fashion industry is one of the largest polluters in the world. 'Fast fashion' encourages consumers to buy cheap clothes and discard them quickly, leading to massive waste. To address this, the movement towards 'sustainable fashion' aims to promote long-lasting products and ethical labor practices. (Environment)",
    questions: [
      { id: 13, text: "What is the problem with 'fast fashion'?", options: ["It is too expensive", "It creates massive waste", "It is hard to find", "It uses high-quality materials", "It takes too long to produce"] },
      { id: 14, text: "What is the goal of 'sustainable fashion'?", options: ["Producing more waste", "Promoting cheap labor", "Increasing sales volume", "Promoting ethical labor", "Improving shipping speed"] },
      { id: 15, text: "What can be inferred from the passage?", options: ["Fashion is good for the Earth", "Consumers should buy more", "Clothes should last longer", "Fast fashion is the future", "Pollution is decreasing"] }
    ]
  }
];

const buildExamPdf = (inputData) => {
  let typstCode = `
#set page(paper: "a4", margin: (top: 1.5cm, bottom: 1.5cm, left: 1cm, right: 1cm), columns: 2)
#set text(font: "NanumGothic", size: 9.5pt)

#let passage_box(body, color) = {
  box(fill: color, inset: 10pt, radius: 4pt, width: 100%, body)
}

#align(center)[
  #text(1.8em, weight: "bold")[${inputData.examTitle}] 
  #text(1.1em)[${new Date().toLocaleDateString()} 실전 15문항 모의고사 (검증용)]
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

  fs.writeFileSync('final_15_test_v2.typ', typstCode);
  execSync('typst compile final_15_test_v2.typ final_exam_test_v2.pdf');
  console.log('✅ Final Test Complete: final_exam_test_v2.pdf (15 Questions Generated Properly)');
};

buildExamPdf({ examTitle: "Wawa 실전 15문항 모의고사 (최종 검증)", passages });
