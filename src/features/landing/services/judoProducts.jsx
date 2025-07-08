const fetchJudoProducts = async () => {
  try {
    
    const response = await fetch('https://api.escuelajs.co/api/v1/products?limit=15');
    if (!response.ok) throw new Error('Error al obtener productos');
    
    const data = await response.json();
    
    return data.map((product, index) => ({
      id: product.id,
      title: product.title,
      price: product.price,
      description: product.description,
      image: product.image || '/default-judogi.jpg', // Fallback image
  category: product.category?.name || 'Sin categoría'
    }));
    
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

export default fetchJudoProducts;