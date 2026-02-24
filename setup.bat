@echo off
echo [1/3] Node.js 패키지 설치 중...
npm install

echo [2/3] Python 검색/분석 패키지 설치 중...
pip install duckduckgo-search beautifulsoup4

echo [3/3] Typst 설치 확인 중...
where typst >nul 2>nul
if %errorlevel% neq 0 (
    echo Typst가 없습니다. winget을 통해 설치를 시도합니다...
    winget install typst.typst
) ELSE (
    echo Typst가 이미 설치되어 있습니다.
)

echo 설치가 완료되었습니다! 이제 Claude에게 스킬을 연결하고 명령을 내려보세요.
pause
