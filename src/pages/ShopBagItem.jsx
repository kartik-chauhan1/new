import React, { useContext } from 'react'
import'./ShopBagItem.css'
import { AppContext } from '../App'

function ShopBagItem({game,index}) {
  const { bag,setBag} = useContext(AppContext);

  const handelRemoveFromBag = (event, game) => {
    event.preventDefault(); // Prevents the default behavior of the anchor element
    setBag(bag.filter(item => item._id !== game._id));
  };
  
  return (
    <tr className="shopBagItem">
        <th className="row">
          {index+1}</th>
        <td >
            <img src={game.img} alt='' className='img-fluid' />
        </td>
        <td>{game.title}</td>
        <td>${game.price.toFixed(2)}</td>
        <td>{game.discount *100}%</td>
        <td>${(game.price * (1-game.discount)).toFixed(2)}</td>
        <td>
        <a href=' ' onClick={(event) => handelRemoveFromBag(event, game)}>
       <i className="bi bi-trash"></i>
</a>

            </td>
    </tr>
  )
}

export default ShopBagItem