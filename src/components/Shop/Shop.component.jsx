import React from 'react';
import SHOP_DATA from './ShopData';
import { withRouter } from 'react-router-dom';
import Collectionpreview from './Collection-preview/Collection.component';
import './Shop.style.scss';

class Shop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      section: SHOP_DATA
    };
  }

  componentDidMount() {
    console.log(this.props);
    console.log(this.state.section);
  }

  render() {
    return (
      <div>
        <div className="shop-page">
          {this.state.section.map(collection => {
            return (
              <Collectionpreview
                key={collection.id}
                title={collection.title}
                items={collection.items.slice(0, 4)}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default withRouter(Shop);
