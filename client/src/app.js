var Bank = require ('./bank/bank.js')
var sampleAccounts = require('./sample.json')
var Account = require('./bank/account.js')
var BankView = require('./bank/bank_view.js')

window.onload = function(){
  console.log('loaded');
  var bank = new Bank();

  for(var accountData of sampleAccounts){
    bank.addAccount(new Account(accountData))
  }
  var bankView = new BankView(bank);
  bankView.init();
  bankView.displayAccounts();

  console.log('we created a bank',bank)
}

//var displayAccounts = bankView.displayAccounts(bank) 

