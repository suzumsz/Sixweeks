import React from "react";
import Layout from "../components/layout";
import { Col, Row, Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import { Table, Pagination, PaginationItem, PaginationLink } from "reactstrap";

class Board extends React.Component {
  render() {
    return (
      <Table borderless id="board">
        <tbody>
          <tr>
            <th scope="row" className="tableNumber">
              {this.props.number}
            </th>
            <td className="tableTitle">{this.props.title}</td>
            <td className="tableName">{this.props.name}</td>
            <td className="tableContent">{this.props.content}</td>
            <td className="tableDate">{this.props.write_date}</td>
          </tr>
        </tbody>
      </Table>
    );
  }
}
export default Board;
