import "../styles/CallToAction.css"

export function CallToAction() {
  const printCV = () => {
    window.print();
  };

  return (
    <div id="ctaContainer">
      <div className="info-wrapper">
        <h1>CV Creator</h1>
        <p>Directly modify the information and export your CV as a PDF</p>
      </div>
      <button className="cta-button" onClick={printCV}>
        Download PDF
      </button>
    </div>
  )
}
