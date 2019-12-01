import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import CollectionItem from "../Collection-preview/Collection-items/Collection-item";

const renderParticularItems = props => {
  let items = [];
  let { Directory, match } = props;
  for (var i = 0; i < Directory.length; i++) {
    if (Directory[i].routeName === match.params.categoryID) {
      items = Directory[i].items;
      break;
    }
  }
  {
    return (
      <div className="collection-preview">
        <h1>{match.params.categoryID.toUpperCase()}</h1>
        <div>
          <div className="preview">
            {items.map(item => {
              return <CollectionItem item={item} />;
            })}
          </div>
        </div>
      </div>
    );
  }
};

const Singleitem = props => {
  console.log(props);
  return renderParticularItems(props);
};

const mapsStateToprops = state => {
  return {
    Directory: state.Directory
  };
};

export default connect(mapsStateToprops, null)(withRouter(Singleitem));
