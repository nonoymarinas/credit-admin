function references() {
    
}
references.prototype.getNewDeptorReferences = async function () {
     const data  = await fetchData.getData('/creditapp/debtorreferences')
    if(data){
        console.log(data)
    }else{
        console.log("no data")
    }
}

