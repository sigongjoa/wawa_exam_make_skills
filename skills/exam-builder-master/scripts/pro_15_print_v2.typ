
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
  #text(2.2em, weight: "bold")[Wawa 전문 인쇄용 15문항 모의고사] \
  #v(0.5em)
  #text(1.2em)[2026학년도 제1회 통합 고사 (가독성 개선 완료)]
]

#v(1em)
#student_info()
#v(1.5em)

= [1~4] 다음을 읽고 물음에 답하시오. (Korean)

#pro_passage([
  현대 사회에서 데이터 리터러시(Data Literacy)는 필수적인 역량으로 꼽힌다. 이는 단순히 데이터를 읽는 능력을 넘어, 데이터의 출처를 비판적으로 검증하고 그 이면에 숨겨진 의도를 파악하는 능력을 의미한다. 가짜 뉴스와 조작된 통계가 난무하는 인포데믹(Infodemic) 시대에 데이터 리터러시는 민주 시민의 핵심 자질이다. (인문/사회 독해)
], rgb("#E6F7FF"))

#v(0.8em)

*1.* 위 글의 논지 전개 방식으로 가장 적절한 것은? #text(weight: "bold", size: 8pt, fill: gray)[(2.8점)]
#v(0.4em)
① 시간적 흐름에 따른 변화를 구체적으로 서술하고 있다. \ 
#v(0.3em)
② 전문가 의견의 상충 지점을 제시하여 절충안을 찾고 있다. \ 
#v(0.3em)
③ 개념의 정의를 명확히 하고 그 필요성을 강조하고 있다. \ 
#v(0.3em)
④ 비유적 표현을 통해 핵심 내용을 시각적으로 형상화하고 있다. \ 
#v(0.3em)
⑤ 원인과 결과의 연쇄적 서술을 통해 문제의 심각성을 알리고 있다.
#v(1.5em)

*2.* ‘인포데믹’에 대한 설명으로 적절하지 않은 것은? #text(weight: "bold", size: 8pt, fill: gray)[(3.2점)]
#v(0.4em)
① 정보의 과잉으로 인해 발생하는 사회적 현상이다. \ 
#v(0.3em)
② 데이터의 의도적인 조작이나 왜곡이 포함될 수 있다. \ 
#v(0.3em)
③ 비판적 사고가 결여된 민주 시민의 자질을 위협한다. \ 
#v(0.3em)
④ 오로지 기술적 오류에 의해서만 발생하는 자연적 현상이다. \ 
#v(0.3em)
⑤ 정보에 대한 비판적 검증의 필요성을 더욱 높이는 요인이다.
#v(1.5em)

*3.* 데이터 리터러시의 진정한 의미로 언급된 것은? #text(weight: "bold", size: 8pt, fill: gray)[(2.5점)]
#v(0.4em)
① 검색 엔진을 활용한 빠른 데이터 검색 능력 \ 
#v(0.3em)
② 복잡한 알고리즘을 활용한 수식 계산 능력 \ 
#v(0.3em)
③ 데이터의 출처와 의도를 파악하는 비판적 검증 능력 \ 
#v(0.3em)
④ 방대한 양의 데이터를 클라우드에 저장하는 능력 \ 
#v(0.3em)
⑤ 전문적인 데이터 시각화 도구를 자유자재로 사용하는 능력
#v(1.5em)

*4.* 위 글을 바탕으로 <보기>를 이해한 내용으로 적절한 것은? #text(weight: "bold", size: 8pt, fill: gray)[(3.5점)]
#v(0.4em)
① 통계 데이터는 가공 과정 없이도 항상 객관적이다. \ 
#v(0.3em)
② 데이터 이면에 숨겨진 의도는 분석 대상에서 제외해야 한다. \ 
#v(0.3em)
③ 모든 정보에 대해 비판적 수용 태도를 갖추는 것이 필요하다. \ 
#v(0.3em)
④ 데이터 리터러시는 특정 전문가들만 갖추어야 하는 선택적 역량이다. \ 
#v(0.3em)
⑤ 인포데믹 현상은 사회 구조적 문제와는 무관한 일시적 유행이다.
#v(1.5em)

