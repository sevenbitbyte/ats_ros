const Coinbase = require('coinbase')
let coinbase = new Coinbase.Client(require('./readKey.json'))

const Gdax = require('gdax');
const gdax = new Gdax.PublicClient('ETH-USD');

coinbase.getAccounts({}, (err, accounts)=>{
  accounts.forEach((account)=>{
    let time = new Date()
    let balance = {
      value: account.balance,
      native: account.native_balance
    }
    console.log(`${time}, ${balance.value.amount} ${balance.value.currency}, ${balance.native.amount} ${balance.native.currency}`)
  })
})


gdax.getProducts((err, response, data)=>{
  console.log('PRODUCTS')
  console.log(data)
})

gdax.getProductTicker((err, response, data)=>{
  console.log('TICKER')
  console.log(data)
})

gdax.getProductHistoricRates((err, response, data)=>{
  console.log('HISTORIC_RATES')
  console.log(data)
})

gdax.getProduct24HrStats((err, response, data)=>{
  console.log('24HR_STATS')
  console.log(data)
})

gdax.getTime((err, response, data)=>{
  console.log('TIME')
  console.log(data)
})