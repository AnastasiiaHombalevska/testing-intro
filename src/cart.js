function notImplemented() {
  throw new Error('Корзина ещё не реализована. Сначала прочитайте тесты.');
}

function addToCart(productsArr, category, quantity) {
  const product = productsArr.find((item) => item.id === category.id);
  const total = (product ? product.quantity : 0) + quantity;

  if (quantity <= 0 || total > category.stock) {
    throw new RangeError('Invalid quantity');
  }

  if (product) {
    product.quantity = total;
  } else {
    productsArr.push({ ...category, quantity });
  }

  return productsArr;
}

function changeQuantity(productCart, productId, productQuantiti) {
  const addProduct = productCart.find((item) => item.id === productId);

  if (!addProduct) return productCart;

  if (productQuantiti <= 0 || addProduct?.stock < productQuantiti) {
    throw new RangeError('Invalid quantity');
  }

  if (addProduct) {
    addProduct.quantity = productQuantiti;
  }

  return productCart;
}

function removeFromCart(productCart, productId) {
  return productCart.filter((item) => item.id !== productId);
}

function calculateCartSubtotal(productCart) {
  return productCart.reduce((acc, item) => acc + item.quantity * item.price, 0);
}

function calculateOrderTotal() { return notImplemented(); }

const cartApi = { addToCart, changeQuantity, removeFromCart, calculateCartSubtotal, calculateOrderTotal };

if (typeof module !== 'undefined') module.exports = cartApi;
if (typeof window !== 'undefined') window.cartApi = cartApi;
