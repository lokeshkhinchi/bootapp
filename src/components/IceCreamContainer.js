import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { buyIceCream } from '../redux';

function IceCreamContainer(props) {
  const numOfIceCreams = useSelector(state => state.iceCream.numOfIceCreams)
  const dispatch = useDispatch();
  return (
    <React.Fragment>
      <h2>Number of Ice Cream - {numOfIceCreams}</h2>
      <button onClick={() => dispatch(buyIceCream())}>Buy Cake</button>
    </React.Fragment>
  )
}


export default IceCreamContainer