// converte in float
function stringToFloat(stringOrintNum) {
    const amount = parseFloat(stringOrintNum);
    return amount;
}
// make input field empty
function makeFieldEmpty(inputField) {
    document.getElementById(inputField).value = '';
}
// value catch from input and convert in to float number
function inputField (inputId) {
    const inputAmount = document.getElementById(inputId);
    const inputAmountText = inputAmount.value;
    const amount = stringToFloat(inputAmountText);
    if(amount >= 0 ){ 
        return amount;
    }  
};
// value catch from previous  and convert in to float number
function previousAmount(previousAmountId) {
    const previousAmountField = document.getElementById(previousAmountId);
    const previousAmount = previousAmountField.innerText;
    const amount = stringToFloat(previousAmount);
    return amount;
}
// submition of new value and pevious value
function totalValue(previousValueId, newValueId) {
    const lastAmount = previousAmount(previousValueId);
    const amount = inputField(newValueId);
    const total = lastAmount + amount;
    if (total >= 0){
        document.getElementById(previousValueId).innerText = total;
    }
};
// substraction new value from previous value 
function restValue(previousValueId, newValueId) {
    const lastAmount = previousAmount(previousValueId);
    const amount = inputField(newValueId);
    const total = lastAmount - amount;
    if (total >= 0){
        document.getElementById(previousValueId).innerText = total;
    }}
// new deposite amount
document.getElementById('deposite').addEventListener('click',function() {
    totalValue('previous-diposite','new-deposite');
    totalValue('previous-total','new-deposite');
    makeFieldEmpty('new-deposite');
})
// new withdraw amount
document.getElementById('withdraw').addEventListener('click',function() {
    totalValue('previous-withdraw','new-withdraw');
    if(previousAmount('previous-total') >= inputField ('new-withdraw')){
        restValue('previous-total', 'new-withdraw');
    }
    makeFieldEmpty('new-withdraw');
})        