= [5~8] 다음을 읽고 물음에 답하시오. (Korean)

#pro_passage([
  블록체인의 핵심은 '분산 원장' 기술이다. 이는 중앙 서버 없이 네트워크 참여자 모두가 장부를 공유하고 검증하는 방식이다. 이 과정에서 작업 증명(PoW)이나 지분 증명(PoS)과 같은 합의 알고리즘이 사용되며, 이는 데이터 위조를 사실상 불가능하게 만든다. 하지만 연산 과정에서의 에너지 소모와 처리 속도의 한계는 상용화의 큰 걸림돌이다. (기술 독해)
], rgb("#E6F7FF"))

#v(0.8em)

*5.* 블록체인의 '분산 원장' 기술에 대한 설명으로 옳은 것은? #text(weight: "bold", size: 8pt, fill: gray)[(2.7점)]
#v(0.4em)
① 중앙 서버가 데이터를 통합 관리하는 방식이다. \ 
#v(0.3em)
② 특정 관리 권한을 가진 사용자만 장부를 열람할 수 있다. \ 
#v(0.3em)
③ 네트워크의 모든 참여자가 동일한 장부를 공유하고 검증한다. \ 
#v(0.3em)
④ 데이터의 수정과 삭제가 기존 방식보다 훨씬 용이하다. \ 
#v(0.3em)
⑤ 인터넷 연결이 없는 오프라인 환경에서만 작동하는 기술이다.
#v(1.5em)

*6.* 합의 알고리즘의 주요 역할로 가장 적절한 것은? #text(weight: "bold", size: 8pt, fill: gray)[(3.1점)]
#v(0.4em)
① 전체 네트워크의 연산 속도를 획기적으로 향상시킨다. \ 
#v(0.3em)
② 연산 과정에서 발생하는 에너지 소모를 최소화한다. \ 
#v(0.3em)
③ 참여자들이 공유하는 데이터의 위조와 변조를 방지한다. \ 
#v(0.3em)
④ 중앙 서버의 저장 용량을 효율적으로 증설한다. \ 
#v(0.3em)
⑤ 모든 참여자의 개인 신상 정보를 완벽하게 공개한다.
#v(1.5em)

*7.* 상용화의 걸림돌로 지적된 두 가지 요소는? #text(weight: "bold", size: 8pt, fill: gray)[(2.9점)]
#v(0.4em)
① 하드웨어의 가격과 장치의 크기 \ 
#v(0.3em)
② 기기의 무게와 세련되지 못한 디자인 \ 
#v(0.3em)
③ 과도한 에너지 소모와 느린 처리 속도 \ 
#v(0.3em)
④ 보안의 취약성과 과도한 익명성 보장 \ 
#v(0.3em)
⑤ 프로그래밍 언어의 한계와 국가 간 장벽
#v(1.5em)

*8.* 위 글의 제목으로 가장 적절한 것은? #text(weight: "bold", size: 8pt, fill: gray)[(3.3점)]
#v(0.4em)
① 비트코인의 탄생 배경과 역사 \ 
#v(0.3em)
② 블록체인 기술의 원리와 상용화의 과제 \ 
#v(0.3em)
③ 중앙 집중형 서버 관리의 중요성 \ 
#v(0.3em)
④ 네트워크 통신 보안의 미래 트렌드 \ 
#v(0.3em)
⑤ 에너지 절약을 위한 새로운 연산 기법
#v(1.5em)

= [9~12] 다음을 읽고 물음에 답하시오. (English)

#pro_passage([
  Remote work has reshaped our understanding of workplace productivity. While many enjoy the flexibility, others struggle with the lack of 'social connection.' This phenomenon, often called 'the lonely office,' highlights the importance of human interaction in maintaining employee well-being and creative collaboration. (Business/Culture)
], rgb("#F5F5F5"))

