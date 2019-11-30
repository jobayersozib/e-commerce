import React from 'react'
import {connect} from 'react-redux'
import Collectionpreview from '../Shop/Collection-preview/Collection.component'


class Collectionoverview extends React.Component{
    render(){
        return(
            <div className="shop-page">
          {this.state.Directory.map(collection => {
            return (
              <Collectionpreview
                key={collection.id}
                title={collection.title}
                items={collection.items.slice(0, 4)}
              />
            );
          })}
        </div>
        )
    }
}
const stateMapsToProps = state => ({
    state: state
  });

export default connect(stateMapsToProps,null)(Collectionoverview)