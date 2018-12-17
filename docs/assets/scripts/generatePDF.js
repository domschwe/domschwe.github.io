generate = function()
{
    var pdf = new jsPDF('p', 'pt', 'a4');
    pdf.setFontSize(18);
    pdf.fromHTML(document.getElementById('html-2-pdfwrapper'),
        margins.left, // x coord
        margins.top,
        {
            // y coord
            width: margins.width// max width of content on PDF
        },function(dispose) {
            headerFooterFormatting(pdf)
        },
        margins);

    var iframe = document.createElement('iframe');
    iframe.setAttribute('style','position:absolute;right:0; top:0; bottom:0; height:100%; width:650px; padding:20px;');
    document.body.appendChild(iframe);

    iframe.src = pdf.output('datauristring');
};