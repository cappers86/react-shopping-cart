import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import CartContent from '../contexts.js/CartContext';


const Navigation = () => {
	const cart  = useContext(CartContent);
	return (
		<div className="navigation">
			<NavLink to="/">Products</NavLink>
			<NavLink to="/cart">
				Cart <span>{cart.length}</span>
			</NavLink>
		</div>
	);
};

export default Navigation;
