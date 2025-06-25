const regexPatterns = {
    emailAddress: /^([a-z\d\.-]+)@([a-z\d-]+).([a-z]{2,8})(\.[a-z]{2,8})$/,
    iStillLoveYou: /^([\w@-]{8,20})$/,
    confirmPassword: /^([\w@-]{8,20})$/,
    mobileNo: /^(\+?\(?)([0-9\)-]{6,20})$/,
    landlineNo: /^(\+?\(?)([0-9\)-]{6,20})$/,
    latitude: /^(\+|-)?(?:90(?:(?:\.0{1,6})?)|(?:[0-9]|[1-8][0-9])(?:(?:\.[0-9]{1,6})?))$/,
    longitude: /^(\+|-)?(?:180(?:(?:\.0{1,6})?)|(?:[0-9]|[1-9][0-9]|1[0-7][0-9])(?:(?:\.[0-9]{1,6})?))$/,
    containerNo: /^(?:\s*[a-zA-Z0-9,_\.\077\0100\*\+\&\#\'\~\;\-\!\@\;]{1,}\s*)*$/,
    weigth: /^[+-]?\d+(\.\d+)?$/,
    quantity: /^[+-]?\d+(\.\d+)?$/,
    decimal: /^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)$/,
    umidNumber: /^\d{4}-\d{7}-\d{1}$/,
    sssNumber: /^\d{2}-\d{7}-\d{1}$/,
    pagibigNumber: /^\d{4}-\d{4}-\d{4}$/,
    philihealthNumber: /^\d{2}-\d{9}-\d{1}$/,
}

function tryCatchError(error) {
    this.error = error
}

tryCatchError.prototype.errorMessageType1 = function () {
    if (this.error.name == 'undefined' || this.error.name == null) {
        alertCustom.isConfirmedOk(alertContainer.errorAlert, this.error)
    } else {
        alertCustom.isConfirmedOk(alertContainer.errorAlert, 'Error: ' + this.error.name)
    }
}

function spinners() {
    this.spinnerBodyHtmlType01 = function () {
        htmlString = `<div class="spinner-cont jsSpinnerCont">
                        <div class="lds-dual-ring"></div>
                    </div>`
        const htmlDoc = new DOMParser().parseFromString(htmlString, 'text/html');
        const jsSpinnerCont = htmlDoc.querySelector('.jsSpinnerCont');
        return jsSpinnerCont;
    }
}

spinners.prototype.addSpinnerBodyType01 = function () {
    document.querySelector('body').appendChild(this.spinnerBodyHtmlType01());
}

spinners.prototype.addSpinnerElementType01 = function (className) {
    document.querySelector(`.${className}`).appendChild(this.spinnerBodyHtmlType01());
}
spinners.prototype.removeSpinner = function () {
    document.querySelector('.jsSpinnerCont').remove();
}

function isNullOrWhiteSpace(str) {
    if (str == null) return true;
    return str.toString().trim().length === 0;
}

const alertMessages = {
    saveSuccessfull: 'Save Successfull!',
    updateSuccessfull: 'Update Successfull!',
    deleteSuccessfull: 'Successfully Deleted!',
    inputFormat: `Invalid input character!`,
    databaseError: `Database Error!`,
    duplicateError: `File already exist in records!<br>Change or modify entry...`,
    serverError: `Server Error!`,
    delDatabaseItem: `Are you sure?<br>This will be permanently deleted!`,
    createProjectFirst: `Create and save Project Name first!`,
    itemHidden: `Items are hidden!<br>Click arrow to show items!`,
    nothingToHide: `Nothing to hide!`,
    failedToLoadHeader: 'Save successfully!<br>But failed to load header!',
    passwordDonotMatch: 'Confirm password did not match!<br>Please check..',
    usernamePasswordNotFound: 'Username or Password do not match or don\'t exist!',
    areYouSureYouWantToClose: 'Are you sure you want to close?',
    nameExistInDatabaseAndActive: 'This name exist on records and employee is active!<br>Please check!',
    nameExistInDatabaseAndNotActive: 'This name exist on records and employee is not active!<br>Please check!',
    nameExistInDatabaseAndBlockListed: 'BEWARE!<br>This name is confirmed Blocklisted!<br>You need higher authority for this!',
    fileUploadFailed: 'File upload failed! This due to connection error!<br> Or file type error!',
    timesheetAlreadyExist: `Timesheet date already exist!<br>Please go to all timesheet records..`,
    projectDoesNotExist: `Project code does not exist!<br>Please enter correct project code..`,
    incorrectPasscode: `Passcode in not correct!`,
    attendanceNameAlreadyExist: `Name already entered in timesheet!`,
    youHaveNoProjectAuthority: `You have no authority for this project!`,
    requiredFieldEmpty: `Required field are empty! Please check and filled-up properly..`
}

const alertContainer = {
    successAlert: {
        iconClassName: 'alert-header-icon-success',
        colorClassName: 'color-success',
        headerText: 'Success..',
        imageSrc: "/icon/alert/check-solid.svg"
    },

    errorAlert: {
        iconImageClassName: 'alert-header-icon-error',
        colorClassName: 'color-error',
        headerText: 'Error message..',
        imageSrc: "/icon/alert/xmark-solid.svg"
    },

    warningAlert: {
        iconImageClassName: 'alert-header-icon-warning',
        colorClassName: 'color-warning',
        headerText: 'Warning..',
        imageSrc: "/icon/alert/triangle-exclamation-solid.svg"
    },

    criticalAlert: {
        iconImageClassName: 'alert-header-icon-critical',
        colorClassName: 'color-critical',
        headerText: 'Critical..',
        imageSrc: "/icon/alert/triangle-exclamation-solid.svg"
    },

    infolAlert: {
        iconImageClassName: 'alert-header-icon-info',
        colorClassName: 'color-info',
        headerText: 'Information...',
        imageSrc: "/icon/alert/info-circle-light.svg"
    }
}


const alertCustom = {
    isConfirmedOk: async function (alertContainerType, alertMessage) {
        //const jsAlertMainExpandableContOk = (await fetchData.viewData('/Alert/ConfirmedOk')).querySelector('.jsAlertMainExpandableContOk');

        const htmlString = `<div class="alert-main-expandable-cont jsAlertMainExpandableContOk">
                                <div class="alert-cont-type-ok">
                                    <div class="alert-header-cont-ok jsAlertHeaderContOk">
                                        <div class="alert-img-cont-ok ">
                                            <img class="alert-img-ok jsAlertImgOk"/>
                                        </div>
                                        <label class="alert-header-label-ok jsAlertHeaderLabelOk"></label>
                                    </div>
                                    <div class="alert-content-cont-ok">
                                        <p class="alert-paragraph-ok jsAlertParagraphOk"></p>
                                    </div>
                                    <div class="alert-footer-cont-ok">
                                        <button class="alert-button-ok jsAlertButtonOk">OK</button>
                                    </div>
                                </div>
                            </div>`;
        const jsAlertMainExpandableContOk = new DOMParser().parseFromString(htmlString, 'text/html').querySelector('.jsAlertMainExpandableContOk');
        jsAlertMainExpandableContOk.querySelector('.jsAlertParagraphOk').innerHTML = alertMessage;
        jsAlertMainExpandableContOk.querySelector('.jsAlertHeaderContOk').classList.add(alertContainerType.colorClassName);
        jsAlertMainExpandableContOk.querySelector('.jsAlertHeaderLabelOk').innerHTML = alertContainerType.headerText;
        jsAlertMainExpandableContOk.querySelector('.jsAlertImgOk').src = alertContainerType.imageSrc;

        jsAlertMainExpandableContOk.querySelector('.jsAlertButtonOk').addEventListener('click', (e) => {
            e.target.closest('.jsAlertMainExpandableContOk').remove();
        })

        document.querySelector('body').appendChild(jsAlertMainExpandableContOk);
    },

    confirmedYesOrNo: async function (question) {
        //const jsAlertMainExpandableCont = (await fetchData.viewData('/Alert/IsYesOrNo')).querySelector('.jsAlertMainExpandableCont')
        //document.querySelector('body').appendChild(jsAlertMainExpandableCont);

        let htmlString = `<div class="alert-yes-cancel-main-cont jsAlertMainContYesCancel">
                            <div class="alert-yes-cancel-sub-cont">
                                <div class="alert-header-cont-yes-cancel jsAlertHeaderContOk">
                                    <div class="alert-img-cont-ok ">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 512 512" height="15px">
                                            <path opacity="1" fill="#fff" d="M248.4 84.3c1.6-2.7 4.5-4.3 7.6-4.3s6 1.6 7.6 4.3L461.9 410c1.4 2.3 2.1 4.9 2.1 7.5c0 8-6.5 14.5-14.5 14.5H62.5c-8 0-14.5-6.5-14.5-14.5c0-2.7 .7-5.3 2.1-7.5L248.4 84.3zm-41-25L9.1 385c-6 9.8-9.1 21-9.1 32.5C0 452 28 480 62.5 480h387c34.5 0 62.5-28 62.5-62.5c0-11.5-3.2-22.7-9.1-32.5L304.6 59.3C294.3 42.4 275.9 32 256 32s-38.3 10.4-48.6 27.3zM288 368a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm-8-184c0-13.3-10.7-24-24-24s-24 10.7-24 24v96c0 13.3 10.7 24 24 24s24-10.7 24-24V184z" />
                                        </svg>
                                    </div>
                                    <label class="alert-header-title-label jsAlertHeaderLabelYesCancel">Warning</label>
                                    <button class="alert-header-btn-close jsAlerHeaderCloseBtn">&times;</button>
                                </div>
                                <div class="alert-content-cont-yes-cancel">
                                    <p class="alert-paragraph-yes-cancel jsAlertParagraphYesOrCancel">
                                        ${question}
                                    </p>
                                </div>
                                <div class="alert-footer-cont-yes-cancel">
                                    <button class="alert-button-yes jsAlertButtonYes">YES</button>
                                    <button class="alert-button-cancel jsAlertButtonCancel">CANCEL</button>
                                </div>
                            </div>
                        </div>`
        const jsAlertMainContYesCancel = new DOMParser().parseFromString(htmlString, 'text/html').querySelector('.jsAlertMainContYesCancel')
        document.querySelector('body').appendChild(jsAlertMainContYesCancel);
        return new Promise(function (resolve, reject) {
            document.querySelector('.jsAlerHeaderCloseBtn').addEventListener('click', function (e) {
                resolve('close');
                e.target.closest('.jsAlertMainContYesCancel').remove();
            })
            document.querySelector('.jsAlertButtonYes').addEventListener('click', function (e) {
                resolve('Yes');
                e.target.closest('.jsAlertMainContYesCancel').remove();
            })
            document.querySelector('.jsAlertButtonCancel').addEventListener('click', function (e) {
                resolve('Cancel');
                e.target.closest('.jsAlertMainContYesCancel').remove();
            })
        })
    }
}

const fetchData = {
    viewData: async function (url) {
        let dataResult = null;
        await fetch(url).then(function (res) {
            if (res.ok) {
                return res.text()
            } else {
                throw new Error(alertMessages.serverError)
            }
        }).then(function (data) {
            dataResult = new DOMParser().parseFromString(data, 'text/html')
        }).catch((err) => {
            const error = new tryCatchError(err.message);
            error.errorMessageType1()
            dataResult = null;
        })
        return dataResult;
    },

    getData: async function (dataUrl) {

        let dataResult = null;
        await fetch(dataUrl).then((res) => {
            if (res.ok) {
                return res.json();
            } else {
                throw new Error(alertMessages.serverError)
            }
        }).then(async (data) => {
            dataResult = processFetchDataResult(data)
        }).catch((err) => {
            const error = new tryCatchError(err.message);
            error.errorMessageType1()
            dataResult = null;
        })
        return dataResult
    },
    postData: async function (dataUrl, options) {

        let dataResult = null;
        await fetch(dataUrl, options).then((res) => {
            if (res.ok) {
                return res.json();
            } else {
                throw new Error(alertMessages.serverError)
            }
        }).then(async (data) => {
            dataResult = processFetchDataResult(data)
        }).catch((err) => {
            const error = new tryCatchError(err.message);
            error.errorMessageType1()
            dataResult = null;
        })
        return dataResult;

    },

    postViewData: async function (url, options) {

        let dataResult = null;
        return await fetch(url, options).then(function (res) {
            if (res.ok) {
                return res.text()
            } else {
                throw new Error(alertMessages.serverError)
            }
        }).then(function (data) {
            dataResult = new DOMParser().parseFromString(data, 'text/html')
        }).catch((err) => {
            const error = new tryCatchError(err.message);
            error.errorMessageType1()
            dataResult = null;
        })
        return dataResult;

    },
}

function processFetchDataResult(data) {
    try {
        if (data.hasError) {
            throw new Error(data.errorMessage);
        } else if (data.statusCodeNumber == 3) {
            throw new Error(alertMessages.nameExistInDatabaseAndActive);
        } else if (data.statusCodeNumber == 10) {
            throw new Error(alertMessages.nameExistInDatabaseAndNotActive)
        } else if (data.statusCodeNumber == 6) {
            throw new Error(alertMessages.nameExistInDatabaseAndBlockListed)
        } else if (data.statusCodeNumber == 13) {
            throw new Error(alertMessages.fileUploadFailed)
        } else if (data.statusCodeNumber == 4) {
            throw new Error(alertMessages.usernamePasswordNotFound)
        } else if (data.statusCodeNumber == 15) {
            throw new Error(alertMessages.incorrectPasscode)
        } else if (data.statusCodeNumber == 17) {
            throw new Error(alertMessages.youHaveNoProjectAuthority)
        } else if (data.statusCodeNumber == 18) {
            throw new Error(alertMessages.timesheetAlreadyExist)
        } else if (data.statusCodeNumber == 16) {
            throw new Error(alertMessages.projectDoesNotExist)
        } else if (data.statusCodeNumber == 19) {
            throw new Error(alertMessages.attendanceNameAlreadyExist)
        } else if (data.statusCodeNumber == 22) {
            throw new Error(alertMessages.duplicateError);
        } else {
            return data
        }
    } catch (err) {
        throw new Error(err.message);
    }
}


class LinkedList_Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor(value) {
        const newNode = new LinkedList_Node(value)
        this.head = newNode
        this.tail = this.head
        this.length = 1
    }

    push(value) {
        const newNode = new LinkedList_Node(value)
        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++
        return this
    }

    pop() {
        if (!this.head) return undefined
        let temp = this.head
        let pre = this.head
        while (temp.next) {
            pre = temp
            temp = temp.next
        }
        this.tail = pre
        this.tail.next = null
        this.length--
        if (this.length === 0) {
            this.head = null
            this.tail = null
        }
        return temp
    }

    unshift(value) {
        const newNode = new LinkedList_Node(value)
        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {
            newNode.next = this.head
            this.head = newNode
        }
        this.length++
        return this
    }

    shift() {
        if (!this.head) return undefined
        let temp = this.head
        this.head = this.head.next
        this.length--
        if (this.length === 0) {
            this.tail = null
        }
        temp.next = null
        return temp
    }

    get(index) {
        if (index < 0 || index >= this.length) return undefined
        let temp = this.head
        for (let i = 0; i < index; i++) {
            temp = temp.next
        }
        return temp


    }

    set(index, value) {
        let nodeToUpdate = this.get(index)
        if (nodeToUpdate) {
            nodeToUpdate.value = value
            return true
        }
        return false
    }

    setByPropertyNameValue(propertyName, propertyValue, value) {
        let temp = this.head
        for (let i = 0; i < this.length; i++) {
            if (temp.value[propertyName] === propertyValue) {
                temp.value = value
                return true
            } else {
                temp = temp.next
            }
        }
        return false
    }

    insert(index, value) {
        if (index < 0 || index > this.length) return false
        if (index === this.length) return this.push(value)
        if (index === 0) return this.unshift(value)

        const newNode = new Node(value)
        const temp = this.get(index - 1)
        newNode.next = temp.next
        temp.next = newNode
        this.length++
        return true
    }

    remove(index) {
        if (index < 0 || index >= this.length) return undefined
        if (index === 0) return this.shift()
        if (index === this.length - 1) return this.pop()

        const before = this.get(index - 1)
        const temp = before.next

        before.next = temp.next
        temp.next = null
        this.length--
        return temp
    }

    reverse() {
        let temp = this.head
        this.head = this.tail
        this.tail = temp
        let next = temp.next
        let prev = null
        for (let i = 0; i < this.length; i++) {
            next = temp.next
            temp.next = prev
            prev = temp
            temp = next
        }
        return this
    }

    linkedListIndexOf(PropertyName, SearchString) {
        let results = []
        let temp = this.head
        for (let i = 0; i < this.length; i++) {
            if (temp.value[PropertyName].toLowerCase().indexOf(SearchString.toLowerCase()) !== -1) results.push(temp.value)
            temp = temp.next
        }
        return results
    }

    linkedListIndexOfReturnObject(PropertyName, SearchString) {
        let results = []
        let temp = this.head
        for (let i = 0; i < this.length; i++) {
            if (temp.value[PropertyName].toLowerCase().indexOf(SearchString.toLowerCase()) !== -1) results.push(temp.value)
            temp = temp.next
        }
        return results
    }

    linkedListIndexOfReturnObjectSearchArrOfPropertyName(PropertyNameArr, SearchString) {
        let results = []
        let temp = this.head
        for (let i = 0; i < this.length; i++) {
            for (let j = 0; j < PropertyNameArr.length; j++) {
                if (temp.value[PropertyNameArr[j]].toLowerCase().indexOf(SearchString.toLowerCase()) !== -1) {
                    results.push(temp.value)
                    break;
                }
            }

            temp = temp.next
        }
        return results
    }

    getByPropertyNameAndValue(propertyName, value) {
        let result
        let temp = this.head
        for (let i = 0; i < this.length; i++) {
            if (temp.value[propertyName] == value) {
                break
            } else {
                temp = temp.next
            }
        }
        result = temp.value
        return result
    }

    getSelectedValueArr(propertyName, value) {
        let results = []
        let temp = this.head
        for (let i = 0; i < this.length; i++) {
            if (temp.value[propertyName] == value) {
                results.push(temp.value)
                temp = temp.next
            } else {
                temp = temp.next
            }
        }
        return results
    }

    getByPropertyNameAndValueArr(propertyName, valueArr, arrProp) {
        let results = []
        let temp = this.head
        for (let i = 0; i < this.length; i++) {
            for (let j = 0; j < valueArr.length; j++) {
                if (temp.value[propertyName] == valueArr[j][arrProp]) {
                    results.push(temp.value)
                    break;
                }
            }
            temp = temp.next
        }
        return results
    }

    getAll() {
        let results = []
        let temp = this.head
        for (let i = 0; i < this.length; i++) {
            results.push(temp.value)
            temp = temp.next
        }
        return results
    }
}


