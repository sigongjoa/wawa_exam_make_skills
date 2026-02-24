const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

/**
 * v2.0: 다중 지문 및 문항 데이터를 Typst 코드로 변환하여 PDF 발행
 * inputData: { examTitle: string, passages: Array<{ subject: string, text: string, questions: Array<{ id: number, text: string, options: Array<string> }> }> }
 */
function buildExamPdf(inputData) {
  let typstCode = `
#set page(paper: "a4", margin: (top: 1.5cm, bottom: 1.5cm, left: 1cm, right: 1cm), columns: 2)
#set text(font: "NanumGothic", size: 10pt)

#let passage_box(body, color) = {
  box(fill: color, inset: 10pt, radius: 4pt, width: 100%, body)
}

#place(top + center, scope: "parent", float: true, align(center)[
  #text(1.8em, weight: "bold")[${inputData.examTitle}] \\
  #text(1.1em)[${new Date().toLocaleDateString()} 실전 모의고사]
])
#v(3em)
`;

  inputData.passages.forEach((p, pIdx) => {
    const color = p.subject === 'Korean' ? 'rgb("#e6f7ff")' : 'rgb("#f5f5f5")';
    typstCode += `
= [${p.questions[0].id}~${p.questions[p.questions.length-1].id}] 다음을 읽고 물음에 답하시오. (${p.subject})

#passage_box([
  ${p.text}
], ${color})

#v(1em)
`;

    p.questions.forEach((q) => {
      typstCode += `
*${q.id}.* ${q.text}
#v(0.5em)
${q.options.map((opt, oIdx) => `${['①', '②', '③', '④', '⑤'][oIdx]} ${opt}`).join('\n#v(0.3em)\n')}
#v(1.5em)
`;
    });
  });

  const tempTypstFile = path.join(process.cwd(), 'temp_batch_exam.typ');
  fs.writeFileSync(tempTypstFile, typstCode);
  
  try {
    execSync(`typst compile "${tempTypstFile}" "final_test_exam.pdf"`, { stdio: 'inherit' });
    console.log('✅ 15문항 모의고사 생성 성공: final_test_exam.pdf');
  } catch (err) {
    console.error('❌ PDF 생성 실패:', err.message);
  } finally {
    // 임시 파일 삭제 (선택 사항)
    // fs.unlinkSync(tempTypstFile);
  }
}

// 테스트를 위한 더미 데이터 주입 (실제로는 에이전트가 생성한 데이터를 받음)
const dummyData = {
  examTitle: "Wawa 실전 15문항 국어/영어 모의고사",
  passages: [
    {
      subject: "Korean",
      text: "인공지능 윤리에 관한 지문 내용... (생략)",
      questions: [
        { id: 1, text: "주제 파악", options: ["보기1", "보기2", "보기3", "보기4", "보기5"] },
        { id: 2, text: "세부 내용", options: ["보기1", "보기2", "보기3", "보기4", "보기5"] },
        { id: 3, text: "추론 문제", options: ["보기1", "보기2", "보기3", "보기4", "보기5"] },
        { id: 4, text: "어휘 문제", options: ["보기1", "보기2", "보기3", "보기4", "보기5"] }
      ]
    },
    {
      subject: "English",
      text: "AI explainability and its impact on society... (Omitted)",
      questions: [
        { id: 9, text: "Main idea?", options: ["Option1", "Option2", "Option3", "Option4", "Option5"] },
        { id: 10, text: "Word meaning?", options: ["Option1", "Option2", "Option3", "Option4", "Option5"] }
      ]
    }
  ]
};

// 실행 예시
if (require.main === module) {
    buildExamPdf(dummyData);
}
