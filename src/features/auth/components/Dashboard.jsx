import { useAuth } from '../hooks/useAuth';
import { useState } from 'react';
import AdminProductsList from './adminProducts';
import AdminProductForm from './adminCrud';


const Dashboard = () => {
  const { user, logout } = useAuth();
  const [refresh, setRefresh] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const handleSuccess = () => {
    setRefresh(!refresh);
    setShowForm(false);
    setEditingProduct(null);
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>Panel de Control</h1>
        <button className="logout-button" onClick={logout}>
          Cerrar Sesión
        </button>
      </div>
      
      <div className="dashboard-content">
        <div className="user-info">
          <h2>Información del Usuario</h2>
          {/* Mostrar avatar si existe */}
          {user?.avatar && (
            <div className="user-avatar">
              <img src={user.avatar} alt={`Avatar de ${user.name}`} />
            </div>
          )}
          <p><strong>Nombre:</strong> {user?.name}</p>
          <p><strong>Email:</strong> {user?.email}</p>
          <p><strong>ID:</strong> {user?.id}</p>
          <p><strong>Rol:</strong> {user?.role}</p>
        </div>
        
      </div>
      <div className="card mb-4">
        <div className="card-header d-flex justify-content-between align-items-center">
          <h2>Productos</h2>
          <button 
            onClick={() => {
              setEditingProduct(null);
              setShowForm(true);
            }} 
            className="btn btn-success"
          >
            + Nuevo Producto
          </button>
        </div>
        <div className="card-body">
          {showForm ? (
            <AdminProductForm
              productToEdit={editingProduct}
              onSuccess={handleSuccess}
              onCancel={() => {
                setShowForm(false);
                setEditingProduct(null);
              }}
            />
          ) : (
            <AdminProductsList
              onEdit={(product) => {
                setEditingProduct(product);
                setShowForm(true);
              }}
              refresh={refresh}
            />
          )}
        </div>
      </div>

    </div>
  );
};

export default Dashboard;