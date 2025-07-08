import React, { useState, useEffect } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button, FormGroup, Label, Input } from 'reactstrap';

const EditarModal = ({ isOpen, toggle, product, onSave }) => {
  const [form, setForm] = useState({
    title: '',
    price: '',
    description: '',
    categoryId: 1,
    images: ['https://placeimg.com/640/480/any']
  });

  useEffect(() => {
    if (product) {
      setForm({
        title: product.title || '',
        price: product.price || '',
        description: product.description || '',
        categoryId: product.category?.id || 1,
        images: product.images || ['https://placeimg.com/640/480/any']
      });
    }
  }, [product]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSave = () => {
    onSave({
      ...product,
      ...form,
      price: Number(form.price)
    });
  };

  return (
    <Modal isOpen={isOpen} toggle={toggle}>
      <ModalHeader toggle={toggle}>Editar Producto</ModalHeader>
      <ModalBody>
        <FormGroup>
          <Label>Nombre</Label>
          <Input type="text" name="title" value={form.title} onChange={handleChange} />
        </FormGroup>
        <FormGroup>
          <Label>Precio</Label>
          <Input type="number" name="price" value={form.price} onChange={handleChange} />
        </FormGroup>
        <FormGroup>
          <Label>Descripción</Label>
          <Input type="text" name="description" value={form.description} onChange={handleChange} />
        </FormGroup>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={handleSave}>Guardar</Button>{' '}
        <Button color="secondary" onClick={toggle}>Cancelar</Button>
      </ModalFooter>
    </Modal>
  );
};

export default EditarModal;