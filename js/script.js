// login button handler
document.getElementById("login").addEventListener('click',function(event){
    document.getElementById('login-area').style.display = 'none';
    document.getElementById('transaction-area').style.display = 'block';
})

// deposit button handler
document.getElementById('addDeposit').addEventListener('click',function(event){
    const depositNumber = getInputNumber("depositAmount");

    spanTextUpdate("current-deposit",depositNumber);
    spanTextUpdate("current-balance",depositNumber);
    document.getElementById("depositAmount").value='';
})
//withdraw button handler
document.getElementById('addWithdraw').addEventListener('click',function(event){
    const withdrawNumber = getInputNumber("withdrawAmount");
    spanTextUpdate("current-withdraw",withdrawNumber);
    spanTextUpdate("current-balance",-1 * withdrawNumber);
    document.getElementById("withdrawAmount").value='';
})
function getInputNumber(id){
    const amount = document.getElementById(id).value;
    const amountNumber = parseFloat(amount);
    return amountNumber;
}
function spanTextUpdate(id,addedNumber){
    const currentBalance = document.getElementById(id).innerText;
    const currentBalanceNumber = parseFloat(currentBalance);
    const totalBalance = addedNumber + currentBalanceNumber;
    document.getElementById(id).innerText=totalBalance;
}
