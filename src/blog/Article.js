import React, { Component } from 'react';
import axios from "./axiosConfig";

import Comments from "./Comments";

class Article extends Component {
    constructor(props){
        super(props);

        this.state = {
            loaded: false,
            article: { }, // article is an object 
        }; 
    }

    componentDidMount() {

        let { article } = this.props; //get id 
        console.log(article);
       
        axios.get(`/articles/${article}`).then(({ data }) => {
  
          this.setState({
  
            loaded: true,
            article: data.data, // data.date is a object here
              }); 
  
          });
    }
  
    render() { 
        let { article, loaded } = this.state;
        
        return !loaded ? <p>Loading...</p> : (
            <>
                <h2>Article : { article.title } </h2>
                <p> Article Body : { article.article } </p>
                <p> Article Tags : { article.tags } </p>
                <Comments article={ article.id }/>
            </>);
    }
}

export default Article ;
