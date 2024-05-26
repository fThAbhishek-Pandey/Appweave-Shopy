import React from 'react'//for using react in this component
import { useState } from 'react'// using state in this statement
import Navbar from './components/Navbar';// retriving component navbar
import Amazon from './components/Amazon'; // retriving component Amazon
import Cart from './components/Cart';//retriving component cart 
import './styles/amazon.css';//retriving component amazon.css
import './App.css'// return component App.css

function App() {// function final component
  const [show, setShow] = useState(true);// hooks -> show on webpage ,show is variable true and false and setshow is function 
	const [cart , setCart] = useState([]);//hooks -> cart is array 
	const [warning, setWarning] = useState(false);// hooks -> 

	const handleClick = (item)=>{// this is showing t-shirt 
		let isPresent = false;
		// let add= "Add To Card";
		cart.forEach((product)=>{
			if (item.id === product.id)
			isPresent = true;
		})
		if (isPresent){
			setWarning(true);
			// add="Added ";
			setTimeout(()=>{
				setWarning(false);
			}, 2000);
			return ;
		}
		setCart([...cart, item]);
	}

	const handleChange = (item, d) =>{
		let ind = -1;
		cart.forEach((data, index)=>{
			if (data.id === item.id)
				ind = index;
		});
		const tempArr = cart;
		tempArr[ind].amount += d;
		
		if (tempArr[ind].amount === 0)
			tempArr[ind].amount = 1;
		setCart([...tempArr])
	}

  return (
	<>
		<Navbar size={cart.length} setShow={setShow} />
		{
			show ? <Amazon handleClick={handleClick} /> : <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
		}
		{
			warning && <div className='warning'>Item is already added to your cart</div>
		}
	</>
  )
}

export default App
