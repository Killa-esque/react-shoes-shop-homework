import React, { Component } from 'react'

export default class ProductItem extends Component {
  render() {
    const { product, viewDetails, addToCart } = this.props;
    return (
      <div className='card'>
        <div className='card-body py-2' style={{ padding: '10', paddingBottom: '0', margin: '0' }} onClick={() => {
          viewDetails(product)
        }} >
          <img src={product.image} alt="..." height={350} width='100%' style={{ objectFit: 'contain' }} />
          <p className='fs-4 fw-bolder' style={{ padding: '0', margin: '0' }}>
            ${product.name.length > 20 ? product.name.substr(0, 20) + '...' : product.name}
          </p>
          <p className='fs-5 fw-bold' style={{ padding: '0', margin: '0' }}>
            {product.price.toLocaleString()}$
          </p>
        </div>
        <div className='card-footer py-3'>
          <button className='btn btn-dark w-100 fw-bold text-uppercase' onClick={() => {
            addToCart(product);
          }}>
            Add to Cart
            <i className='fa fa-cart-plus p-2'></i>
          </button>
        </div>
      </div>
    )
  }
}
