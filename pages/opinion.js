import React from "react";
import Layout from "../components/layout";
import { write } from "../components/userFunction";
import { Col, Row, Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
class Opinion extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "",
      name: "",
      content: ""
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();

    const user = {
      title: this.state.title,
      name: this.state.name,
      content: this.state.content
    };

    write(user).then(res => {
      if (res) {
        this.props.history.push(`../components/profile`);
      }
    });
  }

  render() {
    return (
      <Layout>
        <div className="_title">
          <h3>게시판</h3>
        </div>
        <div className="board_box">
          <div className="write">
            <h5>글쓰기</h5>
          </div>
          <form onSubmit={this.onSubmit}>
            <FormGroup>
              <Label for="exampleAddress" />
              <Input
                className="text_box"
                type="text"
                id="exampleAddress"
                placeholder="작성자"
                name="name"
                value={this.state.name}
                onChange={this.onChange}
              />
              <Label for="exampleAddress" />
              <Input
                className="text_box"
                type="text"
                id="exampleAddress"
                placeholder="제목을 입력하세요"
                name="title"
                value={this.state.title}
                onChange={this.onChange}
              />
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="checkbox" id="checkbox2" /> 비밀글
              </Label>
            </FormGroup>
            <FormGroup>
              <Label for="exampleText" />
              <Input
                type="textarea"
                id="exampleText"
                placeholder="내용을 입력하세요"
                name="content"
                value={this.state.content}
                onChange={this.onChange}
              />
            </FormGroup>
            <Button outline color="primary">
              <a href="../board">목록</a>
            </Button>{" "}
            <Button outline color="secondary">
              게시
            </Button>{" "}
          </form>
        </div>
      </Layout>
    );
  }
}
export default Opinion;
