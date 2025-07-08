import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { 
  fetchProducts, 
  createProduct, 
  updateProduct, 
  deleteProduct,
  setCurrentProduct 
} from '../slices/productsSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Table, Button, Container, Modal, ModalBody, ModalFooter, ModalHeader, FormGroup, Input } from 'reactstrap';
import EditarModal from './editModal';
import EliminarModal from './eliminarModal';

const AdminProducts = () => {
  const dispatch = useDispatch();
  const { items: products, status, currentProduct } = useSelector(state => state.products);
  const { isAuthenticated } = useSelector(state => state.auth);
  
  const [modalInsertar, setModalInsertar] = useState(false);
  const [modalEditar, setModalEditar] = useState(false);
  const [modalEliminar, setModalEliminar] = useState(false);
  const [form, setForm] = useState({
    title: '',
    price: '',
    description: '',
    categoryId: 1,
    images: ['https://placeimg.com/640/480/any']
  });

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(fetchProducts());
    }
  }, [dispatch, isAuthenticated]);

  const handleChange = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    try {
      await dispatch(createProduct(form));
      setModalInsertar(false);
      setForm({
        title: '',
        price: '',
        description: '',
        categoryId: 1,
        images: ['https://placeimg.com/640/480/any']
      });
    } catch (error) {
      console.error('Error creating product:', error);
    }
  };

  const handleEdit = (product) => {
    dispatch(setCurrentProduct(product));
    setModalEditar(true);
  };

  const handleDelete = (product) => {
    dispatch(setCurrentProduct(product));
    setModalEliminar(true);
  };

  if (status === 'loading') return <div>Cargando productos...</div>;
  if (status === 'failed') return <div>Error al cargar productos</div>;

  return (
    <Container className="container-productos">
      <br />
      <Button className="btn btn-success" onClick={() => setModalInsertar(true)}>
        Agregar Nuevo Producto
      </Button>
      <br />
      
      <Table>
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
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>
                <img src={product.images[0]} alt={product.title} width="50" />
              </td>
              <td>{product.title}</td>
              <td>${product.price}</td>
              <td>
                <Button className="btn btn-info btn-sm" onClick={() => handleEdit(product)}>
                  <FontAwesomeIcon icon={faEdit} />
                </Button>{" "}
                <Button className="btn btn-danger btn-sm" onClick={() => handleDelete(product)}>
                  <FontAwesomeIcon icon={faTrashAlt} />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Modal Insertar */}
      <Modal isOpen={modalInsertar} toggle={() => setModalInsertar(false)}>
        <ModalHeader>Crear Producto</ModalHeader>
        <ModalBody>
          <FormGroup>
            <label>Nombre:</label>
            <Input className="form-control" type="text" name="title" value={form.title} onChange={handleChange} />
          </FormGroup>
          <FormGroup>
            <label>Precio:</label>
            <Input className="form-control" type="number" name="price" value={form.price} onChange={handleChange} />
          </FormGroup>
          <FormGroup>
            <label>Descripción:</label>
            <Input className="form-control" type="text" name="description" value={form.description} onChange={handleChange} />
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          <Button color="success" onClick={handleSubmit}>Insertar</Button>
          <Button color="danger" onClick={() => setModalInsertar(false)}>Cancelar</Button>
        </ModalFooter>
      </Modal>

      {/* Modal Editar */}
      <EditarModal 
        isOpen={modalEditar}
        toggle={() => setModalEditar(false)}
        product={currentProduct}
        onSave={(updatedProduct) => {
          dispatch(updateProduct({id: updatedProduct.id, productData: updatedProduct}));
          setModalEditar(false);
        }}
      />

      {/* Modal Eliminar */}
      <EliminarModal
        isOpen={modalEliminar}
        toggle={() => setModalEliminar(false)}
        product={currentProduct}
        onDelete={(id) => {
          dispatch(deleteProduct(id));
          setModalEliminar(false);
        }}
      />
    </Container>
  );
};

export default AdminProducts;