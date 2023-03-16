import React from 'react';
import HornedBeast from './HornedBeast';
import SelectedBeast from './SelectedBeast';
import './Main.css'

class Main extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    
    }
  }
  render(){
    return (
      <main>
      
        {this.props.data.map((hornedBeast,id) => {
          return <HornedBeast title={hornedBeast.title} image_url={hornedBeast.image_url} description={hornedBeast.description} key={id} handleOpenModal={this.props.handleOpenModal}/>
        })}
      </main>
    )
  }
}

export default Main;