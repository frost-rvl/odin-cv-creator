import html2pdf from "html2pdf.js";
import "../styles/CallToAction.css"

export function CallToAction() {
  const downloadPDF = async () => {
    const source = window.document.getElementById('cv-container');
    const opt = {
      filename: 'myfile.pdf',
      image: { type: 'png', quality: 1 },
      html2canas: { scale: 3 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };
    await html2pdf().from(source).set(opt).save();
  };

  return (
    <div>
      <h1>CV Creator</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, porro!</p>
      <button className="cta-button" onClick={downloadPDF}>
        Download PDF
      </button>
    </div>
  )
}
