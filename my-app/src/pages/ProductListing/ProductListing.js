import React from 'react'
import { useData } from '../../Context/DataContext'
import { ProductCard } from '../../components/ProductCard/ProductCard'

const ProductListing = () => {
    const {filteredProducts } = useData()
    
  return (
    <div>
     <div className="main">
        <h3>Showing All Products</h3>

        <div className="products__container">
          {filteredProducts.map((product) => {
            return (
              <ProductCard
                product={product}
                add={true}
                move={false}
                key={product._id}
              />
            );
          })}
        </div>
      </div>
      
    </div>
  )
}

export default ProductListing
