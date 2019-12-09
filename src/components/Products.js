import React, { useContent } from 'react';
import ProductContent from '../contexts.js/ProductContext';

// Components
import Product from './Product';

const Products = props => {
	const {products, addItem} = useContent(ProductContent);
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
