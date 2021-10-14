import React, {Component} from "react";
import axios from 'axios';
import { Table, Button, Container, Modal, ModalBody, ModalHeader, ModalFooter, FormGroup } from "reactstrap";

class MedicalHistories extends Component {

    constructor(props){
        super(props);

        this.state = {
            posts: []   
        }
    }

componentDidMount(){
    axios.get('https://my-json-server.typicode.com/franketa/db.json/pacientes')
    .then(response =>{
        this.setState({
            
            posts: response.data
        })
        console.log(response.data)
    })
}

    

    render(){
        const {posts} = this.state
        return(

            <>
            <Container>
                <h1>List of posts</h1>
                <Table>
                    <thead><tr><th>id</th>
                    <th>Nombre</th>
                    <th>Medico</th>
                    <th>Medico</th>
                    <th>Medico</th>
                    <th>Medico</th>
                    <th>Medico</th>
                    <th>Medico</th>
                    <th>Medico</th>
                    <th>Medico</th></tr></thead>
                    <tbody>
                    {posts.map((post) => 
                    <tr>
                        <td>{post.id}</td>
                        <td>{post.nombre_completo}</td>
                        <td>{post.medico}</td>
                        <td>{post.sintomatologia}</td>
                        <td>{post.intervenciones_quirurgicas}</td>
                        <td>{post.medicacion}</td>
                    </tr>)}
                
                    </tbody>    
                </Table>
                
            </Container>
            </>

        )
        }
}

export default MedicalHistories