#!/bin/bash

echo "[1/3] Node.js 패키지 설치 중..."
npm install

echo "[2/3] Python 검색/분석 패키지 설치 중..."
pip3 install duckduckgo-search beautifulsoup4

echo "[3/3] Typst 설치 확인 중..."
if ! command -v typst &> /dev/null
then
    echo "Typst가 발견되지 않았습니다. 패키지 매니저(brew, apt 등)를 이용해 'typst'를 설치해 주세요."
    echo "공식 설치 가이드: https://typst.app/docs/cli/"
else
    echo "Typst가 설치되어 있습니다."
fi

echo "설치가 완료되었습니다!"
