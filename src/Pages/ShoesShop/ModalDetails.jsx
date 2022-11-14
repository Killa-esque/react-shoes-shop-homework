import React, { Component } from 'react'
import { Modal, Button } from "react-bootstrap";

export default class ModalDetails extends Component {
  render() {
    const { details, closeProductDetails, showOffDetails } = this.props;
    return (
      <Modal show={showOffDetails} onHide={closeProductDetails} size='lg'>
        <Modal.Header closeButton>
          <Modal.Title style={{ fontSize: '30px', fontWeight: '700', textAlign: 'center' }}>Just do it</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='container d-flex flex-column align-items-center justify-content-center'>
            <img src={details.image} alt="" style={{ objectFit: 'contain' }} />
            <p className='fs-2 fw-bold'>{details.name}</p>
            <p className='text-center fs-5'>{details.description}</p>
            <p className='fs-4'>{details.quantity}$</p>
          </div></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => { closeProductDetails ()}}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    )
  }
}