/**
 * select input functions
 * arr - an array of object with 2 properties, ID and Value
 * @param {HTMLElement} input
 * @param {Array} arr
 */

let barangayDataArr = [];
let referenceData = null;
function customSelectInput(input, arr) {
    var self = this;
    self.input = input;
    self.arr = arr;
    self.enableFocusEventInput(input, arr);
    self.enableKeydownEventInput(input);
    self.enableMouseoverEventInpuUl(input);
    self.enableInputEventInput(input, arr);
}

customSelectInput.prototype.enableFocusEventInput = function (input, arr) {
    var self = this;
    input.addEventListener('focus', function (e) {
        if (arr == null || arr.length <= 0) return

        //clear all z-index
        const divConts = document.querySelectorAll('.jsSelectInputCont')
        divConts.forEach(item => {
            item.classList.remove('z-index-100000')
        })

        closeAllOpenUlSelection()

        const name = e.target.getAttribute('name');
        if (name == 'Province') {
            self.appendProvinceSelect(e, arr)
        } else if (name == 'City') {
            self.appendCitySelect(e, arr)
        } else if (name == 'Barangay') {
            self.appendBarangaySelect(e, arr)
        } else {
            self.appendSelect(e, arr)
        }
    })
}

customSelectInput.prototype.enableInputEventInput = function (input, arr) {
    var self = this;
    let linkedList = new LinkedList(arr[0]);
    for (let i = 1; i < arr.length; i++) {
        linkedList.push(arr[i])
    }
    input.addEventListener('input', function (e) {

        const selectedArr = linkedList.linkedListIndexOfReturnObject('value', e.target.value.trim())
        if (arr == null || arr.length <= 0) return

        //clear all z-index
        const divConts = document.querySelectorAll('.jsSelectInputCont')
        divConts.forEach(item => {
            item.classList.remove('z-index-100000')
        })

        closeAllOpenUlSelection()

        const name = e.target.getAttribute('name');
        if (name == 'Province') {
            self.appendProvinceSelect(e, selectedArr)
        } else if (name == 'City') {
            self.appendCitySelect(e, selectedArr)
        } else if (name == 'Barangay') {
            self.appendBarangaySelect(e, arrselectedArr)
        } else {
            self.appendSelect(e, selectedArr)
        }
    })
}
customSelectInput.prototype.appendProvinceSelect = function (e, provinceArr) {
    let arr = [];
    const regionInput = document.querySelector('.jsRegionInput');
    if (regionInput.hasAttribute('data-id')) {
        const regionID = regionInput.getAttribute('data-id');
        for (let i = 0; i < provinceArr.length; i++) {
            if (provinceArr[i].regionID == regionID) {
                arr.push(provinceArr[i])
            }
        }
    } else {
        arr = provinceArr
    }

    const input = e.target
    if (arr.length <= 0) return false;
    const divCont = input.closest('.jsSelectInputCont')
    const ul = divCont.querySelector('ul');
    ul.innerHTML = '';
    arr.forEach(item => {
        const htmlString = `<li class="select-input-li jsLi" data-id=${item.key}>${item.value}</li>`
        const jsLi = new DOMParser().parseFromString(htmlString, 'text/html').querySelector('.jsLi');
        jsLi.addEventListener('click', handleGlobalClickEventLi)
        ul.appendChild(jsLi);
    })
    ul.classList.remove('display-none');
    divCont.classList.add('z-index-100000');
}
customSelectInput.prototype.appendCitySelect = function (e, cityArr) {

    let arr = [];
    const provinceInput = document.querySelector('.jsProvinceInput');
    if (provinceInput.hasAttribute('data-id')) {
        const provinceID = provinceInput.getAttribute('data-id');
        for (let i = 0; i < cityArr.length; i++) {
            if (cityArr[i].provinceID == provinceID) {
                arr.push(cityArr[i])
            }
        }
    } else {
        arr = cityArr
    }

    const input = e.target
    if (arr.length <= 0) return false;
    const divCont = input.closest('.jsSelectInputCont')
    const ul = divCont.querySelector('ul');
    ul.innerHTML = '';
    arr.forEach(item => {
        const htmlString = `<li class="select-input-li jsLi" data-id=${item.key}>${item.value}</li>`
        const jsLi = new DOMParser().parseFromString(htmlString, 'text/html').querySelector('.jsLi');
        jsLi.addEventListener('click', handleGlobalClickEventLi)
        ul.appendChild(jsLi);
    })
    ul.classList.remove('display-none');
    divCont.classList.add('z-index-100000');
}
customSelectInput.prototype.appendBarangaySelect = function (e, arr) {

    const input = e.target
    if (arr.length <= 0) return false;
    const divCont = input.closest('.jsSelectInputCont')
    const ul = divCont.querySelector('ul');
    ul.innerHTML = '';
    arr.forEach(item => {
        const htmlString = `<li class="select-input-li jsLi" data-id=${item.key}>${item.value}</li>`
        const jsLi = new DOMParser().parseFromString(htmlString, 'text/html').querySelector('.jsLi');
        jsLi.addEventListener('click', handleGlobalClickEventLi)
        ul.appendChild(jsLi);
    })
    ul.classList.remove('display-none');
    divCont.classList.add('z-index-100000');

}

