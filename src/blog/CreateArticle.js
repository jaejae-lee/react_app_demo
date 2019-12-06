import React, { Component } from 'react';
import axios from "./axiosConfig";

class CreateArticle extends Component {
    constructor(props) {
      super(props);

      this.state = {
        title: "",
        article: "",
        tags: "",
        sent:false,
        }; 

        this.handleTitle = this.handleTitle.bind(this);
        this.handleArticle = this.handleArticle.bind(this);
        this.handleTags = this.handleTags.bind(this);
    }

    handleTitle(e) {
        this.setState({ title: e.currentTarget.value,});
    }
    handleArticle(e) {
        this.setState({ article: e.currentTarget.value,});
    }
    handleTags(e) {
        this.setState({ tags: e.currentTarget.value,});
    }

    handleSubmit(e) {
        this.setState({ tags: e.currentTarget.value,});
    }


    componentDidMount(){
    //post date to an API
      axios.post("articles/create", {
        title, // <- does the same thing as title: title, 
        article,
        tags: tags.split(",")

      }).then(() => {
        //clear the input, set sent true
        this.setState({
          title: "",
          article:"",
          tags: "",
          sent:true

        }); 
      });

    }

    render() {

      let { title, article, tags } = this.state;

      return (
        <>
          <h2>Create Article here</h2>

          <label>{ title }</label>
          <input type = "strings"
                 label = { title }
                 onChange={ this.handleTitle }
           />

          <label>{ article }</label>
          <input type = "strings"
                 label = { article }
                 onChange={ this.handleArticle }
          />

          <label>{ tags }</label>
          <input type = "strings"
                 label = { tags }
                 onChange={ this.handleTags }
          />

        </> 
        );
    } 
}

  export default CreateArticle;
