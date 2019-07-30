import React from "react";
import Layout from "../components/layout";
import { Col, Row, Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import { Table, Pagination, PaginationItem, PaginationLink } from "reactstrap";

class Board extends React.Component {
  render() {
    return (
      <Layout>
        <div className="_title">
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
              <th scope="row">1</th>
              <td>비트코인 변동률 시간별로 볼 수 있나요?</td>
              <td>김** </td>
              <td>45시간 전</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>
                <img src="../img/그룹55.png" />
                이더리움에 거래 했는데 지금 실시간 시세가 떨어지......
              </td>
              <td>강**</td>
              <td>2019.07.10</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">5</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">6</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr>
            <tr>
              <th scope="row">7</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">8</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">9</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr>
            <tr>
              <th scope="row">10</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
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
      </Layout>
    );
  }
}
export default Board;