customSelectInput.prototype.appendSelect = function (e, arr) {
    const input = e.target
    if (arr.length <= 0) return false;
    const divCont = input.closest('.jsSelectInputCont')
    const ul = divCont.querySelector('ul');
    ul.innerHTML = '';
    arr.forEach(item => {
        const htmlString = `<li class="select-input-li font-size-medium jsLi" data-id=${item.key}>${item.value}</li>`
        const jsLi = new DOMParser().parseFromString(htmlString, 'text/html').querySelector('.jsLi');
        jsLi.addEventListener('click', handleGlobalClickEventLi)
        ul.appendChild(jsLi);
    })
    ul.classList.remove('display-none');
    divCont.classList.add('z-index-100000');
}
customSelectInput.prototype.enableKeydownEventInput = function (input) {
    var self = this;
    input.addEventListener('keydown', function (e) {
        switch (e.which) {
            case 27: //escape
                self.handlePressEscapeKey(e)
                break;
            case 38:
                self.handlePressArrowUpKey(e)
                break;
            case 40:
                self.handlePressArrowDownKey(e)
                break;
            case 13:
                self.handlePressEnterKey(e)
                break;
        }
    })
}

customSelectInput.prototype.handlePressEscapeKey = function (e) {
    const ul = e.target.closest('.jsSelectInputCont').querySelector('ul');
    ul.classList.add('display-none');
    e.target.blur();
}
customSelectInput.prototype.handlePressArrowUpKey = function (e) {
    e.preventDefault();
    const ul = e.target.closest('.jsSelectInputCont').querySelector('ul');
    if (!ul.classList.contains('display-none')) {
        let index = null;
        const lis = ul.querySelectorAll('li')
        for (let i = 0; i < lis.length; i++) {
            if (lis[i].classList.contains('li-selected')) {
                index = i
                break;
            }
        }

        if (index == null || index == 0) {
            lis[0].classList.add('li-selected');
        } else if (index > 0 && index < lis.length) {
            helperGlobalClearSelectedLi(ul)
            index = index - 1
            lis[index].classList.add('li-selected');
        }
    }
}
customSelectInput.prototype.handlePressArrowDownKey = function (e) {
    const ul = e.target.closest('.jsSelectInputCont').querySelector('ul');
    if (ul.classList.contains('display-none')) {
        handleGlobalFocusEventInput(e)
    }

    e.preventDefault();
    if (!ul.classList.contains('display-none')) {

        let index = null;
        const lis = ul.querySelectorAll('li')
        for (let i = 0; i < lis.length; i++) {
            if (lis[i].classList.contains('li-selected')) {
                index = i
                break;
            }
        }

        if (index == null) {
            lis[0].classList.add('li-selected');
        } else if (index >= 0 && index < (lis.length - 1)) {
            helperGlobalClearSelectedLi(ul)
            index = index + 1
            lis[index].classList.add('li-selected');

        } else if (index = (lis.length - 1)) {
            helperGlobalClearSelectedLi(ul)
            lis[index].classList.add('li-selected');
        }
    }
}
customSelectInput.prototype.handlePressEnterKey = async function (e) {

    const ul = e.target.closest('.jsSelectInputCont').querySelector('ul');
    if (ul.classList.contains('display-none')) return;

    const li = ul.querySelector('.li-selected');
    if (li == null || li == 'undefined') return;

    await processSelectedLi(li);
}
async function handleGlobalClickEventLi(e) {
    const li = e.target
    await processSelectedLi(li);
}

