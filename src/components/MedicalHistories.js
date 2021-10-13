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
            <div>
            <h1>List of posts</h1>
            <Table>
            </Table>
            {
            posts.map(post => <div key={post.id} className="History-card">{post.nombre_completo}</div>)
            }
                {"\n"}
            </div>
            </Container>
            </>

        )
        }
}

export default MedicalHistories