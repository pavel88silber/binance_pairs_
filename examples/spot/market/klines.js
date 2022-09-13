'use strict'

const Spot = require('../../../src/spot')

const keys = {
  "akey": 'KiIU7v44jZSbWo3x3Wt0V4SMMwTNCMFZwkyMTg54clQ7ogqHoPrHEC4LyJj37d3M',
  "skey": '3STLQOI7cx2hQZ6L4UeiROmIK1VXhjYUsATmpfmFVKPuYqnAQnjX3xjdpdKfD8F1'
}

const client = new Spot(keys['akey'], keys['skey'], {
  // baseURL: 'http://testnet.binance.vision'
  baseURL: 'https://api1.binance.com'
})

const client2 = new Spot(keys['akey'], keys['skey'], {
  // baseURL: 'http://testnet.binance.vision'
  baseURL: 'https://api1.binance.com'
})

setInterval(() => {
  client.klines('BTCUSDT', '1m', { limit: 1 })
    .then(response => client.logger.log(response.data[0][4]))
    .catch(error => client.logger.error(error.message))

  client2.klines('ETHUSDT', '1m', { limit: 1 })
    .then(response => client2.logger.log(response.data[0][4]))
    .catch(error => client2.logger.error(error.message))

}, 2000)