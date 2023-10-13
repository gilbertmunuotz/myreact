import React, { Component } from 'react'
import { Params } from 'react-router-dom';

export class Posts extends Component {
    state = {
        id: null //At Initial We Set The id value to Null
    }
    componentDidMount() {
        let id = this.props.match.params.id;
        this.setState({
            id: id
        })
    }
    render() {
        return (
            <div className='container'>
                <h1>
                    {this.state.id}
                </h1>
            </div>
        )
    }
}

export default Posts