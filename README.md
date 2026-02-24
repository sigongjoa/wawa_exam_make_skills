# 🎓 Wawa Exam Builder (Windows & PowerShell 최적화 버전)

본 시스템은 **Windows 사용자**를 위해 설계된 AI 기반 국어/영어 모의고사 생성 도구입니다. 
`gemini-cli` 환경에서 작동하며, 윈도우 터미널(PowerShell) 환경에 맞춘 자동 설치 도구를 포함하고 있습니다.

## 🛠️ 시작하기 전 준비물 (필수)

사용자의 컴퓨터에 다음이 설치되어 있어야 합니다:
1.  **Node.js v20 이상**: [https://nodejs.org](https://nodejs.org)
2.  **gemini-cli**: 터미널(PowerShell)에 아래 명령어를 입력하여 설치하세요.
    ```powershell
    npm install -g @google/gemini-cli
    ```

---

## 🚀 윈도우 통합 설치 (원클릭)

컴퓨터에 아무것도 설치되지 않은 상태라면, 다음 중 하나를 실행해 주세요.

### 방법 1: PowerShell (추천)
윈도우 터미널에서 아래 명령어를 실행하여 모든 의존성(Node, Python, Typst)을 한 번에 세팅합니다.
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
.\setup.ps1
```

### 방법 2: 배치 파일 (구형 윈도우)
`setup.bat` 파일을 마우스 우클릭하여 **[관리자 권한으로 실행]** 하세요.

---

## 🤖 에이전트 스킬 연결 (Claude Cowork / Gemini CLI)

1.  본 저장소를 다운로드하고 압축을 풉니다.
2.  `skills/exam-builder-master` 폴더를 에이전트에게 전달하거나 스킬로 등록하세요.
3.  에이전트에게 명령하세요:
    -   *"이번 주 이슈를 검색해서 영어 15문항 모의고사를 만들어줘."*
    -   *"만든 문제를 전문 인쇄용 PDF로 뽑아줘."*

## 📦 구성 정보
- **지문 검색**: `search_source.py` (AI가 최신 뉴스에서 지문을 수집합니다.)
- **시험지 조판**: `assets/pro_exam_template.typ` (실제 수능과 똑같은 2단 레이아웃 제공)
- **인쇄 최적화**: 제본 여백, 수험생 정보란, 개행이 적용된 전문 인쇄 모드 지원.
