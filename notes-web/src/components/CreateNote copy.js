/*  import React, { Component } from "react";
import "./CreateNote.css";

export class CreateNote extends Component {
     
    constructor(props) {
        super(props);
        //this.state = {value: ''};
        this.state = {
            id:'',
            text: '',
            color:''}

     
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({value: event.target.value});} 

        handleSubmit(event)  {  
          event.preventDefault();   
 
          componentDidMount(); {
        // Simple POST request with a JSON body using fetch
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({id: this.state.id,
              text: this.state.text,
              color: this.state.color})
        };
        fetch("http://localhost:8080/note", requestOptions)
            .then(response => response.json())
            .then(data => this.setState({ id: data.id }));
      };
    };
 return (
          <div>
        <h2>Add Notes form test</h2>
        <div className="container">
           <form onSubmit={this.handleSubmit}> 
        
            <div style={{ float: "left;" }}>
              <label
                htmlFor="description"
                style={{
                  display: "inline-block;",
                  width: "140px;",
                  textAlign: "right;",
                }}
              >
                Text:{" "}
              </label>
              <textarea
                id="description"
                name="description"
                placeholder="Write something..."
                style={{ height: "170px" }}
              ></textarea>
            </div>
            <div style={{ float: "left;" }}>
              <label
                htmlFor="category"
                style={{
                  display: "inline-block;",
                  width: "140px;",
                  textAlign: "right;",
                }}
              >
                Color:{" "}
              </label>
              <select id="category" name="category">
                <option value="Yellow">Yellow</option>
                <option value="Blue">Blue</option>
                <option value="Green">Green</option>
              </select>{" "}
            </div>
            <div style={{ float: "left;" }}>
              <input
                type="submit"
                value="Submit"
                 style={{ backgroundColor: "#dae8f9" }}
              />
            </div>
          </form>
        </div>
      </div>  
    );  
 */
