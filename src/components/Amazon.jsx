import React from 'react';
import list from '../styles/data';// data from 
import '../styles/amazon.css';
import Cards from './Cards';

const Amazon = ({handleClick}) => {// creating cart for home page to shop
  return (
    <section>
        {
            list.map((item)=>(
                <Cards item={item} key={item.id} handleClick={handleClick} />
            ))
        }
    </section>
  )
}

export default Amazon