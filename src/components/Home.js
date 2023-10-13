import React, { Component } from 'react'
import axios from 'axios'
// import { BrowserRouter as Link } from 'react-router-dom';
import Apple from "../Apple.jpg";

export class Home extends Component {

    state = {
        posts: []
    }

    componentDidMount() {
        const url = 'https://jsonplaceholder.typicode.com/posts/';
        axios
            .get(url) //What's Passed Here Is a promise
            .then(Response => { //So We use the .then to get it after Completion of Execution 
                console.log(Response);
                this.setState({
                    posts: Response.data.slice(0, 20)
                })
            })
            .catch(error => {
                console.error(error);
            })
    }
    render() {
        const { posts } = this.state
        const postLists = posts.length ? (
            posts.map(posts => {
                return <div className="post card" key={posts.id}>
                    <img src={Apple} alt="Lady With Abbs" srcset="" />


                    <div className="card-content">
                        <a href={'/' + posts.id}>
                            <span className="card-title">{posts.title}</span>
                        </a>
                        <p>
                            {posts.body}
                        </p>
                    </div>
                </div>
            })
        ) : (
            <div className="center font-bold">No Posts Yet</div>
        )
        return (
            <div className='container home'>
                <h1 className='center text-6xl font-bold'>Home</h1>
                {postLists}
            </div>
        )
    }
}

export default Home