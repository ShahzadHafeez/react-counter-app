import React, { Component } from "react";
class List extends Component {
  state = {
    list: [],
    error: null,
  };

  buildData = (response) => {
    console.log("response: " + response);
    this.setState({ list: response });
  };

  componentDidMount() {
    console.log("List - Mount");
    const url =
      "https://prof3ssorst3v3.github.io/media-sample-files/products.json";
    fetch(url)
      .then((response) => response.json())
      .then(this.buildData)
      .catch((error) => this.setState({ error }));
  }

  render() {
    return (
      <div>
        <ul className="list-group list-group-horizontal">
          {this.state.list.length === 0 && <li> Sorry No Data Available!</li>}
          {this.state.list.length > 0 &&
            this.state.list.map((item) => (
              <li
                className="list-group-item m-2 card"
                key={item.id}
                style={{ width: 300 }}
              >
                <img
                  src={this.getImageUrl(item.img)}
                  className="card-img-top"
                ></img>
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">{item.desc}</p>
                  <a href="#" className="btn btn-primary">
                    ${item.price}
                  </a>
                </div>
              </li>
            ))}
          {this.state.error && <span>{this.state.error}</span>}
        </ul>
      </div>
    );
  }

  getImageUrl(imageUrl) {
    let url = "https://prof3ssorst3v3.github.io/media-sample-files/";
    url += imageUrl;
    return url;
  }
}

export default List;
