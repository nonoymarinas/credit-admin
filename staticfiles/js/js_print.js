function printQuotations() {
    this.handleClickPrintPreviewBtn = this.handleClickPrintPreviewBtn.bind(this);
}
printQuotations.prototype.enablePrinPreviewBtn = function () {
    this.printPreviewBtn = document.querySelector('.jsEllipsisPrintMenu');
    this.printPreviewBtn.addEventListener('click', this.handleClickPrintPreviewBtn);
}
printQuotations.prototype.handleClickPrintPreviewBtn = async function () {
    this.attachPrintPreviewInterfaces();
}
printQuotations.prototype.attachPrintPreviewInterfaces = async function () {
    this.printPreviewCont = (await fetchData.viewData('quote-print-page')).querySelector('.jsMainTables');
    const jsMainLayoutCont = document.querySelector('.jsMainLayoutCont');
    jsMainLayoutCont.classList.add('display-none');
    document.body.append(this.printPreviewCont);
}