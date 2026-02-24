#set page(
  paper: "a4",
  margin: (top: 2cm, bottom: 2cm, left: 1.5cm, right: 1.5cm),
  columns: 2, 
)

#let korean-font = "Noto Sans CJK KR"
#let english-font = "Latin Modern Roman"

#show text: set text(font: korean-font, lang: "ko", size: 11pt)

#let english_passage(body) = {
  set text(font: english-font, lang: "en")
  box(
    fill: luma(245),
    inset: 12pt,
    outset: 5pt,
    radius: 4pt,
    width: 100%,
    body
  )
}

#let korean_passage(body) = {
  set text(font: korean-font, lang: "ko")
  box(
    fill: rgb("#e6f7ff"),
    inset: 12pt,
    outset: 5pt,
    radius: 4pt,
    width: 100%,
    body
  )
}

#place(
  top + center,
  scope: "parent",
  float: true,
  block(
    width: 100%,
    align: center,
    text(2em, weight: "bold")[Wawa 학원 모의고사],
    text(1.2em)[과목: 국어 / 영어]
  )
)

#v(2em)

= [1~2] 다음 글을 읽고 물음에 답하시오.

#korean_passage[
  이곳에 AI가 생성한 한국어 지문이나 검색된 지문이 삽입됩니다.
  Typst의 이 레이아웃은 시험지의 가독성을 크게 높여줍니다.
]

#v(1em)

*1.* 위 글의 핵심 주제로 가장 적절한 것은? (3점)
#v(0.5em)
① 1번 보기
#v(0.5em)
② 2번 보기
#v(0.5em)
③ 3번 보기
#v(0.5em)
④ 4번 보기
#v(0.5em)
⑤ 5번 보기

#v(1em)

*2.* 글의 문맥상 [A]에 들어갈 가장 적절한 접속어는?
#v(0.5em)
① 그리고
#v(0.5em)
② 그러나

#pagebreak()

= [3~4] Read the following text and answer the questions.

#english_passage[
  This is an example of an English passage. 
  The AI will generate high-quality text regarding the requested topic, 
  and format it nicely inside this designated box.
]

#v(1em)

*3.* What is the main idea of the passage?
#v(0.5em)
① Option 1
#v(0.5em)
② Option 2

#place(
  bottom + center,
  scope: "parent",
  float: true,
  block(
    width: 100%,
    align: center,
    text(0.8em, fill: gray)[--- 시험지 끝 ---]
  )
)
