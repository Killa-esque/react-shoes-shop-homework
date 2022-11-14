import React, { Component } from 'react'
import { Modal, Button } from "react-bootstrap";

export default class ModalCart extends Component {
  render() {
    const { product, showCartControl, closeCartControl, increaseButton, decreaseButton, deleteProductFromCart } = this.props
    return (
      <Modal show={showCartControl} onHide={closeCartControl} size='lg'>
        <Modal.Header closeButton>
          <Modal.Title style={{ fontSize: '30px', fontWeight: '700', textAlign: 'center' }}>Just do it</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <table className='table' style={{ borderCollapse: 'collapse' + '!important' }}>
            <thead className='w-100 h-100'>
              <tr className=''>
                <th>ID</th>
                <th>Product name</th>
                <th>Image</th>
                <th className='text-center'>Quantity</th>
                <th>Price</th>
                <th>Total</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {product.map((item, index) => {
                return <tr className='' key={index}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>
                    <img src={item.image} width='50px' height='50px' alt="Iphone X" />
                  </td>
                  <td className='text-center'>
                    <button className="btn btn-primary mx-2 btn-sm" onClick={() => {
                      increaseButton(item)
                    }}>+</button>
                    {item.quantity}
                    <button className="btn btn-primary mx-2 btn-sm" onClick={() => {
                      decreaseButton(item)
                    }}>-</button>
                  </td>
                  <td>{item.price}$</td>
                  <td>{item.quantity * item.price}</td>
                  <td>
                    <button className='btn btn-danger' onClick={() => {
                      deleteProductFromCart(item)
                    }}>
                      <i className='fa fa-trash'></i>
                    </button>
                  </td>
                </tr>
              })}
            </tbody>
          </table>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => { closeCartControl() }}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    )
  }
}
