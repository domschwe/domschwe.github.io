//const doc = new jsPDF();
//let button = document.getElementById('generate');
//button.addEventListener('click', makePdf);

function makePdf() {
    const filename  = 'Sample Selection.pdf';
    let pdf = new jsPDF();
    const pageText = document.querySelector('#content').html();
    pdf.setFontSize(11);
    pdf.fromHTML(pageText);
    pdf.save(filename);
}

// Credit to https://itnext.io/javascript-convert-html-css-to-pdf-print-supported-very-sharp-and-not-blurry-c5ffe441eb5e
// This one lets you improve the PDF sharpness by scaling up the HTML node tree to render as an image before getting pasted on the PDF.
function print(quality = 3) {
    const filename  = 'Sample Selection.pdf';

    html2canvas(document.querySelector('#content'),
        {scale: quality}
    ).then(canvas => {
        let pdf = new jsPDF('p', 'mm');
        pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, 210, 297);
        pdf.save(filename);
    });
}

