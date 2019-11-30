import React from 'react';

import CollectionItem from './Collection-items/Collection-item';
import {connect} from 'react-redux'
import './Collection-preview.style.scss';

const CollectionPreview = (props) => {
  console.log(props)
  return (
    <div className="collection-preview">
     {props.Directory.map(items => {
      
      return (<div>
       <h1 className="title">{items.title}</h1>  
      <div className="preview">
        
          {items.items.slice(0,4).map((item)=>{
              return <CollectionItem key={items.id} item={item} />;
            })
          
          }
          
       
      </div></div>)
      })}
    </div>
  );
};


const mapsStateToProps=(state)=>({
  Directory:state.Directory
})

export default connect(mapsStateToProps,null)(CollectionPreview);
