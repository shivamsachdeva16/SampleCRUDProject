import React, {Component} from 'react';
import {Modal, Button, Row, Col, Form} from 'react-bootstrap';

export class AddMedicineModal extends Component{
    constructor(props){
        super(props);
    }
    
    render(){
       // function MyVerticallyCenteredModal(props){
            
            return(
              <Modal
                {...this.props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
              >
                <Modal.Header closeButton>
                  <Modal.Title id="contained-modal-title-vcenter">
                    Add Medicine
                  </Modal.Title>
                </Modal.Header>
                <Modal.body>
                 <div className="container">
                     To add form fields for medicine
                 </div>
                </Modal.body>
          
                <Modal.Footer>
                  <Button variant='danger' onClick={this.props.onHide}>Close</Button>
                </Modal.Footer>
              </Modal>
            );
          }
                   
    }


//export default AddMedicineModal; 
