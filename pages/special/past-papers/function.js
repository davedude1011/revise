// Replace 'your-pdf-link.pdf' with the actual link to your PDF document
const pdfLink = 'https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2022/june/AQA-83001F-QP-JUN22.pdf';

// Initialize Fabric.js canvas
const canvas = new fabric.Canvas('pdfCanvas', { isDrawingMode: true });

// Load and render PDF
pdfjsLib.getDocument(pdfLink).promise.then(function(pdfDoc) {
    for (let pageNum = 1; pageNum <= pdfDoc.numPages; pageNum++) {
        pdfDoc.getPage(pageNum).then(function(page) {
            const viewport = page.getViewport({ scale: 1.5 });
            canvas.setDimensions({ width: viewport.width, height: viewport.height });

            page.render({
                canvasContext: canvas.getContext('2d'),
                viewport: viewport
            });
        });
    }
});