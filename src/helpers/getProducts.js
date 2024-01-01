export const URL = "https://heling-objects.vercel.app/products/products.json";
export const URL_DETAILS = "https://heling-objects.vercel.app/products/productDetails/";

export function getProducts() {
  return fetch(URL)
  .then(response => {
    if (response.ok) {
      return response.json();
    }
  })
  .then(products => products);
}

export function getNavigationLinks() {
  return fetch(URL)
  .then(response => {
    if (response.ok) {
      return response.json();
    }
  })
  .then(products => products.map(product => ({title: product.name, photo: product.mainPhoto})));
}

export function getProductsDetails(product) {
  return fetch(`${URL_DETAILS}${product}.json`)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
    })
    .then(productDetails => productDetails);
}