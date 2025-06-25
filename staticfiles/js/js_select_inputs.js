function select_Inputs(input, arr, propertyId, propertyName) {
    this.input = input;
    this.arr = arr;
    this.propertyName = propertyName;
    this.propertyId = propertyId;
    this.ul = input.closest('.jsSelectInputCont').querySelector('ul');
    this.handleFocusInput = this.handleFocusInput.bind(this);
    this.handleClickSelectLi = this.handleClickSelectLi.bind(this);
    this.handleInputInput = this.handleInputInput.bind(this);
}
select_Inputs.prototype.enableInputs = function () {
    this.input.addEventListener('focus', this.handleFocusInput);
    this.input.addEventListener('input', this.handleInputInput);
    this.input.removeAttribute('disabled');
}
select_Inputs.prototype.handleFocusInput = function (e) {
    const window = new windows()
    window.closeAllOpenAddressUl();
    this.populateSelection(this.arr);
    this.ul.classList.remove('display-none');
}
select_Inputs.prototype.handleInputInput = function () {
    const searchStr = this.input.value.toLowerCase();
    const searchResultArr = this.arr.filter(item => item[this.propertyName].toLowerCase().includes(searchStr));
    this.populateSelection(searchResultArr);

    this.ul.classList.remove('display-none');
}
select_Inputs.prototype.populateSelection = function () {
    this.ul.innerHTML = '';
    this.insertNoneSelectionLi();
    this.arr.forEach(item => {
        const htmlString = `<li class="select-input-li jsLi" data-id=${item[this.propertyId]}>${item[this.propertyName]}</li>`
        const jsLi = new DOMParser().parseFromString(htmlString, 'text/html').querySelector('.jsLi');
        jsLi.addEventListener('click', this.handleClickSelectLi);
        this.ul.appendChild(jsLi);
    });
}
select_Inputs.prototype.handleClickSelectLi = async function (e) {
    const dataId = e.target.getAttribute('data-id');
    this.input.setAttribute('data-id', dataId);
    if (dataId == 0 || dataId == null || dataId == '') {
        this.input.value = '';
    } else {
        this.input.value = e.target.textContent;
    }
    e.target.closest('ul').classList.add('display-none');
}

select_Inputs.prototype.insertNoneSelectionLi = function () {
    let htmlString = `<li class="select-input-li jsLi" data-id=0>none</li>`
    let jsLi = new DOMParser().parseFromString(htmlString, 'text/html').querySelector('.jsLi');
    jsLi.addEventListener('click', this.handleClickSelectLi);
    this.ul.appendChild(jsLi);
}
