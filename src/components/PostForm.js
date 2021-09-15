import React, { Component } from 'react';
import axios from 'axios';

class PostForm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             userId: '',
             title: '',
             body: ''
        }
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    submitHandler = e => {
        e.preventDefault()
        console.log(this.state)
        axios.post('https://jsonplaceholder.typicode.com/posts', this.state)
            .then(response => {
                console.log(response)
            })
            .catch(err => {
                console.log(err)
            })
        
    }
    
    render() {
        const { userId, title, body } = this.state
        return (
            <div>
                <h1>Post Request</h1>
                <h3>you can find the result of the get request in console in inspect</h3>
                <form onSubmit={this.submitHandler} >
                    <div>
                        <input 
                            type="text"
                            name="userId"
                            value={userId}
                            onChange={this.changeHandler}                            
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            name="title" 
                            value={title}
                            onChange={this.changeHandler}                            
                        />
                    </div>
                    <div>
                        <input 
                            type="text" 
                            name="body" 
                            value={body}
                            onChange={this.changeHandler}                            
                        />
                            
                    </div>
                    <button type="submit" >Submit</button>
                </form>
                <hr></hr>
            </div>
        )
    }
}

export default PostForm
