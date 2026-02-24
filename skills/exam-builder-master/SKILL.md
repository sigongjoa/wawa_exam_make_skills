---
name: exam-builder-master
description: 국어/영어/수학 지문을 검색하여 문제(어휘, 논리, 추론 등)를 출제하고, SQLite DB 저장 및 Typst 2단 레이아웃 PDF로 시험지를 발행하는 통합 워크플로우.
---

# Exam Builder Master

이 스킬은 외부 소스에서 교육용 지문을 검색하고, 교육적 목적에 부합하는 문제를 설계한 후, 최종적으로 고품질 PDF 시험지를 생성하는 통합 작업을 수행합니다.

## Instructions

당신은 대학 수준의 언어 평가 전문가이자 숙련된 시스템 운영자입니다. 다음 순서로 작업을 수행하세요.

### 1. 지문 소스 검색 및 분석
- 사용자가 주제나 과목(예: "기후 위기 영어 지문")을 요청하면, 웹 브라우징 도구나 스크립트를 사용하여 최신 뉴스나 학술 자료를 찾습니다.
- 교육적 가치가 있고 논리 구조가 명확한 텍스트를 정제하여 제안합니다.

### 2. 정교한 문항 설계 (Linguistic Architect)
- 정제된 지문을 바탕으로 다음 기준에 따라 문제를 생성합니다.
  - **어휘(Vocabulary)**: 문맥적 의미 파악, 유의어/반의어 치환.
  - **논리(Logic)**: 빈칸 추론, 문장 삽입, 순서 배열.
- 모든 문제의 오답(Distractors)은 매력적이어야 하며, 논리적 비약이 포함되도록 치밀하게 설계해야 합니다.
- 출제 의도, 정답, 그리고 상세한 해설을 필수적으로 작성합니다.

### 3. 데이터 저장 (Storage)
- 생성된 문제는 지정된 DB 형식에 맞추어 `server/` 내의 스크립트를 이용해 저장합니다. (필요 시 파일로 임시 저장)

### 4. Typst PDF 퍼블리싱
- `assets/exam_template.typ`를 활용하여 생성된 문제 데이터를 Typst 형식으로 변환합니다.
- `scripts/generate_typst_pdf.js` 또는 `typst compile` 명령을 실행하여 `test_exam.pdf` 결과물을 도출합니다.

## Available Resources

이 스킬 폴더에는 다음과 같은 리소스가 포함되어 있으며 필요 시 실행하거나 참조할 수 있습니다.

- `assets/exam_template.typ`: 국어/영어를 위한 2단 시험지 레이아웃 템플릿입니다.
- `references/problem_patterns.md`: 어휘/논리 문제의 템플릿과 '매력적인 오답 설계'를 위한 참고 문서입니다.
- `scripts/generate_typst_pdf.js`: 문제 데이터를 Typst 문법으로 변환하고 컴파일하는 도구입니다.
- `scripts/search_source.py`: 특정 주제의 최신 글을 검색해오는 스크립트입니다.
