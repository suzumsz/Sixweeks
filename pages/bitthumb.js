import React, { Component } from "react";
import Board from "./board";
import Layout from "../components/layout";

import { Col, Row, Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import { Table, Pagination, PaginationItem, PaginationLink } from "reactstrap";

class Bithumb extends Component {
  state = {
    board: ""
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ board: res }, console.log(res)))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch("https://api.bithumb.com/public/ticker/ALL");
    const body = await response.json();
    return body;
  };

  render() {
    return (
      <div>
        <Table borderless className="tab">
          <thead>
            <tr>
              <th className="headNumber">이름</th>
              <th className="headTitle">시가</th>
              <th className="headWriter">거래량</th>
              <th className="headDate">변동률%</th>
            </tr>
          </thead>
        </Table>
        <Table borderless>
          <thead>
            <tr>
              <td className="tableTitle">
                <img src="static/img/star.png" />
                {this.props.data}
              </td>
              <td className="tableName">{this.props.closing_price}</td>
              <td className="tableContent">{this.props.units_traded}</td>
              <td className="tableDate">{this.props.opening_price}</td>
            </tr>
          </thead>
        </Table>
      </div>
    );
  }
}

export default Bithumb;
