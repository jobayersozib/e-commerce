import React from 'react';

import CollectionItem from './Collection-items/Collection-item';
import './Collection-preview.style.scss';

const CollectionPreview = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title}</h1>
      <div className="preview">
        {items.map(item => {
          return <CollectionItem key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
};

export default CollectionPreview;
