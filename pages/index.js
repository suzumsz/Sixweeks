import Link from "next/link";
import React from "react";
import { Container, Jumbotron, ListGroup, ListGroupItem } from "reactstrap";
import Page from "../components/page";
import Layout from "../components/layout";
import SSRTEST from "../components/ssr-test";

import {
  Table,
  InputGroup,
  InputGroupText,
  InputGroupAddon,
  Input,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Card,
  Button,
  CardTitle,
  CardText,
  Row,
  Col
} from "reactstrap";
import classnames from "classnames";

import { relative } from "path";
import { SSL_OP_NO_SESSION_RESUMPTION_ON_RENEGOTIATION } from "constants";

export default class extends Page {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: "1"
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render() {
    return (
      <Layout {...this.props} navmenu={false} container={false}>
        <div
          className="text-light rounded-0"
          style={{
            backgroundImage: "url(static/img/bg.png)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            paddingTop: 230,
            paddingBottom: 300,
            marginBottom: 100,
            position: "relative"
          }}
        >
          <div className="bgcenter">
            <Container className="mt-2 mb-2">
              <h1 className="display-2" style={{ fontWeight: 300 }}>
                <span style={{ fontWeight: 380, fontSize: 30, color: "rgba(0, 0, 0, 1)" }}>
                  <br className="v-block d-sm-none" />
                  안전한 글로벌 암호화폐 거래소의 표준
                </span>
              </h1>
              <h1 className="display-6" style={{ fontWeight: 300 }}>
                <span style={{ fontWeight: 380, fontSize: 35, color: "rgba(0, 0, 0, 1)" }}>
                  <br className="v-block d-sm-none" /> <span className="logoco">SIXWEEKS</span> 에서
                  다양한 암호화폐 거래해 보세요
                </span>
              </h1>

              <div className="text-right">
                <a href="https://github.com/SUJEONG2YA/sixweeks">
                  <div className="more"> 더 알아보기</div>
                </a>
              </div>
            </Container>{" "}
          </div>

          <div className="squ-box">
            <div className="sq-box">
              <h5>비트코인</h5>
            </div>
            <div className="sq-box">
              <h5>비트코인</h5>
            </div>
            <div className="sq-box">
              <h5>비트코인</h5>
            </div>
          </div>
        </div>
        <div className="cont">
          <div className="coin">
            <div className="sise_group">
              <div className="sise">
                <span>시세</span>
              </div>
              <div>
                <Nav tabs>
                  <NavItem>
                    <div className="navv">
                      <NavLink
                        className={classnames({ active: this.state.activeTab === "1" })}
                        onClick={() => {
                          this.toggle("1");
                        }}
                      >
                        KRW
                      </NavLink>
                    </div>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({ active: this.state.activeTab === "2" })}
                      onClick={() => {
                        this.toggle("2");
                      }}
                    >
                      <img src="static/img/star.png" />
                    </NavLink>
                  </NavItem>
                </Nav>
                <TabContent activeTab={this.state.activeTab}>
                  <TabPane tabId="1">
                    <Row>
                      <Col sm="12">
                        <Table borderless className="tab">
                          <thead>
                            <tr>
                              <th className="headNumber">이름</th>
                              <th className="headTitle">시가</th>
                              <th className="headWriter">변동률%</th>
                              <th className="headDate">거래량</th>
                            </tr>
                          </thead>
                        </Table>
                        <SSRTEST />
                        <Table borderless />
                      </Col>
                    </Row>
                  </TabPane>
                  <TabPane tabId="2">
                    <Row>
                      <Col sm="6" />
                      <Col sm="6" />
                      <Table borderless>
                        <thead>
                          <tr>
                            <th className="headNumber">
                              <img src="static/img/star.png" /> 이름
                            </th>
                            <th className="headTitle">시가</th>
                            <th className="headWriter">변동률%</th>
                            <th className="headDate">거래량</th>
                          </tr>
                        </thead>
                      </Table>
                    </Row>
                  </TabPane>
                </TabContent>
              </div>

              {/*   <div className="input_search">
                <InputGroup>
                  <Input />
                  <InputGroupAddon addonType="append">
                    <InputGroupText>
                      <img src="static/img/search.png" />
                    </InputGroupText>
                  </InputGroupAddon>
                </InputGroup>
              </div>
                    */}
            </div>
          </div>

          <div className="sixweeks_story">
            <div className="about">
              <img src="static/img/sixweeksstory.png" />
            </div>
            <div className="sixweeks_s">
              <img src="static/img/contents1.png" />
              <h5 className="storytext">
                <a href="#">[ 8월 3주차 ] 혼자 움직이는 비...</a>
              </h5>
              <p className="storytext_sub">
                이번 주도 비트코인의 강세는 계속되었다. 대부분의 알 트코인이 하락을 면치 못하였지만
                비트코인 혼자 계 ...
              </p>
              <span className="storymore">more</span>
            </div>
            <div className="sixweeks_s">
              <img src="static/img/contents2.png" />
              <h5 className="storytext">
                <a href="#">[ 8월 3주차 ] 혼자 움직이는 비...</a>
              </h5>
              <p className="storytext_sub">
                이번 주도 비트코인의 강세는 계속되었다. 대부분의 알 트코인이 하락을 면치 못하였지만
                비트코인 혼자 계 ...
              </p>
              <span className="storymore">more</span>
            </div>
            <div className="sixweeks_s">
              <img src="static/img/contents3.png" />
              <h5 className="storytext">
                <a href="#">[ 8월 3주차 ] 혼자 움직이는 비...</a>
              </h5>
              <p className="storytext_sub">
                이번 주도 비트코인의 강세는 계속되었다. 대부분의 알 트코인이 하락을 면치 못하였지만
                비트코인 혼자 계 ...
              </p>
              <span className="storymore">more</span>
            </div>
          </div>

          <div className="about_sixweeks">
            <div className="about">
              <img src="static/img/aboutsixweeks.png" />
            </div>
            <div className="about_icon">
              <img src="static/img/cybermoney.png" />
            </div>
            <div className="about_icon">
              <img src="static/img/protectmoney.png" />
            </div>
            <div className="about_icon">
              <img src="static/img/technology.png" />
            </div>
            <div className="about_icon">
              <img src="static/img/callcenter.png" />
            </div>
          </div>
        </div>

        <div className="footer">
          <div className="footerin">
            <img src="static/img/footerlogo.png" />
            <ul className="maainfooter">
              <li className="mainfoo">
                <a href="#">회사정보</a>
                <ul className="subfooter">
                  <li className="subfoo">
                    <a href="#">회사소개</a>
                  </li>
                  <li className="subfoo">
                    <a href="#">채용안내</a>
                  </li>
                  <li className="subfoo">
                    <a href="#">복지소개</a>
                  </li>
                </ul>
              </li>
              <li className="mainfoo">
                <a href="#">고객지원</a>
                <ul className="subfooter">
                  <li className="subfoo">
                    <a href="#">자주하는질문(FAQ)</a>
                  </li>
                  <li className="subfoo">
                    <a href="#">1 : 1 문의하기</a>
                  </li>
                  <li className="subfoo">
                    <a href="#">거래 및 입출금 이용안내</a>
                  </li>
                </ul>
              </li>
            </ul>
            <div className="footerinfo">
              <img src="static/img/Social.png" />
              <address>서울특별시 강남구 테헤란로 16길 17 (수정빌딩)</address>
              <p>Copyright ⓒ 2019 SIXWEEKS. All rights reserved</p>
              <span>
                <a href="#">KR | EN</a>
              </span>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}
