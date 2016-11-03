var cart = [];

function setCart(newCart) {
  cart = newCart;
}

function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      return NaN
    }
  }

  return t
}

function getCart(){
  return cart
}

function addToCart(item){
  cart.push(item);
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart(){
  var str = "In your cart, you have"
  if(getCart().length === 0){
    console.log("Your shopping cart is empty.")
  }
  else{
    for(let i = 0; i < cart.length; i++){
      str += ` ${cart[i]} at $undefined,`
    }
    console.log(str.slice(0, str.length-1) + ".");
  }
}

function removeFromCart(item){
  if(cart.includes(item) == false){
    console.log("That item is not in your cart.")
  }
  else{
    delete cart[cart.indexOf(item)]
  }
  cart = []
  return cart
}

function placeOrder(cc_num){
  if(cc_num === undefined){
    console.log("We don't have a credit card on file for you to place your order.")
  }
  else{
    console.log(`Your total cost is $NaN, which will be charged to the card ${cc_num}.`)
    cart = [];
  }
}
