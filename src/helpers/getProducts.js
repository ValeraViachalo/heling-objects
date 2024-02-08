import client from "./client";

export function getProducts() {
  return client
    .fetch(
      `*[_type == "products"] {
      name,
      slug,
      mainImage {
        asset -> {
          _id,
          url
        },
      }
  }`
    )
    .then((products) => {
      return products;
    });
}

export function getProductsDetails(product) {
  return client
    .fetch(
      `*[slug.current == "${product}"] {
      name,
      slug,
      category,
      author,
      aboutProduct,
      mainImage {
        asset -> {
          _id,
          url
        },
      },
      secondaryImage {
        asset -> {
          _id,
          url
        },
      },
      thirdImage {
        asset -> {
          _id,
          url
        },
      },
  }`
    )
    .then((products) => {
      return products;
    });
}
