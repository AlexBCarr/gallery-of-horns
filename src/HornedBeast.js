import React from 'react';
import './HornedBeast.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


class HornedBeast  extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      favorites: 0
    }
  }

  handleFavs = () => {
    this.setState({
      favorites: this.state.favorites + 1
    })
  }


  render(){
    return (
      <article>
        {/* <h2>{this.props.title}</h2>
        <p onClick={this.handleFavs}>💙 {this.state.favorites} Favorites</p> 
        <img src={this.props.image_url} alt={this.props.description} title={this.props.title}></img>
        <p>{this.props.description}</p> */}
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={this.props.image_url} alt={this.props.description} />
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>{this.props.description}</Card.Text>
            <Button variant="secondary" onClick={this.handleFavs}>💙 {this.state.favorites} Favorites</Button>
          </Card.Body>
       </Card>
      </article>
    )
  }
} 



export default HornedBeast; 