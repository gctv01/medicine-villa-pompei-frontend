import React, {Component} from "react";
import axios from 'axios';

class MedicalHistories extends Component {

    constructor(props){
        super(props);

        this.state = {
            posts: []   
        }
    }

componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/posts')
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

            
            <div>
            <h1>List of posts</h1>
            {
            posts.map(post => <div key={post.id} className="History-card">{post.title}</div>)
            }
                {"\n"}
            </div>

        )
        }
}

export default MedicalHistories