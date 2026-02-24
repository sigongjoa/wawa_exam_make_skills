
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
  #text(2.2em, weight: "bold")[Wawa 전문 인쇄용 15문항 모의고사] \
  #v(0.5em)
  #text(1.2em)[2026학년도 제1회 통합 고사]
]

#v(1em)
#student_info()
#v(1.5em)

= [1~4] 다음을 읽고 물음에 답하시오. (Korean)

#passage_box([
  현대 사회에서 데이터 리터러시(Data Literacy)는 필수적인 역량으로 꼽힌다. 이는 단순히 데이터를 읽는 능력을 넘어, 데이터의 출처를 비판적으로 검증하고 그 이면에 숨겨진 의도를 파악하는 능력을 의미한다. 가짜 뉴스와 조작된 통계가 난무하는 인포데믹(Infodemic) 시대에 데이터 리터러시는 민주 시민의 핵심 자질이다. (인문/사회 독해)
], rgb("#E6F7FF"))

#v(0.8em)

*1.* 위 글의 논지 전개 방식으로 가장 적절한 것은? #point(2.8)
#v(0.4em)
① 시간적 흐름에 따른 변화 #h(0.4em) ② 전문가 의견의 상충 제시 #h(0.4em) ③ 개념의 정의와 필요성 강조 #h(0.4em) ④ 비유를 통한 구체적 형상화 #h(0.4em) ⑤ 원인과 결과의 연쇄적 서술
#v(1.5em)

*2.* ‘인포데믹’에 대한 설명으로 적절하지 않은 것은? #point(3.2)
#v(0.4em)
① 정보의 과잉으로 발생한다. #h(0.4em) ② 데이터의 조작이 포함될 수 있다. #h(0.4em) ③ 민주 시민의 자질을 위협한다. #h(0.4em) ④ 기술적 오류에 의해서만 발생한다. #h(0.4em) ⑤ 비판적 검증의 필요성을 높인다.
#v(1.5em)

*3.* 데이터 리터러시의 진정한 의미로 언급된 것은? #point(2.5)
#v(0.4em)
① 빠른 데이터 검색 능력 #h(0.4em) ② 복잡한 수식 계산 능력 #h(0.4em) ③ 데이터의 비판적 검증 능력 #h(0.4em) ④ 방대한 데이터 저장 능력 #h(0.4em) ⑤ 데이터의 시각화 도구 사용
#v(1.5em)

*4.* 위 글을 바탕으로 <보기>를 이해한 내용으로 적절한 것은? #point(3.5)
#v(0.4em)
① 통계는 항상 객관적이다. #h(0.4em) ② 데이터 이면의 의도는 무시해도 된다. #h(0.4em) ③ 모든 정보는 비판적 수용이 필요하다. #h(0.4em) ④ 데이터 리터러시는 선택적 역량이다. #h(0.4em) ⑤ 인포데믹은 자연적인 현상일 뿐이다.
#v(1.5em)

= [5~8] 다음을 읽고 물음에 답하시오. (Korean)

#passage_box([
  블록체인의 핵심은 '분산 원장' 기술이다. 이는 중앙 서버 없이 네트워크 참여자 모두가 장부를 공유하고 검증하는 방식이다. 이 과정에서 작업 증명(PoW)이나 지분 증명(PoS)과 같은 합의 알고리즘이 사용되며, 이는 데이터 위조를 사실상 불가능하게 만든다. 하지만 연산 과정에서의 에너지 소모와 처리 속도의 한계는 상용화의 큰 걸림돌이다. (기술 독해)
], rgb("#E6F7FF"))

#v(0.8em)

*5.* 블록체인의 '분산 원장' 기술에 대한 설명으로 옳은 것은? #point(2.7)
#v(0.4em)
① 중앙 서버가 관리한다. #h(0.4em) ② 특정 관리자만 열람한다. #h(0.4em) ③ 네트워크 참여자가 공유한다. #h(0.4em) ④ 데이터 수정이 매우 쉽다. #h(0.4em) ⑤ 오프라인에서만 작동한다.
#v(1.5em)

