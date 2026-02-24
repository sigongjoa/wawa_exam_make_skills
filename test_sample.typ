#set page(
  paper: "a4",
  margin: (top: 2cm, bottom: 2cm, left: 1.5cm, right: 1.5cm),
  columns: 2
)

#let korean-font = "NanumGothic" 
#let english-font = "Latin Modern Roman"

#show text: set text(lang: "ko", size: 10pt)

#let english_passage(body) = {
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
  box(
    fill: rgb("#e6f7ff"),
    inset: 12pt,
    outset: 5pt,
    radius: 4pt,
    width: 100%,
    body
  )
}

// 0.11 호환 타이틀 (컬럼 안에서 첫 번째 위치하도록)
#align(center)[
  #text(1.5em, weight: "bold")[Wawa 학원 국어/영어 모의고사] \
  #text(1.1em)[주제: 인공지능 윤리 (AI 출제 샘플)]
]

#v(1em)

---

= [1~2] 다음 글을 읽고 물음에 답하시오.

#korean_passage[
  최근 인공지능(AI) 기술이 비약적으로 발전함에 따라 ‘AI 윤리’에 대한 논의가 가열되고 있다. AI는 방대한 데이터를 학습하여 인간의 판단을 보조하거나 대체하지만, 그 과정에서 데이터에 내재된 편향성(bias)이 증폭되어 차별을 야기할 수 있다는 우려가 크다. 따라서 AI 개발 단계에서부터 투명성과 공정성을 확보하기 위한 제도적 장치가 필수적이다.
]

#v(0.5em)

*1.* 위 글의 핵심 주장으로 가장 적절한 것은? (3점)
#v(0.3em)
① AI 기술 발전을 위해 학습량을 늘려야 한다.
#v(0.3em)
② AI의 판단 능력이 인간을 넘어섰다.
#v(0.3em)
③ AI 윤리 확보를 위한 제도 마련이 시급하다.
#v(0.3em)
④ AI의 편향성 제거 불가능성을 수용해야 한다.
#v(0.3em)
⑤ 데이터 학습 차별은 단순한 기술적 오류다.

#v(0.5em)

*2.* 글의 문맥상 ‘편향성’과 반대되는 단어는?
#v(0.3em)
① 투명성
#v(0.3em)
② 공정성
#v(0.3em)
③ 효율성

#colbreak() // 2단 레이아웃에서의 단 바꿈

= [3~4] Read the text and answer.

#english_passage[
  Artificial Intelligence (AI) raises significant ethical questions. One of the main concerns is the lack of "explainability," which means understanding how an AI arrives at a particular conclusion.
]

#v(0.5em)

*3.* What is the main concern?
#v(0.3em)
① High maintenance costs
#v(0.3em)
② Difficulty in explaining processes
#v(0.3em)
③ Slow processing speed

#v(1em)

#align(center, text(0.8em, fill: gray)[--- 시험지 끝 ---])
