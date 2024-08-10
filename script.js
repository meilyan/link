function showPDF(id) {
    var pdfContainers = document.querySelectorAll('.pdf-container');
    pdfContainers.forEach(function(container) {
        container.classList.add('hidden');
    });

    var selectedPDF = document.getElementById(id);
    if (selectedPDF) {
        selectedPDF.classList.remove('hidden');
    }
}