*6.* 합의 알고리즘의 주요 역할은 무엇인가? #point(3.1)
#v(0.4em)
① 네트워크 속도 향상 #h(0.4em) ② 에너지 소모 절감 #h(0.4em) ③ 데이터 위조 방지 #h(0.4em) ④ 서버 용량 증설 #h(0.4em) ⑤ 익명성 완전 보장
#v(1.5em)

*7.* 상용화의 걸림돌로 지적된 두 가지 요소는? #point(2.9)
#v(0.4em)
① 가격과 크기 #h(0.4em) ② 무게와 디자인 #h(0.4em) ③ 에너지 소모와 처리 속도 #h(0.4em) ④ 보안과 익명성 #h(0.4em) ⑤ 언어와 국가 장벽
#v(1.5em)

*8.* 위 글의 제목으로 가장 적절한 것은? #point(3.3)
#v(0.4em)
① 비트코인의 역사 #h(0.4em) ② 블록체인의 원리와 한계 #h(0.4em) ③ 중앙 서버의 중요성 #h(0.4em) ④ 네트워크의 미래 #h(0.4em) ⑤ 에너지 절약 기법
#v(1.5em)

= [9~12] 다음을 읽고 물음에 답하시오. (English)

#passage_box([
  Remote work has reshaped our understanding of workplace productivity. While many enjoy the flexibility, others struggle with the lack of 'social connection.' This phenomenon, often called 'the lonely office,' highlights the importance of human interaction in maintaining employee well-being and creative collaboration. (Business/Culture)
], rgb("#F5F5F5"))

#v(0.8em)

*9.* What is the main idea of the passage? #point(2.6)
#v(0.4em)
① Advantages of office buildings #h(0.4em) ② Impact of remote work on social connection #h(0.4em) ③ Cost-saving tips for companies #h(0.4em) ④ History of internet technology #h(0.4em) ⑤ How to manage time effectively
#v(1.5em)

*10.* What does 'the lonely office' suggest? #point(3.4)
#v(0.4em)
① A quiet working environment #h(0.4em) ② Lack of social interaction #h(0.4em) ③ Cheaper office supplies #h(0.4em) ④ Faster internet connection #h(0.4em) ⑤ Advanced security systems
#v(1.5em)

*11.* What is mentioned as important for creative collaboration? #point(2.5)
#v(0.4em)
① Faster computers #h(0.4em) ② Lower salaries #h(0.4em) ③ Human interaction #h(0.4em) ④ Individual cabins #h(0.4em) ⑤ More strict rules
#v(1.5em)

*12.* The tone of the passage is... #point(3)
#v(0.4em)
① Highly optimistic #h(0.4em) ② Balanced and critical #h(0.4em) ③ Aggressive #h(0.4em) ④ Indifferent #h(0.4em) ⑤ Humorous
#v(1.5em)

= [13~15] 다음을 읽고 물음에 답하시오. (English)

#passage_box([
  Genetic engineering has opened new doors for medicine, allowing for targeted treatments for rare diseases. By modifying DNA, scientists can fix mutations that cause illness. However, the prospect of 'designer babies' raises profound ethical dilemmas regarding human identity and equality. (Biology/Ethics)
], rgb("#F5F5F5"))

#v(0.8em)

*13.* How does genetic engineering help medicine? #point(2.8)
#v(0.4em)
① By making clinics cheaper #h(0.4em) ② By targeting rare diseases #h(0.4em) ③ By improving nursing skills #h(0.4em) ④ By reducing hospital stays #h(0.4em) ⑤ By automating pharmacies
#v(1.5em)

*14.* What is the ethical concern mentioned in the text? #point(3.5)
#v(0.4em)
① High electricity usage #h(0.4em) ② Designer babies and identity #h(0.4em) ③ Lack of laboratory space #h(0.4em) ④ Noise pollution #h(0.4em) ⑤ Difficulty in learning DNA
#v(1.5em)

*15.* What is TRUE according to the passage? #point(2.7)
#v(0.4em)
① DNA cannot be modified #h(0.4em) ② Ethics are not important #h(0.4em) ③ Targeted treatment is impossible #h(0.4em) ④ Scientists fix mutations #h(0.4em) ⑤ Rare diseases are ignored
#v(1.5em)
