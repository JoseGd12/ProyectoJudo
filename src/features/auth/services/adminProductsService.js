const API_URL = 'https://api.escuelajs.co/api/v1/products';

export const adminFetchProducts = async () => {
  const response = await fetch(API_URL);
  return response.json();
};

export const adminCreateProduct = async (productData) => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(productData)
  });
  return response.json();
};

export const adminUpdateProduct = async (id, productData) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(productData)
  });
  return response.json();
};

export const adminDeleteProduct = async (id) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE'
  });
  return response.json();
};