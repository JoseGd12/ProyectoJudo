const fetchJudoProducts = async () => {
  try {
    // Usaremos la API de productos de ejemplo (JSONPlaceholder)
    const response = await fetch('https://api.escuelajs.co/api/v1/products?limit=15');
    if (!response.ok) throw new Error('Error al obtener productos');
    
    const data = await response.json();
    
    // Mapeamos los datos de la API a nuestro formato de productos
    return data.map((product, index) => ({
      id: product.id,
      title: product.title,
      price: product.price,
      description: product.description,
      image: product.image,
      // Campos adicionales específicos para judo
      category: index % 2 === 0 ? 'Kimono' : 'Accesorio'
    }));
    
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

export default fetchJudoProducts;