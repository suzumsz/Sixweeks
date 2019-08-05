import React from "react";
import Layout from "../components/layout";
//import "./write.html";
import { Col, Row, Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
class Opinion extends React.Component {
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
          <FormGroup>
            <Label for="exampleAddress" />
            <Input
              className="text_box"
              type="text"
              name="address"
              id="exampleAddress"
              placeholder="작성자"
            />
            <Label for="exampleAddress" />
            <Input
              className="text_box"
              type="text"
              name="address"
              id="exampleAddress"
              placeholder="제목을 입력하세요"
            />
          </FormGroup>
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <select class="custom-select" id="inputGroupSelect01">
                <option selected>Choose...</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
              <select class="custom-select" id="inputGroupSelect01">
                <option selected>Choose...</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
          </div>
          <FormGroup check>
            <Label check>
              <Input type="checkbox" id="checkbox2" /> 비밀글
            </Label>
          </FormGroup>
          <FormGroup>
            <Label for="exampleText" />
            <Input type="textarea" name="text" id="exampleText" placeholder="내용을 입력하세요" />
          </FormGroup>
          <Button outline color="primary">
            <a href="../board">목록</a>
          </Button>{" "}
          <Button outline color="secondary">
            게시
          </Button>{" "}
        </div>
      </Layout>
    );
  }
}
export default Opinion;
