import React from "react";

import { Form } from "react-bootstrap";

const MainDropdown = ({ setDropdown }) => {
  const onChooseSelf = (event) => {
    if (event.target.value == "Bunga" || event.target.value == "Hewan") {
      setDropdown(event.target.value);
    }
  };

  return (
    <Form.Group controlId="exampleForm.ControlSelect1">
      <Form.Label>Pilih Makhluk hidup</Form.Label>
      <Form.Control as="select" onChange={onChooseSelf.bind(this)}>
        <option>Pilih Pendaftar</option>
        <option value="Bunga">Bunga</option>
        <option value="Hewan">Hewan</option>
      </Form.Control>
    </Form.Group>
  );
};

export default MainDropdown;
