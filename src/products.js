import localforage from 'localforage';

export async function addProducts(prods) {
  let products = prods.map((product) => ({
    ...product,
    count: 0,
    createdAt: Date.now(),
  }));

  localforage.setItem('products', products);
}

export async function getProducts() {
  let products = await localforage.getItem('products');
  return products ?? [];
}

export async function getProduct(id) {
  let products = await localforage.getItem('products');
  let product = products.filter((p) => p.id === id);
  return product ?? null;
}

export async function getProductCount(id) {
  let products = await localforage.getItem('products');
  let product = products.filter((p) => p.id === id);
  return product.count ?? 0;
}

export async function setProductCount(id, count) {
  let products = await localforage.getItem('products');
  let product = products.filter((p) => p.id === id);
  product.count = count;
  localforage.setItem('products', products);
}
