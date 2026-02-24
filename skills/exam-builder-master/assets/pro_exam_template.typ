#set page(
  paper: "a4",
  // 전문 인쇄용 여백: 제본용 안쪽 여백을 더 넓게 설정
  margin: (top: 2cm, bottom: 2cm, inside: 2.5cm, outside: 1.5cm),
  columns: 2,
  // 인쇄소 도련(Bleed) 3mm 설정
  flipped: false
)

#let korean-font = "NanumGothic"
#let english-font = "Latin Modern Roman"

#show text: set text(lang: "ko", size: 9.5pt)

// 1. 수험생 정보란 (Student Info)
#let student_info() = {
  rect(width: 100%, stroke: 0.5pt + black, inset: 10pt)[
    #grid(columns: (1fr, 1fr, 1fr), gutter: 1em,
      [#text(weight: "bold")[학년:] #h(2cm)],
      [#text(weight: "bold")[반:] #h(2cm)],
      [#text(weight: "bold")[성명:] #h(3cm)]
    )
  ]
}

// 2. 전문 지문 박스 (Passage Box) - CMYK 호환성 고려
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

// 3. 문항 점수 표시 (Points)
#let point(val) = {
  text(weight: "bold", size: 8pt, fill: gray)[(${val}점)]
}

// 타이틀 섹션 (인쇄 시 중앙 정렬 및 로고 배치 고려)
#align(center)[
  #text(2.2em, weight: "bold")[2026학년도 Wawa 대입 모의고사] 
  #v(0.5em)
  #text(1.3em)[제1교시 국어/영어 영역]
]

#v(1em)
#student_info()
#v(1.5em)

---

= [1~4] 다음 글을 읽고 물음에 답하시오. (국어)

#pro_passage(
  [
    최근 인공지능(AI)은 인간의 판단을 보조하는 수준을 넘어... (인쇄용 고품질 지문 삽입)
  ],
  rgb("#F0F8FF")
)

#v(1em)

*1.* 위 글의 논리적 구조로 가장 적절한 것은? #point(3.2)
#v(0.5em)
① 1번 선지 #h(0.5em) ② 2번 선지 #h(0.5em) ③ 3번 선지 #h(0.5em) ④ 4번 선지 #h(0.5em) ⑤ 5번 선지

#colbreak()

= [5~7] Read the passage and answer. (English)

#pro_passage(
  [
    Environmental sustainability has become a core value in modern consumerism... (Professional English text)
  ],
  rgb("#F5F5F5")
)

#v(1em)

*5.* What is the primary purpose of the text? #point(2.5)
#v(0.5em)
① Option A
#v(0.5em)
② Option B

#align(center, text(0.8em, fill: gray)[--- 본 시험지의 무단 전재 및 배포를 금합니다 ---])