async function processSelectedLi(li) {
    const inputName = li.closest('.jsSelectInputCont').querySelector('input').getAttribute('name');
    if (inputName == 'Country') {
        helperGlobalProcessSelectedLiCountry(li)
    } else if (inputName == 'Region') {
        helperGlobalProcessSelectedLiRegion(li)
    } else if (inputName == 'Province') {
        helperGlobalProcessSelectedLiProvince(li)
    } else if (inputName == 'City') {
        await helperGlobalProcessSelectedLiCity(li)
    } else if (inputName == 'Barangay') {
        await helperGlobalProcessSelectedLiBarangay(li)
    } else if (inputName == 'ClientName') {
        helperGlobalProcessSelectedLiClientId(li)
    } else if (inputName == 'DeliveryType') {
        helperGlobalProcessSelectedLiDelType(li)
    } else if (inputName == 'BuildingName') {
        helperGlobalProcessSelectedLiBuildingName(li)
    } else if (inputName == 'EquipmentType1') {
        helperGlobalProcessSelectedLiEquipmentType1(li)
    } else {
        helperGlobalProcessSelectedLi(li)
    }
}

customSelectInput.prototype.enableMouseoverEventInpuUl = function (input) {

    const ul = input.closest('.jsSelectInputCont').querySelector('ul');
    ul.addEventListener('mouseover', function (e) {
        const ul = e.currentTarget
        helperGlobalClearSelectedLi(ul)
    })
}
customSelectInput.prototype.enableInputEventInput = function () {
    var self = this;

    const arr = this.arr
    self.input.addEventListener('input', function (e) {
        if (arr == null || arr.length <= 0) return
        const arrLinkedList = new LinkedList(arr[0])
        for (let i = 1; i < arr.length; i++) {
            arrLinkedList.push(arr[i])
        }
        const searchString = e.target.value.trim();
        const resultArr = arrLinkedList.linkedListIndexOf('value', searchString)
        helperGlobalAppendLi(e, resultArr)
    })

}
customSelectInput.prototype.enableInputEventInputCity = function () {

    const arr = this.arr
    this.input.addEventListener('input', function (e) {
        if (arr == null || arr.length <= 0) return
        const arrLinkedList = new LinkedList(arr[0])
        for (let i = 1; i < arr.length; i++) {
            arrLinkedList.push(arr[i])
        }
        const searchString = e.target.value.trim();
        const resultArr = arrLinkedList.linkedListIndexOf('value', searchString)
        helperGlobalAppendLiCity(e, resultArr)
    })

}
function closeAllOpenUlSelection() {

    const uls = document.querySelector('.jsMainContainer').querySelectorAll('ul');
    uls.forEach(item => {
        item.classList.add('display-none')
    })

}

