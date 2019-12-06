import React, { Component } from 'react';
import axios from "./axiosConfig";

class Comments extends Component {
    constructor(props) {
      super(props);

      this.state = {
        loaded: false,
        comments: [],
        }; 
    }

    componentDidMount() {

      let { article } = this.props; //get article ID here

      console.log(article);

      axios.get(`articles/${article}/comments`).then(({ data }) => {

        this.setState({

          loaded: true,
          comments: data.data, //give you back an array of comments 

            }); 

        });
    }

    render() {

      let { comments, loaded } = this.state;

      return !loaded ? <p>Loading...</p> : (
        <>
          <h2>Show Comments</h2>

          <ul className="list-group">
            { comments.map((comment) => (
              <li className="list-group-item" key={ comment.id }> 
                <p lassName="list-group-item">{ comment.email } </p>
                <p lassName="list-group-item">{ comment.comment }</p>
              </li>
            )) }

           </ul>
        </> 
        );
    } 
}

  export default Comments;
