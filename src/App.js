import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';
import ProductContent from './contexts.js/ProductContext';
import CartContext from './contexts.js/CartContext';


// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		// add the given item to the cart
		return setCart([...cart, item])
	};

	return (
		
			
	<ProductContent.Provider value={{products, addItem}}>
		<CartContext.Provider value={ cart }>
		<div className="App">
			<Navigation cart={cart} />

			{/* Routes */}
			<Route 
					exact path='/' component={Products}
					
			/>

			<Route
				path="/cart"
				render={() => <ShoppingCart cart={cart} />}
			/>
		</div>
	);
	</CartContext.Provider>
	</ProductContent.Provider> 
	
	)}

export default App;
