import React from "react";

import { Form } from "react-bootstrap";

const TypeDropdown = ({ dropdown, setType }) => {
  const [bunga, setBunga] = React.useState(["Mawar", "Melati"]);
  const [hewan, setHewan] = React.useState(["Kucing", "Anjing"]);

  React.useEffect(() => {
    console.log(dropdown);
  }, [dropdown, bunga, hewan]);

  const onChooseSelf = (event) => {
    setType(event.target.value);
  };

  return (
    <Form.Group controlId="exampleForm.ControlSelect1">
      <Form.Label>Pilih Jenis</Form.Label>
      <Form.Control as="select" onChange={onChooseSelf.bind(this)}>
        <option value="" disabled="disabled">
          Pilih
        </option>
        {dropdown == "Bunga" ? (
          bunga.map((value, key) => {
            return (
              <option key={key} value={value}>
                {value}
              </option>
            );
          })
        ) : dropdown == "Hewan" ? (
          hewan.map((value, key) => {
            return (
              <option key={key} value={value}>
                {value}
              </option>
            );
          })
        ) : (
          <p></p>
        )}
      </Form.Control>
    </Form.Group>
  );
};

export default TypeDropdown;
