import React from 'react';
import HornedBeast from './HornedBeast';
import data from './data/data.json';
import './Main.css'

class Main extends React.Component {
  render(){
    return (
      <main>
      
        {data.map((hornedBeast,id) => {
          return <HornedBeast title={hornedBeast.title} image_url={hornedBeast.image_url} description={hornedBeast.description} key={id} />
        })}
      </main>
    )
  }
}

export default Main;