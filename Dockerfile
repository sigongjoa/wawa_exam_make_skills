# 1. Base Image: Node.js 20 (Slim)
FROM node:20-slim

# 2. 필요한 시스템 패키지 및 Python 설치
RUN apt-get update && apt-get install -y 
    python3 
    python3-pip 
    curl 
    git 
    xz-utils 
    && rm -rf /var/lib/apt/lists/*

# 3. Typst CLI 설치 (v0.11.0)
RUN curl -L https://github.com/typst/typst/releases/download/v0.11.0/typst-x86_64-unknown-linux-musl.tar.xz -o typst.tar.xz 
    && tar -xvf typst.tar.xz 
    && mv typst-x86_64-unknown-linux-musl/typst /usr/local/bin/ 
    && rm -rf typst.tar.xz typst-x86_64-unknown-linux-musl

# 4. 작업 디렉토리 설정
WORKDIR /app

# 5. 의존성 파일 복사 및 설치
COPY package*.json ./
RUN npm install

# 6. Python 의존성 설치
RUN pip3 install --no-cache-dir duckduckgo-search beautifulsoup4 --break-system-packages

# 7. 소스 코드 복사
COPY . .

# 8. 기본 실행 명령 (서버 실행 또는 대기)
CMD ["npm", "run", "server"]
