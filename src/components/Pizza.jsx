import React, { useState } from "react";
import { Modal } from "react-bootstrap";

export default function Pizza({ pizza }) {
  const [quantity, setquantity] = useState(1);
  const [varient, setvarient] = useState("small");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <div className=" shadow-lg p-3 mb-5 bg-info rounded ">
        <div onClick={handleShow}>
          <h1>{pizza.name}</h1>
          <img
            src={pizza.image}
            className="img-fluid" alt=""
            style={{ height: "200px", width: "200px" }}
          />
        </div>

        <div className="flex-container">
          <div className="w-100 m-1">
            <p>Varients</p>
            <select
              className="form-control-active "
              value={varient}
              onChange={(e) => {
                setvarient(e.target.value);
              }}
            >
              {pizza.varients.map((varient) => {
                return <option value={varient}>{varient}</option>;
              })}
            </select>
          </div>
          <div className="w-100 m-1">
            <p>Quantity</p>
            <select
              className="form-control-active"
              value={quantity}
              onChange={(e) => {
                setquantity(e.target.value);
              }}
            >
              {[...Array(20).keys()].map((x, i) => {
                return <option value={i + 1}>{i + 1}</option>;
              })}
            </select>
          </div>
        </div>
        <div className="flex-container"></div>
        <div className="m-1 w-100">
          <h1 className="mt-3">
            Price: Tk {pizza.prices[0][varient] * quantity}
          </h1>
        </div>
        <div className="m-1 w-100">
          <button className="btn">ADD TO CART</button>
        </div>
      </div>
      <Modal show={show}>
        <Modal.Header closeButton className="bg-success">
          <Modal.Title className="text-white">{pizza.name}</Modal.Title>
        </Modal.Header>

        <Modal.Body className="bg-warning">
          <img src={pizza.image} className="img-fluid " alt="" style={{ height:'300px',width: '300px'}}/>
          <p className="text-dark">{pizza.description}</p>
        </Modal.Body>

        <Modal.Footer className="bg-success">
          <button className="btn" onClick={handleClose}>CLOSE</button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