function helperGlobalAppendLi(e, arr) {

    const input = e.target
    if (arr.length <= 0) return false;
    const divCont = input.closest('.jsSelectInputCont')
    const ul = divCont.querySelector('ul');
    ul.innerHTML = '';
    arr.forEach(item => {
        const htmlString = `<li class="select-input-li font-size-medium jsLi" data-id=${item.key}>${item.value}</li>`
        const jsLi = new DOMParser().parseFromString(htmlString, 'text/html').querySelector('.jsLi');
        jsLi.addEventListener('click', handleGlobalClickEventLi)
        ul.appendChild(jsLi);
    })
    ul.classList.remove('display-none');
    divCont.classList.add('z-index-100000');

}

function helperGlobalAppendLiProvince(e, provinceArr) {

    let arr = [];
    const regionInput = document.querySelector('.jsRegionInput');
    if (regionInput.hasAttribute('data-id')) {
        const regionID = regionInput.getAttribute('data-id');
        for (let i = 0; i < provinceArr.length; i++) {
            if (provinceArr[i].regionID == regionID) {
                arr.push(provinceArr[i])
            }
        }
    } else {
        arr = provinceArr
    }

    const input = e.target
    if (arr.length <= 0) return false;
    const divCont = input.closest('.jsSelectInputCont')
    const ul = divCont.querySelector('ul');
    ul.innerHTML = '';
    arr.forEach(item => {
        const htmlString = `<li class="select-input-li jsLi" data-id=${item.key}>${item.value}</li>`
        const jsLi = new DOMParser().parseFromString(htmlString, 'text/html').querySelector('.jsLi');
        jsLi.addEventListener('click', handleGlobalClickEventLi)
        ul.appendChild(jsLi);
    })
    ul.classList.remove('display-none');
    divCont.classList.add('z-index-100000');

}

function helperGlobalAppendLiCity(e, cityArr) {

    let arr = [];
    const provinceInput = document.querySelector('.jsProvinceInput');
    if (provinceInput.hasAttribute('data-id')) {
        const provinceID = provinceInput.getAttribute('data-id');
        for (let i = 0; i < cityArr.length; i++) {
            if (cityArr[i].provinceID == provinceID) {
                arr.push(cityArr[i])
            }
        }
    } else {
        arr = cityArr
    }

    const input = e.target
    if (arr.length <= 0) return false;
    const divCont = input.closest('.jsSelectInputCont')
    const ul = divCont.querySelector('ul');
    ul.innerHTML = '';
    arr.forEach(item => {
        const htmlString = `<li class="select-input-li jsLi" data-id=${item.key}>${item.value}</li>`
        const jsLi = new DOMParser().parseFromString(htmlString, 'text/html').querySelector('.jsLi');
        jsLi.addEventListener('click', handleGlobalClickEventLi)
        ul.appendChild(jsLi);
    })
    ul.classList.remove('display-none');
    divCont.classList.add('z-index-100000');

}

function helperGlobalAppendLiBarangay(e, arr) {

    const input = e.target
    if (arr.length <= 0) return false;
    const divCont = input.closest('.jsSelectInputCont')
    const ul = divCont.querySelector('ul');
    ul.innerHTML = '';
    arr.forEach(item => {
        const htmlString = `<li class="select-input-li jsLi" data-id=${item.key}>${item.value}</li>`
        const jsLi = new DOMParser().parseFromString(htmlString, 'text/html').querySelector('.jsLi');
        jsLi.addEventListener('click', handleGlobalClickEventLi)
        ul.appendChild(jsLi);
    })
    ul.classList.remove('display-none');
    divCont.classList.add('z-index-100000');

}


function helperGlobalPressEscapeKey(e) {
    const ul = e.target.closest('.jsSelectInputCont').querySelector('ul');
    ul.classList.add('display-none');
    e.target.blur();
}

function helperGlobalPressArrowUpKey(e) {

    e.preventDefault();
    const ul = e.target.closest('.jsSelectInputCont').querySelector('ul');
    if (!ul.classList.contains('display-none')) {
        let index = null;
        const lis = ul.querySelectorAll('li')
        for (let i = 0; i < lis.length; i++) {
            if (lis[i].classList.contains('li-selected')) {
                index = i
                break;
            }
        }

        if (index == null || index == 0) {
            lis[0].classList.add('li-selected');
        } else if (index > 0 && index < lis.length) {
            helperGlobalClearSelectedLi(ul)
            index = index - 1
            lis[index].classList.add('li-selected');
        }
    }

}

