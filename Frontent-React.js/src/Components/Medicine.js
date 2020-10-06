import React, { Component } from 'react';
import './Medicine.css';
import{Button, ButtonToolbar} from 'react-bootstrap';
import {AddMedicineModal} from './AddMedicineModal';
import {Table} from 'react-bootstrap';

class Medicine extends Component {

    constructor(props){
        super(props);
        this.state = {meds:[], addModalShow : false}
    }
    componentDidMount(){
        this.refreshList();
    }

    refreshList(){
     fetch('https://localhost:44346/api/Medicine')
     .then(response=> response.json())
     .then(data =>{
      this.setState({meds:data});
     }
     );
     
    }
   
    render(){
           const {meds} = this.state;
           console.log(this.state);
           let addModalClose = () =>this.setState({addModalShow:false});

        return( 
            <div>
            <Table className ="medicineTable">
                <thead>
                  <tr>
                      <th>Medicine Id</th>
                      <th>MedicineName</th>
                      <th>Brand</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>ExpiryDate</th>
                    
                  </tr>
                </thead>
                <tbody>
                    {meds.map(med=>
                    <tr key ={med.MedicineID}>
                   
                    <td>{med.MedicineID}</td>
                    <td>{med.MedicineName}</td>
                    <td>{med.Brand}</td>
                    <td>{med.Price}</td>
                    <td><script>console.log(med.ExpiryDate)</script>{med.Quantity}</td>
                    <td>{med.ExpiryDate}</td>

                    </tr>
                   )}
                   
                </tbody>
        </Table>
        
        <ButtonToolbar>
            <Button
            variant='primary' 
            onClick={()=> this.setState({addModalShow : true})}>Add Medicine
            
            </Button>

            <AddMedicineModal
            show={this.state.addModalShow}
            onHide={addModalClose}/>

        </ButtonToolbar>
      </div>    
        )
     }

}

export default Medicine;

