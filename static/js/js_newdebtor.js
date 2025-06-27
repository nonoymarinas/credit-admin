function newDebtors() {
    this.handleClickSaveBtn = this.handleClickSaveBtn.bind(this)
}
newDebtors.prototype.enableSaveBtn = function () {
    this.saveBtn = document.querySelector('.jsNewDebtorSaveBtn');
    this.saveBtn.addEventListener('click', this.handleClickSaveBtn)
}
newDebtors.prototype.handleClickSaveBtn = async function () {
    const data  = await fetchData.getData('/creditapp/allpersons')
    if(data){
        console.log(data)
    }
}
