import React from 'react';
import HornedBeast from './HornedBeast';
import './Main.css'

class Main extends React.Component {
  render(){
    return (
      <main>      
        {this.props.data.map(hornedBeast => (
      <HornedBeast 
      title={hornedBeast.title} 
      image_url={hornedBeast.image_url} 
      description={hornedBeast.description} 
      handleOpenModal={this.props.handleOpenModal}/>
        ))}
      </main>
    )
  }
}

export default Main;