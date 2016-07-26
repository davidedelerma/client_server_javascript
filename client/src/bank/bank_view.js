var BankView = function(bank){
  this.bank = bank;
}

BankView.prototype = {

  init: function(event){

    var form = document.getElementById('percentage-form');

    form.onsubmit = function(event){
      event.preventDefault();
      var percentage = document.getElementById( 'percentage' ).value;
      
      this.bank.addInterest(percentage);
      this.displayAccounts();
    }.bind(this);
 
  },

  displayAccounts: function(){
    var businessList = document.getElementById('business')
    var personalList = document.getElementById('personal')
    var totalDisplay = document.getElementById('total')
    totalDisplay.innerText = this.bank.totalCash();
    businessList.innerHTML = "";
    personalList.innerHTML = "";

    for (var account of this.bank.accounts){
      var accountListitem = document.createElement('li')
      accountListitem.innerText = account.owner + ": £" + account.amount
      if (account.type === "business"){
        businessList.appendChild(accountListitem)
      }else{
        personalList.appendChild(accountListitem)
      }
    }
  }
}
module.exports = BankView