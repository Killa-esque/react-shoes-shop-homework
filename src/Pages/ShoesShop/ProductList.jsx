import React, { Component } from 'react'
import ProductItem from './ProductItem'

export default class ProductList extends Component {

    renderProductList = () => {
        const widthForProduct = { width: 'calc((100% / 3) - 30px)', margin: '0px', padding: '0px' }
        const { dataShoes, showProductDetails, addToCart } = this.props;
        return dataShoes.map((items, index) => {
            return <div className='col-lg-6 col-md-12' style={widthForProduct} key={index}>
                <ProductItem product={items} viewDetails={showProductDetails} addToCart={addToCart} />
            </div>
        })
    }
    render() {
        return (
            <div className='row justify-content-center' style={{ gap: '30px' }}>
                {this.renderProductList()}
            </div>
        )
    }
}
