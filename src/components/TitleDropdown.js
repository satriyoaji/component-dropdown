import React from "react";

import { Form } from "react-bootstrap";

const TitleDropdown = ({ type }) => {
  const [mawar, setMawar] = React.useState(["Mawar putih", "Mawar merah"]);
  const [melati, setMelati] = React.useState(["Melati putih", "Melati ungu"]);
  const [anjing, setAnjing] = React.useState([
    "anjing pitbull",
    "anjing kaukasia",
  ]);
  const [kucing, setKucing] = React.useState([
    "Kucing anggora",
    "Kucing persia",
  ]);

  React.useEffect(() => {
    console.log(type);
  }, [type, mawar, melati, anjing, kucing]);

  return (
    <Form.Group controlId="exampleForm.ControlSelect1">
      <Form.Label>Pilih Spesies</Form.Label>
      <Form.Control as="select">
        {type == "Mawar" ? (
          mawar.map((value, key) => {
            return (
              <option key={key} value={value}>
                {value}
              </option>
            );
          })
        ) : type == "Melati" ? (
          melati.map((value, key) => {
            return (
              <option key={key} value={value}>
                {value}
              </option>
            );
          })
        ) : type == "Kucing" ? (
          kucing.map((value, key) => {
            return (
              <option key={key} value={value}>
                {value}
              </option>
            );
          })
        ) : type == "Anjing" ? (
          anjing.map((value, key) => {
            return (
              <option key={key} value={value}>
                {value}
              </option>
            );
          })
        ) : (
          <option value=""></option>
        )}
      </Form.Control>
    </Form.Group>
  );
};

export default TitleDropdown;