#v(0.8em)

*9.* What is the main idea of the passage? #text(weight: "bold", size: 8pt, fill: gray)[(2.6점)]
#v(0.4em)
① Technical advantages of office buildings \ 
#v(0.3em)
② Impact of remote work on social connection \ 
#v(0.3em)
③ Cost-saving tips for global companies \ 
#v(0.3em)
④ The history of internet and video technology \ 
#v(0.3em)
⑤ How to manage working hours more effectively
#v(1.5em)

*10.* What does 'the lonely office' suggest? #text(weight: "bold", size: 8pt, fill: gray)[(3.4점)]
#v(0.4em)
① A quiet and peaceful working environment \ 
#v(0.3em)
② A significant lack of social and human interaction \ 
#v(0.3em)
③ Cheaper office supplies for remote employees \ 
#v(0.3em)
④ Faster internet connection in modern buildings \ 
#v(0.3em)
⑤ Advanced security systems for data protection
#v(1.5em)

*11.* What is mentioned as important for creative collaboration? #text(weight: "bold", size: 8pt, fill: gray)[(2.5점)]
#v(0.4em)
① Faster computers with high-end processors \ 
#v(0.3em)
② Lower salaries for entry-level employees \ 
#v(0.3em)
③ Meaningful human and social interaction \ 
#v(0.3em)
④ Individual soundproof cabins for all workers \ 
#v(0.3em)
⑤ More strict rules regarding working from home
#v(1.5em)

*12.* The tone of the passage is best described as... #text(weight: "bold", size: 8pt, fill: gray)[(3점)]
#v(0.4em)
① Highly optimistic about the future of technology \ 
#v(0.3em)
② Balanced and critical of current workplace shifts \ 
#v(0.3em)
③ Aggressive towards traditional office management \ 
#v(0.3em)
④ Completely indifferent to employee well-being \ 
#v(0.3em)
⑤ Humorous and light-hearted about the situation
#v(1.5em)

= [13~15] 다음을 읽고 물음에 답하시오. (English)

#pro_passage([
  Genetic engineering has opened new doors for medicine, allowing for targeted treatments for rare diseases. By modifying DNA, scientists can fix mutations that cause illness. However, the prospect of 'designer babies' raises profound ethical dilemmas regarding human identity and equality. (Biology/Ethics)
], rgb("#F5F5F5"))

#v(0.8em)

*13.* How does genetic engineering help medicine? #text(weight: "bold", size: 8pt, fill: gray)[(2.8점)]
#v(0.4em)
① By making local clinics much cheaper to run \ 
#v(0.3em)
② By allowing targeted treatments for rare diseases \ 
#v(0.3em)
③ By improving the basic nursing skills of staff \ 
#v(0.3em)
④ By reducing the time spent in hospital stays \ 
#v(0.3em)
⑤ By automating the entire pharmacy system
#v(1.5em)

*14.* What is the ethical concern mentioned in the text? #text(weight: "bold", size: 8pt, fill: gray)[(3.5점)]
#v(0.4em)
① High electricity usage in medical laboratories \ 
#v(0.3em)
② The issue of designer babies and human identity \ 
#v(0.3em)
③ The general lack of laboratory space for research \ 
#v(0.3em)
④ Noise pollution from advanced medical equipment \ 
#v(0.3em)
⑤ Difficulties students face in learning DNA structures
#v(1.5em)

*15.* What is TRUE according to the passage? #text(weight: "bold", size: 8pt, fill: gray)[(2.7점)]
#v(0.4em)
① DNA cannot be modified by any current technology \ 
#v(0.3em)
② Ethics are not important in modern scientific research \ 
#v(0.3em)
③ Targeted treatment is considered completely impossible \ 
#v(0.3em)
④ Scientists are able to fix specific DNA mutations \ 
#v(0.3em)
⑤ Rare diseases are currently being ignored by scientists
#v(1.5em)
