// 1 imports
import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import Modal from 'react-bootstrap/Modal';
import data from './data/data.json'


// 2 create class - always have render method 
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      modalPop: false,
      selectedBeast: {}
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
      selectedBeast: image_url, description
    })
  }
  render(){
    return (
      <>
        <Header /> 
        <Main handleOpenModal={this.handleOpenModal} data={data} />
        <Modal show={this.state.modalPop} onHide={this.handleCloseModal}>
          <Modal.Header closeButton>{this.state.selectedBeast}</Modal.Header>


        </Modal>
        <Footer />
      </>  
    )
  }
}


// 3 export class
export default App;