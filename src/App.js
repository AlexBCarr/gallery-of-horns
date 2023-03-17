// 1 imports
import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import data from './data/data.json'
import SelectedBeast from './SelectedBeast';
// import { Form, ListGroup } from 'react-bootstrap';
import HornedBeast from './HornedBeast';



// 2 create class - always have render method 
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      modalPop: false,
      selectedBeast: '',
      selectedBeastInfo: '',
      sortedData: HornedBeast,
    }
  }

  handleCloseModal = () =>{
    this.setState({
      modalPop: false
    })
  }

  handleOpenModal = (image_url, description) =>{
    this.setState({
      modalPop: true,
      selectedBeast: image_url,
      selectedBeastInfo: description
    })
  }


  handleSelect = (event) => {
    let selected = event.target.value;

   if(selected === "1"){
    let newData = data.filter(num => num % 1 ===0)
    this.setState({
      sortedData: newData
    })
   }else if (selected === '2') {
    let newData = data.filter(num => num % 2 === 0);
    this.setState({
      sortedData: newData
    })
   }else if (selected === '3') {
    let newData = data.filter(num => num % 3 === 0);
    this.setState({
      sortedData: newData
    })
   }else if (selected === '100') {
    let newData = data.filter(num => num % 100 === 0);
    this.setState({
      sortedData: newData
    })
  }
}

  render(){
    return (
      <>
        {/* <ListGroup>
          {this.state.sortedData.map((num, idx) => {
            return <ListGroup.Item key={idx}>{num}</ListGroup.Item>
          })}
        </ListGroup>

        <Form >
          <Form.Group>
            <Form.Select name="selected" onChange={this.handleSelect}>
              <option value="">Select Number of Horns</option>
              <option value="1">One</option>
              <option value="2">two</option>
              <option value="3">Three</option>
              <option value="100">One Hundred</option>
            </Form.Select>
          </Form.Group>
        </Form> */}
        <Header /> 
        <Main data={data} handleOpenModal={this.handleOpenModal}/>
        <SelectedBeast modalPop={this.state.modalPop} handleCloseModal={this.handleCloseModal} selectedBeast={this.state.selectedBeast} selectedBeastInfo={this.state.selectedBeastInfo}/>
        <Footer />
      </>  
    )
  }
}


// 3 export class
export default App;