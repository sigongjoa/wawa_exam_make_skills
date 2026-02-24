# 🚀 Wawa Exam Builder Skills

이 저장소는 Claude Cowork와 같은 에이전트 환경에서 **국어/영어/수학 문제 검색, 생성, DB 저장 및 Typst PDF 출력**을 자동화하기 위한 스킬 모음입니다.

## 1. 준비하기

본 시스템은 Node.js, Python, Typst 환경을 필요로 합니다.
압축을 풀거나 클론한 후, 운영체제에 맞는 설정 파일을 실행해 주세요.

- **Windows**: `setup.bat` 실행
- **Mac/Linux**: `bash setup.sh` 실행

## 2. 에이전트 스킬 연결 (Claude Cowork)

1. Claude Cowork에서 `skills/exam-builder-master` 폴더를 새로운 스킬로 등록합니다.
2. Claude에게 다음과 같이 요청해 보세요.
   - *"최신 경제 뉴스를 검색해서 고1 수준 영어 빈칸 추론 문제 3개 만들어줘."*
   - *"방금 만든 문제들을 DB에 저장하고, Typst PDF로 뽑아줘."*

## 3. 구성 요소

- `skills/exam-builder-master/`: 에이전트가 읽는 스킬의 핵심 정의서(`SKILL.md`)와 도구 스크립트.
- `skills/exam-builder-master/assets/`: Typst 국어/영어 시험지 전용 2단 레이아웃 템플릿.
- `server/`: 데이터를 저장할 SQLite DB 모의 구성.