function helperGlobalPressArrowDownKey(e) {

    const ul = e.target.closest('.jsSelectInputCont').querySelector('ul');
    if (ul.classList.contains('display-none')) {
        handleGlobalFocusEventInput(e)
    }

    e.preventDefault();
    if (!ul.classList.contains('display-none')) {

        let index = null;
        const lis = ul.querySelectorAll('li')
        for (let i = 0; i < lis.length; i++) {
            if (lis[i].classList.contains('li-selected')) {
                index = i
                break;
            }
        }

        if (index == null) {
            lis[0].classList.add('li-selected');
        } else if (index >= 0 && index < (lis.length - 1)) {
            helperGlobalClearSelectedLi(ul)
            index = index + 1
            lis[index].classList.add('li-selected');

        } else if (index = (lis.length - 1)) {
            helperGlobalClearSelectedLi(ul)
            lis[index].classList.add('li-selected');
        }
    }

}

function helperGlobalClearSelectedLi(ul) {

    const lis = ul.querySelectorAll('li')
    for (let i = 0; i < lis.length; i++) {
        if (lis[i].classList.contains('li-selected')) {
            lis[i].classList.remove('li-selected')
        }
    }

}

function helperGlobalProcessSelectedLiCountry(li) {

    const divCont = li.closest('.jsSelectInputCont')
    const input = divCont.querySelector('input');
    input.setAttribute('data-id', li.getAttribute('data-id'));
    input.value = li.textContent;
    li.closest('ul').classList.add('display-none');
    divCont.classList.remove('z-index-100000')

    if (li.getAttribute('data-id') != 1) {
        const jsNewEmployeeAddressCont = document.querySelector('.jsNewEmployeeAddressCont');
        jsNewEmployeeAddressCont.classList.add('display-none');

        const jsForeignAddressCont = document.querySelector('.jsForeignAddressCont');
        jsForeignAddressCont.classList.remove('display-none');
        const jsForeignAddressInput = jsForeignAddressCont.querySelector('.jsForeignAddressInput');
        jsForeignAddressInput.textContent = '';
        jsForeignAddressInput.setAttribute('contenteditable', true);
        jsForeignAddressInput.classList.remove('vendor-input-disabled');
        jsForeignAddressInput.classList.add('newemployee-input');
    } else {
        const jsNewEmployeeAddressCont = document.querySelector('.jsNewEmployeeAddressCont');
        jsNewEmployeeAddressCont.classList.remove('display-none');
        const inputs = jsNewEmployeeAddressCont.querySelectorAll('input');
        inputs.forEach(input => {
            input.removeAttribute('data-id');
            input.value = ''
        });

        const jsForeignAddressCont = document.querySelector('.jsForeignAddressCont');
        jsForeignAddressCont.classList.add('display-none');

    }

    barangayDataArr = [];

}

function helperGlobalProcessSelectedLiRegion(li) {

    const divCont = li.closest('.jsSelectInputCont')
    const input = divCont.querySelector('input');
    input.setAttribute('data-id', li.getAttribute('data-id'));
    input.value = li.textContent;
    li.closest('ul').classList.add('display-none');

    const jsProvinceInput = document.querySelector('.jsProvinceInput');
    jsProvinceInput.value = '';
    jsProvinceInput.removeAttribute('data-id');

    const jsCityInput = document.querySelector('.jsCityInput');
    jsCityInput.value = '';
    jsCityInput.removeAttribute('data-id');

    const jsBarangayInput = document.querySelector('.jsBarangayInput');
    jsBarangayInput.value = '';
    jsBarangayInput.removeAttribute('data-id');

    barangayDataArr = [];

    populateCountry();

}

function helperGlobalProcessSelectedLiProvince(li) {

    const provinceID = li.getAttribute('data-id');
    const provinceArr = referenceData.provinces;
    const jsRegionInput = document.querySelector('.jsRegionInput');
    if (jsRegionInput.hasAttribute('data-id')) {
        processClickLi(li)
    } else {
        processClickLi(li)
        populateRegion(provinceID, provinceArr)
    }


    function processClickLi(li) {

        const divCont = li.closest('.jsSelectInputCont')
        const input = divCont.querySelector('input');
        if (li.getAttribute('data-id') == 0) {
            input.value = '';
            input.removeAttribute('data-id');
        } else {
            input.setAttribute('data-id', li.getAttribute('data-id'));
            input.value = li.textContent;
        }

        li.closest('ul').classList.add('display-none');

        const jsCityInput = document.querySelector('.jsCityInput');
        jsCityInput.value = '';
        jsCityInput.removeAttribute('data-id');

        const jsBarangayInput = document.querySelector('.jsBarangayInput');
        jsBarangayInput.value = '';
        jsBarangayInput.removeAttribute('data-id');

    }
    barangayDataArr = [];

}

function populateRegion(provinceID, provinceArr) {

    let regionID = 0;
    const jsRegionInput = document.querySelector('.jsRegionInput');
    for (let i = 0; i < provinceArr.length; i++) {
        if (provinceArr[i].provinceID == provinceID) {
            regionID = provinceArr[i].regionID
        }
    }

    const regionArr = referenceData.regions
    for (let i = 0; i < regionArr.length; i++) {
        if (regionArr[i].regionID == regionID) {
            jsRegionInput.value = regionArr[i].regionName;
            jsRegionInput.setAttribute('data-id', regionArr[i].regionID)
            break;
        }
    }
    populateCountry()

}
function populateCountry() {

    const countryID = 1
    const arr = referenceData.countries
    const jsCountryInput = document.querySelector('.jsCountryInput');

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].countryID == countryID) {
            jsCountryInput.value = arr[i].countryName;
            jsCountryInput.setAttribute('data-id', arr[i].countryID)
            break;
        }
    }

}
async function helperGlobalProcessSelectedLiCity(li) {

    const cityID = li.getAttribute('data-id');
    //const provinceArr = referenceData.provinces;
    const cityArr = referenceData.cities;
    const jsProvinceInput = document.querySelector('.jsProvinceInput');
    if (jsProvinceInput.hasAttribute('data-id') || jsProvinceInput.getAttribute('data-id') == 0) {
        processClickLi(li, cityID)
    } else {
        processClickLi(li, cityID)
        populateProvince(li)
    }

    function populateProvince(li) {

        const cityID = li.getAttribute('data-id');
        let provinceID = 0;
        for (let i = 0; i < cityArr.length; i++) {
            if (cityArr[i].cityID == cityID) {
                provinceID = cityArr[i].provinceID
            }
        }

        const provinceArr = referenceData.provinces
        for (let i = 0; i < provinceArr.length; i++) {
            if (provinceArr[i].provinceID == provinceID) {
                jsProvinceInput.value = provinceArr[i].provinceName;
                jsProvinceInput.setAttribute('data-id', provinceArr[i].provinceID)
                break;
            }
        }
        populateRegion(provinceID, provinceArr)

    }

    async function processClickLi(li, cityID) {

        const divCont = li.closest('.jsSelectInputCont')
        const input = divCont.querySelector('input');
        input.setAttribute('data-id', cityID);
        input.value = li.textContent;
        li.closest('ul').classList.add('display-none');

        const jsBarangayInput = document.querySelector('.jsBarangayInput');
        jsBarangayInput.value = '';
        jsBarangayInput.removeAttribute('data-id');
        await getBarangayArrByCityID(cityID)

    }


}
function helperGlobalProcessSelectedLiClientId(li) {

    const divCont = li.closest('.jsSelectInputCont')
    const input = divCont.querySelector('input');
    if (li.getAttribute('data-id') == 0) {
        input.removeAttribute('data-id');
        input.value = '';
    } else {
        input.setAttribute('data-id', li.getAttribute('data-id'));
        input.value = li.textContent;

        populateClientId(li.getAttribute('data-id'))
    }
    li.closest('ul').classList.add('display-none');

    function populateClientId(Id) {
        let clientId = null;
        for (let i = 0; i < referenceData.companies.length; i++) {
            if (referenceData.companies[i].companyId == Id) {
                clientId = referenceData.companies[i].clientId
            }
        }
        if (clientId == null) return;

        const jsClientIdInput = document.querySelector('.jsClientIdInput');
        jsClientIdInput.value = clientId;
        jsClientIdInput.setAttribute('data-id', Id);
    }

}

