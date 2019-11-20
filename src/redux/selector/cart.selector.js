import { createSelector } from 'reselect'

const cartContainer = state => state.cartItemList;


const cartItemsSelector = createSelector(
    [cartContainer],
    cartItems=>cartItems
  )


export {cartItemsSelector} 