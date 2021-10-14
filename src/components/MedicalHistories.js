import React, { Component } from "react";
import axios from "axios";
import {
  Table,
  Button,
  Container,
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
  FormGroup,
} from "reactstrap";

class MedicalHistories extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
    };
  }
  


  componentDidMount() {
    const fetchPacientes = async () => {
      try {
        await axios.get("http://localhost:3006/pacientes").then((response) => {
          this.setState({
            posts: response.data,
          });
          console.log(response.data);
        });
      } catch (error) {}
    };
    fetchPacientes()
    
   
  }


  render() {
    const { posts } = this.state;
    const deleteHandler= (e)=>{
        console.log(e)
    }
    return (
      <>
        <Container>
          <h1>List of posts</h1>
          <Table>
            <thead>
              <tr>
                <th>id</th>
                <th>Nombre</th>
                <th>Medico</th>
                <th>Sintomatoligia</th>
                <th>Intervenciones Quirurgicas</th>
                <th>Tratamientos Actuales</th>
                <th>Vacunas</th>
                <th>Alergias</th>
                <th>Editar</th>
                <th>Eliminar</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post) => (
                <tr id={post.id} key={post.id}>{post.id}
                  <td>{post.id}</td>
                  <td>{post.nombre_completo}</td>
                  <td>{post.medico}</td>
                  <td>{post.sintomatologia}</td>
                  <td>{post.intervenciones_quirurgicas}</td>
                  <td>{post.tratamientos_actuales}</td>
                  <td>{post.vacunas}</td>
                  <td>{post.alergias}</td>
                  <td>
                    <Button color="success" onClick={(e)=>{deleteHandler(e.target.parentNode.parentNode.id)}}>Editar</Button>
                  </td>
                  <td>
                    <Button color="success" onClick={(e)=>{deleteHandler(e.target)}}>Eliminar</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>
      </>
    );
  }
}

export default MedicalHistories;
