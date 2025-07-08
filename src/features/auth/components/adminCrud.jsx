// src/features/auth/components/AdminProductForm.jsx
import { useState } from 'react';
import { adminCreateProduct, adminUpdateProduct } from '../services/adminProductsService';

const AdminProductForm = ({ productToEdit, onSuccess, onCancel }) => {
  const [formData, setFormData] = useState({
    title: productToEdit?.title || '',
    price: productToEdit?.price || '',
    description: productToEdit?.description || '',
    image: productToEdit?.image || '',
    category: productToEdit?.category || 'kimono'
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (productToEdit) {
        await adminUpdateProduct(productToEdit.id, formData);
      } else {
        await adminCreateProduct(formData);
      }
      onSuccess();
    } catch (error) {
      console.error('Error saving product:', error);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label">Nombre del Producto</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="form-control"
          required
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Precio</label>
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          className="form-control"
          step="0.01"
          required
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Descripción</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="form-control"
          rows="3"
        />
      </div>

      <div className="mb-3">
        <label className="form-label">URL de la Imagen</label>
        <input
          type="url"
          name="image"
          value={formData.image}
          onChange={handleChange}
          className="form-control"
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Categoría</label>
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="form-select"
        >
          <option value="kimono">Kimono</option>
          <option value="cinturon">Cinturón</option>
          <option value="accesorio">Accesorio</option>
        </select>
      </div>

      <div className="d-flex justify-content-end gap-2">
        <button type="button" onClick={onCancel} className="btn btn-secondary">
          Cancelar
        </button>
        <button type="submit" className="btn btn-primary">
          {productToEdit ? 'Actualizar' : 'Crear'} Producto
        </button>
      </div>
    </form>
  );
};

export default AdminProductForm;