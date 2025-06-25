
 function populateUnitNameInput(arr, productId, unitNameInput) {
    const productObj = arr.find(item => item.productId == productId);
    const unitName = productObj ? productObj.unitName : '';
    unitNameInput.value = unitName;
}

 function populateComputedUnitCost(arr, productId, unitCostInput) {
    this.expensesObj = generalReferences.expenses[0];
     const productObj = arr.find(item => item.productId == productId);

     const productCost = productObj.productCost;

    const operationCost = ((this.expensesObj.deiselTravelPerKm * distance * 2)/20)
        + (36)
        + (this.expensesObj.commissionPerCubiMeter)
        + (this.expensesObj.overheadPerCubicMeter)
        + (this.expensesObj.sopAuthorityPerCubicMeter)
        + 250 + (distance * 2 * 20)/20 + 15 ;
         //250 - profit
         //(distance * 2 * 20)/20 - tire
         //15 - truck itself
     console.log(this.expensesObj.deiselTravelPerKm * distance * 2 / 20)
     console.log(this.expensesObj.driverSalary/20)
     console.log(this.expensesObj.commissionPerCubiMeter)
     console.log(this.expensesObj.overheadPerCubicMeter)
     console.log(this.expensesObj.sopAuthorityPerCubicMeter)
     console.log(operationCost)
     console.log(productCost)
    const unitCost = productCost + operationCost;
    unitCostInput.value = unitCost.toFixed(2);
}

 function refreshAllUnitCostValue() {
    this.arr = generalReferences.products
    const rowMainConts = document.querySelectorAll('.jsQouteItemsRowMainCont');
    if (rowMainConts.length == 0) return false;
    rowMainConts.forEach(item => {
        const productId = item.querySelector('.jsQuoteItemsProductDescInput').getAttribute('data-id');
        const unitCostInput = item.querySelector('.jsQuoteItemsComputedUnitCostInput')
        populateComputedUnitCost(this.arr, productId, unitCostInput)
    });
}

function isInputHasAValidValue(input) {
    if (isNullOrWhiteSpace(input.value)) {
        input.classList.add('invalid')
        return false;
    } else {
        input.classList.remove('invalid')
        return true;
    }
}
function isInputHasAValidDataId(input) {
    if (input.getAttribute('data-id') == 0 || input.getAttribute('data-id') == null) {
        input.classList.add('invalid')
        return false;
    } else {
        input.classList.remove('invalid')
        return true;
    }
}