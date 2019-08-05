import React from "react";
import Layout from "../components/layout";
import Board from "./board";

class NewBoard extends React.Component {
  state = {
    show: ""
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ show: res }))
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
    const { show } = this.props;

    return (
      <Layout>
        <Board>
          {this.state.show
            ? this.state.show.map(user => (
                <li key={user.number}>
                  {user.number}
                  {user.name}
                  {user.title}
                  {user.content}
                </li>
              ))
            : ""}
        </Board>
      </Layout>
    );
  }
}

export default NewBoard;
