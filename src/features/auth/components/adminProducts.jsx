// src/features/auth/components/AdminProductsList.jsx
import { useState, useEffect } from 'react';
import { adminFetchProducts, adminDeleteProduct } from '../services/adminProductsService';
import Swal from 'sweetalert2';

const AdminProductsList = ({ onEdit, refresh }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await adminFetchProducts();
        setProducts(data);
      } finally {
        setLoading(false);
      }
    };
    loadProducts();
  }, [refresh]);

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: '¿Eliminar producto?',
      text: "Esta acción no se puede deshacer",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Sí, eliminar'
    });

    if (result.isConfirmed) {
      await adminDeleteProduct(id);
      Swal.fire('¡Eliminado!', 'El producto ha sido eliminado.', 'success');
      setProducts(products.filter(p => p.id !== id));
    }
  };

  if (loading) return <div>Cargando productos...</div>;

  return (
    <div className="table-responsive">
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Imagen</th>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>
                <img src={product.image} alt={product.title} width="50" />
              </td>
              <td>{product.title}</td>
              <td>${product.price}</td>
              <td>
                <button 
                  onClick={() => onEdit(product)}
                  className="btn btn-sm btn-primary me-2"
                >
                  Editar
                </button>
                <button
                  onClick={() => handleDelete(product.id)}
                  className="btn btn-sm btn-danger"
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminProductsList;