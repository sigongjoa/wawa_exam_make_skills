const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// 이 스크립트는 실제 Typst를 실행하는 래퍼(Wrapper) 역할을 합니다.
// 추후 에이전트가 생성한 JSON 문제 데이터를 읽어들여 템플릿에 동적으로 
// 주입하는 코드를 이 위치에 작성합니다.

const templatePath = path.join(__dirname, '../assets/exam_template.typ');
const outputPath = path.join(process.cwd(), 'test_exam.pdf');

console.log('Typst 템플릿 컴파일을 시작합니다...');

try {
  // typst 컴파일 실행
  execSync(`typst compile "${templatePath}" "${outputPath}"`, { stdio: 'inherit' });
  console.log(`
성공: 시험지 PDF가 생성되었습니다! => ${outputPath}`);
} catch (error) {
  console.error('
오류: Typst 컴파일 중 문제가 발생했습니다.', error.message);
  console.log('typst가 시스템에 설치되어 있는지 확인해주세요.');
}
