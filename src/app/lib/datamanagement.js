export async function getProducts() {
    const data = await fetch('https://fakestoreapi.com/products');
    const response = data.json();
  
    return response;
  }