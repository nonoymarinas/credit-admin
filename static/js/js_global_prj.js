const MODULE_ID = 9;
const MODULE_USER_ID = 1;
const AZURE_STORAGE_BASE_URL = `https://speedxstorageaccount.blob.core.windows.net/speedxcontainer/`
let quotationReferenceData = null;

let generalReferences = {
    vendors: [{ vendorId: 1, vendorName: 'Speedx Development' }, { vendorId: 2, vendorName: 'Solid Aggregate Corp' }, { vendorId: 3, vendorName: 'Marinas Devt Corp' }],
    persons: [{ personId: 1, firstName: 'Feliciano', middleName: 'Ganza', lastName: 'Marinas', suffix: '', positionId: 1, positionName: 'President and CEO'},
    { personId: 1, firstName: 'Johnal', middleName: 'Ganza', lastName: 'Marinas', suffix: '', positionId: 1, positionName: 'Vice President'},
    { personId: 1, firstName: 'John Bert', middleName: 'Ganza', lastName: 'Marinas', suffix: '', positionId: 1, positionName: 'Board of Director'}],
}
let distance = null;
function references() {
    var self = this;
    self.getQuotationReferenceData();
}
references.prototype.getQuotationReferenceData = async function () {
    const data = await fetchData.getData('equipment-reference-data');
    if (data != null) {
        quotationReferenceData = data;
        return true;
    } else {
        return false;
    }
}









