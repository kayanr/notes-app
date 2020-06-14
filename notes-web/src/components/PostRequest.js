import React from "react";

class PostRequest extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "",
      text: "",
      color: "",
    };
  }

  componentDidMount() {
    // Simple POST request with a JSON body using fetch
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: 11,
        text: "go gain shopping89",
        color: "beige",
      }),
    };
    fetch("localhost:8080/note", requestOptions)
      .then((response) => response.json())
      .then((data) => this.setState({ id: data.id }));
  }

  render() {
    const { id } = this.state;
    return (
      <div className="card text-center m-3">
        <h5 className="card-header">Simple POST Request</h5>
        {/* <div className="card-body">Returned Id: {id}</div> */}
      </div>
    );
  }
}

export { PostRequest };
