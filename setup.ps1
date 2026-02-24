# Wawa Exam Builder - Windows PowerShell Setup Script

Write-Host "--- [1/4] 시스템 환경 확인 중... ---" -ForegroundColor Cyan

# Node.js 확인
if (Get-Command node -ErrorAction SilentlyContinue) {
    $nodeVer = node -v
    Write-Host "✅ Node.js 설치 확인: $nodeVer" -ForegroundColor Green
} else {
    Write-Host "❌ Node.js가 없습니다. https://nodejs.org 에서 설치해주세요." -ForegroundColor Red
    exit
}

# Python 확인
if (Get-Command python -ErrorAction SilentlyContinue) {
    Write-Host "✅ Python 설치 확인" -ForegroundColor Green
} elseif (Get-Command py -ErrorAction SilentlyContinue) {
    Write-Host "✅ Python(py) 설치 확인" -ForegroundColor Green
} else {
    Write-Host "⚠️ Python이 검색되지 않습니다. 지문 검색 기능을 사용하려면 Python이 필요합니다." -ForegroundColor Yellow
}

Write-Host "`n--- [2/4] Node.js 의존성(npm) 설치 중... ---" -ForegroundColor Cyan
npm install

Write-Host "`n--- [3/4] Python 의존성(pip) 설치 중... ---" -ForegroundColor Cyan
if (Get-Command pip -ErrorAction SilentlyContinue) {
    pip install duckduckgo-search beautifulsoup4
} elseif (Get-Command pip3 -ErrorAction SilentlyContinue) {
    pip3 install duckduckgo-search beautifulsoup4
}

Write-Host "`n--- [4/4] Typst(시험지 생성기) 확인 중... ---" -ForegroundColor Cyan
if (Get-Command typst -ErrorAction SilentlyContinue) {
    Write-Host "✅ Typst 설치 확인" -ForegroundColor Green
} else {
    Write-Host "⚠️ Typst가 없습니다. winget을 통해 설치를 시도합니다..." -ForegroundColor Yellow
    winget install typst.typst
}

Write-Host "`n✨ 모든 설정이 완료되었습니다! 이제 다음 명령어로 테스트해보세요:" -ForegroundColor Green
Write-Host "node skills/exam-builder-master/scripts/pro_test_15_print_v2.js" -ForegroundColor White
