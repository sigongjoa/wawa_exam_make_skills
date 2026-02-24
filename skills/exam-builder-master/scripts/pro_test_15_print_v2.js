const { execSync } = require('child_process');
const fs = require('fs');

// [전문 인쇄용 15문항 데이터셋]
const passages = [
  {
    subject: "Korean",
    text: "현대 사회에서 데이터 리터러시(Data Literacy)는 필수적인 역량으로 꼽힌다. 이는 단순히 데이터를 읽는 능력을 넘어, 데이터의 출처를 비판적으로 검증하고 그 이면에 숨겨진 의도를 파악하는 능력을 의미한다. 가짜 뉴스와 조작된 통계가 난무하는 인포데믹(Infodemic) 시대에 데이터 리터러시는 민주 시민의 핵심 자질이다. (인문/사회 독해)",
    questions: [
      { id: 1, point: 2.8, text: "위 글의 논지 전개 방식으로 가장 적절한 것은?", options: ["시간적 흐름에 따른 변화를 구체적으로 서술하고 있다.", "전문가 의견의 상충 지점을 제시하여 절충안을 찾고 있다.", "개념의 정의를 명확히 하고 그 필요성을 강조하고 있다.", "비유적 표현을 통해 핵심 내용을 시각적으로 형상화하고 있다.", "원인과 결과의 연쇄적 서술을 통해 문제의 심각성을 알리고 있다."] },
      { id: 2, point: 3.2, text: "‘인포데믹’에 대한 설명으로 적절하지 않은 것은?", options: ["정보의 과잉으로 인해 발생하는 사회적 현상이다.", "데이터의 의도적인 조작이나 왜곡이 포함될 수 있다.", "비판적 사고가 결여된 민주 시민의 자질을 위협한다.", "오로지 기술적 오류에 의해서만 발생하는 자연적 현상이다.", "정보에 대한 비판적 검증의 필요성을 더욱 높이는 요인이다."] },
      { id: 3, point: 2.5, text: "데이터 리터러시의 진정한 의미로 언급된 것은?", options: ["검색 엔진을 활용한 빠른 데이터 검색 능력", "복잡한 알고리즘을 활용한 수식 계산 능력", "데이터의 출처와 의도를 파악하는 비판적 검증 능력", "방대한 양의 데이터를 클라우드에 저장하는 능력", "전문적인 데이터 시각화 도구를 자유자재로 사용하는 능력"] },
      { id: 4, point: 3.5, text: "위 글을 바탕으로 <보기>를 이해한 내용으로 적절한 것은?", options: ["통계 데이터는 가공 과정 없이도 항상 객관적이다.", "데이터 이면에 숨겨진 의도는 분석 대상에서 제외해야 한다.", "모든 정보에 대해 비판적 수용 태도를 갖추는 것이 필요하다.", "데이터 리터러시는 특정 전문가들만 갖추어야 하는 선택적 역량이다.", "인포데믹 현상은 사회 구조적 문제와는 무관한 일시적 유행이다."] }
    ]
  },
  {
    subject: "Korean",
    text: "블록체인의 핵심은 '분산 원장' 기술이다. 이는 중앙 서버 없이 네트워크 참여자 모두가 장부를 공유하고 검증하는 방식이다. 이 과정에서 작업 증명(PoW)이나 지분 증명(PoS)과 같은 합의 알고리즘이 사용되며, 이는 데이터 위조를 사실상 불가능하게 만든다. 하지만 연산 과정에서의 에너지 소모와 처리 속도의 한계는 상용화의 큰 걸림돌이다. (기술 독해)",
    questions: [
      { id: 5, point: 2.7, text: "블록체인의 '분산 원장' 기술에 대한 설명으로 옳은 것은?", options: ["중앙 서버가 데이터를 통합 관리하는 방식이다.", "특정 관리 권한을 가진 사용자만 장부를 열람할 수 있다.", "네트워크의 모든 참여자가 동일한 장부를 공유하고 검증한다.", "데이터의 수정과 삭제가 기존 방식보다 훨씬 용이하다.", "인터넷 연결이 없는 오프라인 환경에서만 작동하는 기술이다."] },
      { id: 6, point: 3.1, text: "합의 알고리즘의 주요 역할로 가장 적절한 것은?", options: ["전체 네트워크의 연산 속도를 획기적으로 향상시킨다.", "연산 과정에서 발생하는 에너지 소모를 최소화한다.", "참여자들이 공유하는 데이터의 위조와 변조를 방지한다.", "중앙 서버의 저장 용량을 효율적으로 증설한다.", "모든 참여자의 개인 신상 정보를 완벽하게 공개한다."] },
      { id: 7, point: 2.9, text: "상용화의 걸림돌로 지적된 두 가지 요소는?", options: ["하드웨어의 가격과 장치의 크기", "기기의 무게와 세련되지 못한 디자인", "과도한 에너지 소모와 느린 처리 속도", "보안의 취약성과 과도한 익명성 보장", "프로그래밍 언어의 한계와 국가 간 장벽"] },
      { id: 8, point: 3.3, text: "위 글의 제목으로 가장 적절한 것은?", options: ["비트코인의 탄생 배경과 역사", "블록체인 기술의 원리와 상용화의 과제", "중앙 집중형 서버 관리의 중요성", "네트워크 통신 보안의 미래 트렌드", "에너지 절약을 위한 새로운 연산 기법"] }
    ]
  },
  {
    subject: "English",
    text: "Remote work has reshaped our understanding of workplace productivity. While many enjoy the flexibility, others struggle with the lack of 'social connection.' This phenomenon, often called 'the lonely office,' highlights the importance of human interaction in maintaining employee well-being and creative collaboration. (Business/Culture)",
    questions: [
      { id: 9, point: 2.6, text: "What is the main idea of the passage?", options: ["Technical advantages of office buildings", "Impact of remote work on social connection", "Cost-saving tips for global companies", "The history of internet and video technology", "How to manage working hours more effectively"] },
      { id: 10, point: 3.4, text: "What does 'the lonely office' suggest?", options: ["A quiet and peaceful working environment", "A significant lack of social and human interaction", "Cheaper office supplies for remote employees", "Faster internet connection in modern buildings", "Advanced security systems for data protection"] },
      { id: 11, point: 2.5, text: "What is mentioned as important for creative collaboration?", options: ["Faster computers with high-end processors", "Lower salaries for entry-level employees", "Meaningful human and social interaction", "Individual soundproof cabins for all workers", "More strict rules regarding working from home"] },
      { id: 12, point: 3.0, text: "The tone of the passage is best described as...", options: ["Highly optimistic about the future of technology", "Balanced and critical of current workplace shifts", "Aggressive towards traditional office management", "Completely indifferent to employee well-being", "Humorous and light-hearted about the situation"] }
    ]
  },
  {
    subject: "English",
    text: "Genetic engineering has opened new doors for medicine, allowing for targeted treatments for rare diseases. By modifying DNA, scientists can fix mutations that cause illness. However, the prospect of 'designer babies' raises profound ethical dilemmas regarding human identity and equality. (Biology/Ethics)",
    questions: [
      { id: 13, point: 2.8, text: "How does genetic engineering help medicine?", options: ["By making local clinics much cheaper to run", "By allowing targeted treatments for rare diseases", "By improving the basic nursing skills of staff", "By reducing the time spent in hospital stays", "By automating the entire pharmacy system"] },
      { id: 14, point: 3.5, text: "What is the ethical concern mentioned in the text?", options: ["High electricity usage in medical laboratories", "The issue of designer babies and human identity", "The general lack of laboratory space for research", "Noise pollution from advanced medical equipment", "Difficulties students face in learning DNA structures"] },
      { id: 15, point: 2.7, text: "What is TRUE according to the passage?", options: ["DNA cannot be modified by any current technology", "Ethics are not important in modern scientific research", "Targeted treatment is considered completely impossible", "Scientists are able to fix specific DNA mutations", "Rare diseases are currently being ignored by scientists"] }
    ]
  }
];

