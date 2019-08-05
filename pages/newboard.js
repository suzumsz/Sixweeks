import React, { Component } from "react";
import Board from "./board";
import Layout from "../components/layout";

import { Col, Row, Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import { Table, Pagination, PaginationItem, PaginationLink } from "reactstrap";

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
        <div id="board">
          <div className="body">
            <div className="body-title">
              <h2>게시판</h2>
            </div>
            <h4 className="body-QA">Q&A</h4>
            <Table borderless>
              <thead>
                <tr>
                  <th className="headNumber"> 번호</th>
                  <th className="headTitle">제목</th>
                  <th className="headWriter">작성자</th>
                  <th className="headDate">날짜</th>
                </tr>
              </thead>
            </Table>
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
            <div className="bottom">
              <Pagination size="" aria-label="Page navigation example" className="PagingLink">
                <PaginationItem>
                  <PaginationLink previous href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">2</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink next href="#" />
                </PaginationItem>
              </Pagination>
              <Button outline color="primary" className="HomeButton">
                <a href="./index">홈으로</a>
              </Button>{" "}
              <Button outline color="secondary" className="WriteButton">
                <a href="./opinion">글쓰기</a>
              </Button>{" "}
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default NewBoard;
