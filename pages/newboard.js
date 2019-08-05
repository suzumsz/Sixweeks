import React, { Component } from "react";
import Board from "./board";
import Layout from "../components/layout";

class NewBoard extends Component {
  state = {
    board: ""
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ board: res }, console.log(res)))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch(
      "http://ec2-13-125-250-20.ap-northeast-2.compute.amazonaws.com/show"
    );
    const body = await response.json();
    return body;
  };

  render() {
    return (
      <Layout>
        <div>
          {this.state.board
            ? this.state.board.map(c => {
                return (
                  <Board
                    key={c.number}
                    number={c.number}
                    title={c.title}
                    name={c.name}
                    write_date={c.write_date}
                  />
                );
              })
            : ""}
        </div>
      </Layout>
    );
  }
}

export default NewBoard;
