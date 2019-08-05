import React from "react";
import Layout from "../components/layout";
import { Col, Row, Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import { Table, Pagination, PaginationItem, PaginationLink } from "reactstrap";

class Board extends React.Component {
  render() {
    return (
      <div id="board">
        <div className="title">
          <h3>게시판</h3>
        </div>
        <Table borderless>
          <thead>
            <tr>
              <th>번호</th>
              <th>제목</th>
              <th>작성자</th>
              <th>날짜</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">{this.props.number}</th>
              <td>{this.props.name}</td>
              <td>{this.props.title}</td>
              <td>{this.props.content}</td>
              <td>{this.props.write_date}</td>
            </tr>
          </tbody>
        </Table>
        <Pagination size="sm" aria-label="Page navigation example">
          <PaginationItem>
            <PaginationLink first href="#" />
          </PaginationItem>
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
          <PaginationItem>
            <PaginationLink last href="#" />
          </PaginationItem>
        </Pagination>
        <Button outline color="primary">
          <a href="../index">홈으로</a>
        </Button>{" "}
        <Button outline color="secondary">
          <a href="../opinion">글쓰기</a>
        </Button>{" "}
      </div>
    );
  }
}
export default Board;
