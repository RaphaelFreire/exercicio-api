import api from './api.js';

const config = {
  method: 'GET',
  url: 'products.json',
};

api(config, (productList) => {
  let productPrice = [];

  productList.item.forEach((element) => {
    let productItem = ` 
          <li class="product-list-item">
            <img class="list-item-image" src=".${element.image}" alt="" />

            <div class="list-item-wrapper-product-info">
              <h2 class="product-info-title">${element.name}</h2>
              <p class="product-info-price">Qtd.: ${element.quantity} <strong>${element.bestPriceFormated}</strong></p>
            </div>
          
          </li>
        `;

    document.getElementsByClassName('cart-product-list')[0].insertAdjacentHTML('beforeend', productItem);
    productPrice.push(element.quantity * element.bestPrice);

  });

  const totalPrice = productPrice.reduce(function (acc, bestPrice) {
    return acc + bestPrice;
  }, 0);


  let subTotal =  `<strong>R$ ${formatReal(totalPrice)}</strong>`;
  
  document.getElementsByClassName('cart-product-subtotal')[0].insertAdjacentHTML('beforeend', subTotal);

});



function formatReal(int) {
  var tmp = int + '';
  tmp = tmp.replace(/([0-9]{2})$/g, ',$1');
  if (tmp.length > 6) tmp = tmp.replace(/([0-9]{3}),([0-9]{2}$)/g, '.$1,$2');
  return tmp;
}

//Neste exercício você deve imprimir na UL ".product-list" produtos seguindo o layout no README do gitbub: https://i.imgur.com/EbVlWpX.png
//Deve incluir a soma dos produtos
//O botão finalizar compra deve ter o href de "/checkout"