function helperGlobalProcessSelectedLiDelType(li) {

    const divCont = li.closest('.jsSelectInputCont')
    const input = divCont.querySelector('input');
    if (li.getAttribute('data-id') == 0) {
        input.removeAttribute('data-id');
        input.value = '';
        updateContainerNumberStatus(li.getAttribute('data-id'));
    } else {
        input.setAttribute('data-id', li.getAttribute('data-id'));
        input.value = li.textContent;

        updateContainerNumberStatus(li.getAttribute('data-id'));
    }
    li.closest('ul').classList.add('display-none');

}
function updateContainerNumberStatus(Id) {
    const jsContainerNumber = document.querySelector('.jsContainerNumber');
    const jsContainerNumberLabel = document.querySelector('.jsContainerNumberLabel')
    if (Id == 0 || Id == null) {
        jsContainerNumber.setAttribute('disabled', true);
        jsContainerNumber.classList.add('input-light-bg-md-inactive');
        jsContainerNumber.classList.remove('input-light-bg-md');
        jsContainerNumber.value = '';
        jsContainerNumberLabel.textContent = 'Container No'
    } else {
        jsContainerNumber.removeAttribute('disabled');
        jsContainerNumber.classList.add('input-light-bg-md');
        jsContainerNumber.classList.remove('input-light-bg-md-inactive');
        if (Id == 1) {
            jsContainerNumberLabel.textContent = 'Container No';
        } else if (Id == 2) {
            jsContainerNumberLabel.textContent = 'Truck No';
        }
    }
}
function helperGlobalProcessSelectedLiBuildingName(li) {

    const divCont = li.closest('.jsSelectInputCont')
    const input = divCont.querySelector('input');
    const buildingId = li.getAttribute('data-id');
    if (li.getAttribute('data-id') == 0) {
        input.removeAttribute('data-id');
        input.value = '';
        updateBuildingRoomStatus(buildingId)
    } else {
        input.setAttribute('data-id', buildingId);
        input.value = li.textContent;
        updateBuildingRoomStatus(buildingId);
    }
    li.closest('ul').classList.add('display-none');

    function updateBuildingRoomStatus(buildingId) {
        const jsRoomNumber = document.querySelector('.jsRoomNumber');
        jsRoomNumber.value = '';
        jsRoomNumber.removeAttribute('data-id');

        if (parseInt(buildingId) == 0) {
            jsRoomNumber.setAttribute('disabled', true);
            jsRoomNumber.setAttribute('data-id', 0);
            jsRoomNumber.classList.add('input-light-bg-md-inactive');
            jsRoomNumber.classList.remove('input-light-bg-md');
            jsRoomNumber.value = '';
        } else {
            jsRoomNumber.removeAttribute('disabled');
            jsRoomNumber.classList.add('input-light-bg-md');
            jsRoomNumber.classList.remove('input-light-bg-md-inactive');
            const buildingRoomArr = getBuildingRoom(buildingId)
            enableRoomNumberSelect(buildingRoomArr)
        }
    }

    function getBuildingRoom(buildingId) {
        let buildingRoomArr = [];
        for (let i = 0; i < referenceData.buildingRooms.length; i++) {
            if (referenceData.buildingRooms[i].buildingId == buildingId) {
                buildingRoomArr.push(referenceData.buildingRooms[i])
            }
        }
        return buildingRoomArr;
    }
}

function helperGlobalProcessSelectedLiEquipmentType1(li) {

    const divCont = li.closest('.jsSelectInputCont')
    const input = divCont.querySelector('input');
    const eqptType1Id = li.getAttribute('data-id');
    if (eqptType1Id == 0) {
        input.removeAttribute('data-id');
        input.value = '';
    } else {
        input.setAttribute('data-id', eqptType1Id);
        input.value = li.textContent;

        //get the defaultArr
        const defaultPropArr = [];
        eqptReferenceData.equipmentDefaultPropertyRefList.forEach(item => {
            if (item.equipmentId == eqptType1Id) {
                defaultPropArr.push(item);
            }
        });

        if (showEquipmentPropertyInterface(defaultPropArr)) {
            enableSelectInputEqptType2();
            enableSelectInputEqptProperty();
        };
    }
    li.closest('ul').classList.add('display-none');
}

