import React from 'react';
import Modal from 'react-bootstrap/Modal';



class SelectedBeast extends React.Component {
  
  render(){
    return (
      <>
        <Modal show={this.props.modalPop} onHide={this.props.handleCloseModal}>
          <Modal.Header closeButton> <Modal.Title> {this.props.selectedBeastInfo}</Modal.Title> </Modal.Header>
          <img src={this.props.selectedBeast} alt='' ></img>
        </Modal>
      </>  
    )
  }
}



export default SelectedBeast; 