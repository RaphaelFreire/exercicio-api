import api from './api.js'

const config = {
  method: 'GET',
  url: '/products.json'
}

api(config, data => {
  data.item.map(product => {
    console.log(product);
  })
})