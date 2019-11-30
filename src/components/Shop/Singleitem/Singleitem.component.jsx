import React from 'react'
import {CustomButton} from '../../CustomButton/CustomButton.component'

const Singleitem=(props)=>{
    return(
        <div>
            <div
          className="image"
          style={{ backgroundImage: `url(${props.item.imageUrl})` }}
        />
        <div className="collection-footer">
          <span className="name">{props.item.name}</span>
          <span className="price">${props.item.price}</span>
        </div>
        <div className="make-btn-center">
          <CustomButton onClick={e => this.addToCart(props.item.id)}>
            ADD TO CART
          </CustomButton>
        </div>
        </div>
    )
}


export default Singleitem;