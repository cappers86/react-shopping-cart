import React, { useContext } from 'react';
import ProductContent from '../contexts.js/ProductContext';

// Components
import Product from './Product';

const Products = () => {
	const {products, addItem} = useContext(ProductContent);
	return (
		<div className="products-container">
			{products.map(product => (
				<Product
					key={product.id}
					product={product}
					addItem={addItem}
				/>
			))}
		</div>
	);
};

export default Products;
