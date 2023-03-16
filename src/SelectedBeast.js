import React from 'react';
import Modal from 'react-bootstrap/Modal';
// import Main from './Main'




class SelectedBeast extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      
    }
  }

  render(){
    return (
      <>
        <Modal show={this.state.modalPop} onHide={this.handleCloseModal}>
          <Modal.Header closeButton>{this.state.selectedBeast}</Modal.Header>
        </Modal>
        
      </>  
    )
  }
}



export default SelectedBeast; 