import React from 'react';
import MenuItem from '../Menu-item/Menu-item.component';
import {connect} from 'react-redux'
import './Directory.css.scss';

class Directory extends React.Component {
  

  componentDidMount(){
    console.log(this.props)
  }
  render() {
    return (
      <div className="directory-menu">
        {this.props.Directory.map(data => {
          return (
            <MenuItem
              key={data.id}
              imageUrl={data.imageUrl}
              title={data.title}
              linkUrl={data.linkUrl}
              size={data.size}
            />
          );
        })}
      </div>
    );
  }
}

const mapsStateToProps=(state)=>{
  return {Directory:state.Directory}
}

export default connect(mapsStateToProps,null)(Directory) ;