function showEquipmentPropertyInterface(propertyRefArr) {
    let htmlString;
    const jsEqptDefaultPropMainCont = document.querySelector('.jsEqptDefaultPropMainCont');
    jsEqptDefaultPropMainCont.innerHTML = '';

    const jsSelectEquipmentType2Cont = document.querySelector('.jsSelectEquipmentType2Cont');
    jsSelectEquipmentType2Cont.innerHTML = '';
    htmlString = `<div class="eqpt-item-cont jsEqptType2InputCont">
                        <label class="eqpt-item-label">Sub Type</label>
                        <div class="input-select-cont jsSelectInputCont">
                            <input name="EquipmentType2" class="eqpt-input-active jsSelectInput jsSelectEquipmentType2 jsInput" placeholder="click select" autocomplete="off" required />
                            <ul class="input-search-ul display-none">
                            </ul>
                        </div>
                    </div>`
    const jsEqptType2InputCont = new DOMParser().parseFromString(htmlString, 'text/html').querySelector('.jsEqptType2InputCont');
    jsSelectEquipmentType2Cont.appendChild(jsEqptType2InputCont);


    if (propertyRefArr.length > 0) {

        propertyRefArr.forEach(item => {
            let propertyRefId = item.propertyRefId

            if (item.inputTypeId == 1) {
                if (item.isRequired == 0) {
                    htmlString = `<div class="eqpt-item-cont jsEqptPropertyCont">
                                    <label class="eqpt-item-label">${item.propertyName}</label>
                                    <input class="eqpt-input-active" value="" placeholder="manual input" data-propertyrefid=${item.propertyRefId} data-inputypeid=${item.inputTypeId} />
                                </div>`;
                } else {
                    tmlString = `<div class="eqpt-item-cont jsEqptPropertyCont">
                                    <label class="eqpt-item-label">${item.propertyName}</label>
                                    <input class="eqpt-input-active" value="" placeholder="manual input" data-propertyrefid=${item.propertyRefId} data-inputypeid=${item.inputTypeId} required />
                                </div>`;
                }

            } else if (item.inputTypeId == 2) {
                if (item.isRequired == 0) {
                    htmlString = `<div class="eqpt-item-cont jsEqptPropertyCont">
                                    <label class="eqpt-item-label">${item.propertyName}</label>
                                    <div class="input-select-cont jsSelectInputCont">
                                        <input name="${item.propertyName}" class="eqpt-input-active jsSelectInput jsInput" data-propertyrefid = ${item.propertyRefId} data-inputypeid=${item.inputTypeId} placeholder="click select" autocomplete="off"/>
                                        <ul class="input-search-ul display-none">
                                        </ul>
                                    </div>
                                </div>`;
                } else {
                    htmlString = `<div class="eqpt-item-cont jsEqptPropertyCont">
                                    <label class="eqpt-item-label">${item.propertyName}</label>
                                    <div class="input-select-cont jsSelectInputCont">
                                        <input name="${item.propertyName}" class="eqpt-input-active jsSelectInput jsInput" data-propertyrefid = ${item.propertyRefId} data-inputypeid=${item.inputTypeId} placeholder="click select" autocomplete="off" required />
                                        <ul class="input-search-ul display-none">
                                        </ul>
                                    </div>
                                </div>`;
                }

            } else if (item.inputTypeId == 3) {
                htmlString = `<div class="eqpt-item-cont jsEqptPropertyCont">
                                    <label class="eqpt-item-label">${item.propertyName}</label>
                                    <input class="eqpt-input-disabled" value="" placeholder="auto generated" disabled data-propertyrefid = ${item.propertyRefId} data-inputypeid=${item.inputTypeId} />
                                </div>`;
            }

            const jsEqptPropertyCont = new DOMParser().parseFromString(htmlString, 'text/html').querySelector('.jsEqptPropertyCont');

            
            //get all existing property input
            let isDuplicate = false;
            const inputs = jsEqptDefaultPropMainCont.querySelectorAll('input');
            for (let i = 0; i < inputs.length; i++) {
                if (inputs[i].getAttribute('data-propertyrefid') == propertyRefId) {
                    isDuplicate = true;
                    break;
                }
            }
              
            if (!isDuplicate) {
                jsEqptDefaultPropMainCont.append(jsEqptPropertyCont);
            }
        })

        return true;
    } else {
        return false;
    }
}

function enableSelectInputEqptProperty() {
    const selectInputs = document.querySelector('.jsEqptDefaultPropMainCont').querySelectorAll('.jsSelectInput');
    selectInputs.forEach(input => {
        let selectedArr = [];
        
        const propertyRefId = input.getAttribute('data-propertyrefid');
        eqptReferenceData.equipmentPropertySelectRefList.forEach(item2 => {
            if (item2.propertyRefId == propertyRefId) {
                selectedArr.push(item2);
            }
        })

        const arr = selectedArr;
        const paramArr = [{ key: 0, value: 'none' }]
        for (let i = 0; i < arr.length; i++) {
            let obj = {}
            obj.key = arr[i].selectId
            obj.value = arr[i].selectName
            paramArr.push(obj)
        }
        const selectInput = new customSelectInput(input, paramArr)

    })

}

function enableSelectInputEqptType2() {
    const type1Id = document.querySelector('.jsSelectEquipmentType1').getAttribute('data-id');
    const type2input = document.querySelector('.jsSelectEquipmentType2');
    let type2Arr = [];
    eqptReferenceData.equipmentType2List.forEach(item => {
        if (item.equipmentType1Id == type1Id) {
            type2Arr.push(item)
        }
    })

    const arr = type2Arr;
    const paramArr = [{ key: 0, value: 'none' }]
    for (let i = 0; i < arr.length; i++) {
        let obj = {}
        obj.key = arr[i].equipmentType2Id
        obj.value = arr[i].equipmentType2Name
        paramArr.push(obj)
    }
    const selectInput = new customSelectInput(type2input, paramArr)
}

function enableRoomNumberSelect(buildingRoomArr) {
    const input = document.querySelector('.jsRoomNumber');
    const arr = buildingRoomArr;
    const paramArr = [{ key: 0, value: 'none' }]
    for (let i = 0; i < arr.length; i++) {
        let obj = {}
        obj.key = arr[i].buildingRoomId
        obj.value = arr[i].buildingRoomName
        paramArr.push(obj)
    }
    const selectInput = new customSelectInput(input, paramArr)
}

function helperGlobalProcessSelectedLi(li) {

    const divCont = li.closest('.jsSelectInputCont')
    const input = divCont.querySelector('input');
    if (li.getAttribute('data-id') == 0) {
        input.removeAttribute('data-id');
        input.value = '';
    } else {
        input.setAttribute('data-id', li.getAttribute('data-id'));
        input.value = li.textContent;
    }
    li.closest('ul').classList.add('display-none');

}
async function getBarangayArrByCityID(cityID) {
    const spinner = new spinners();

    const formData = new FormData();
    formData.append('CityID', cityID)

    const options = {
        method: 'POST',
        body: formData
    }

    spinner.addSpinnerBodyType01();
    const data = await fetchData.postData('https://icypoint-api.azurewebsites.net/get-barangay-data', options)

    if (data != null) {
        spinner.removeSpinner()
        barangayDataArr = data.barangays;
        enableBarangayInput(barangayDataArr)
        return true;
    } else {
        spinner.removeSpinner()
        return false;
    }


}

function enableBarangayInput(arr) {

    const input = document.querySelector('.jsBarangayInput');
    const paramArr = []
    for (let i = 0; i < arr.length; i++) {
        let obj = {}
        obj.cityID = arr[i].cityID
        obj.key = arr[i].barangayID
        obj.value = arr[i].barangayName
        paramArr.push(obj)
    }

    const selectInput = new customSelectInput(input, paramArr)
    selectInput.enableFocusEventInput();
    selectInput.enableInputEventInput();
    selectInput.enableKeydownEventInput();
    selectInput.enableMouseoverEventInpuUl();

}

async function helperGlobalProcessSelectedLiBarangay(li) {

    const barangayID = li.getAttribute('data-id');

    const divCont = li.closest('.jsSelectInputCont')
    const input = divCont.querySelector('input');
    input.setAttribute('data-id', barangayID);
    input.value = li.textContent;
    li.closest('ul').classList.add('display-none');

}