const buildPrintPdf = (inputData) => {
  let typstCode = `
#set page(paper: "a4", margin: (top: 1.5cm, bottom: 1.5cm, inside: 2.5cm, outside: 1.5cm), columns: 2)
#set text(font: "NanumGothic", size: 9.2pt)

#let pro_passage(body, bg_color) = {
  box(
    fill: bg_color,
    stroke: 0.2pt + gray,
    inset: 12pt,
    radius: 4pt,
    width: 100%,
    body
  )
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
  #text(1.2em)[2026학년도 제1회 통합 고사 (가독성 개선 완료)]
]

#v(1em)
#student_info()
#v(1.5em)
`;

  inputData.passages.forEach((p) => {
    const color = p.subject === 'Korean' ? 'rgb("#E6F7FF")' : 'rgb("#F5F5F5")';
    typstCode += `
= [${p.questions[0].id}~${p.questions[p.questions.length-1].id}] 다음을 읽고 물음에 답하시오. (${p.subject})

#pro_passage([
  ${p.text}
], ${color})

#v(0.8em)
`;

    p.questions.forEach((q) => {
      // 보기 개행 로직 수정 (JS 내에서의 안전한 결합)
      const optionsHtml = q.options.map((opt, oIdx) => {
        const icon = ['①', '②', '③', '④', '⑤'][oIdx];
        return icon + ' ' + opt;
      }).join(' \\ \n#v(0.3em)\n');

      typstCode += `
*${q.id}.* ${q.text} #text(weight: "bold", size: 8pt, fill: gray)[(${q.point}점)]
#v(0.4em)
${optionsHtml}
#v(1.5em)
`;
    });
  });

  fs.writeFileSync('pro_15_print_v2.typ', typstCode);
  execSync('typst compile pro_15_print_v2.typ final_pro_print_exam_v2.pdf');
  console.log('✅ Success: final_pro_print_exam_v2.pdf with proper line breaks');
};

buildPrintPdf({ examTitle: "Wawa 전문 인쇄용 15문항 모의고사", passages });
