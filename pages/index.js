import Link from "next/link";
import React from "react";
import { Container, Row, Col, Button, Jumbotron, ListGroup, ListGroupItem } from "reactstrap";
import Page from "../components/page";
import Layout from "../components/layout";
import { Table } from "reactstrap";

import { relative } from "path";
import { SSL_OP_NO_SESSION_RESUMPTION_ON_RENEGOTIATION } from "constants";

export default class extends Page {
  render() {
    return (
      <Layout {...this.props} navmenu={false} container={false}>
        <div
          className="text-light rounded-0"
          style={{
            backgroundImage: "url(static/img/baround.png)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            paddingTop: 250,
            paddingBottom: 300,
            marginBottom: 100,
            position: "relative"
          }}
        >
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

            <p className="text-right">
              <a
                href="https://github.com/iaincollins/nextjs-starter"
                className="btn btn-outline-light btn-lg"
              >
                <span className="more" /> 더 알아보기
              </a>
            </p>
          </Container>
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
                  <th className="headNumber">
                    <img src="static/img/star.png" /> 이름
                  </th>
                  <th className="headTitle">시가</th>
                  <th className="headWriter">거래량</th>
                  <th className="headDate">변동률%</th>
                </tr>
              </thead>
            </Table>
          </div>

          <div className="sixweeks_story">
            <div className="about">
              <img src="static/img/sixweeksstory.png" />
            </div>
            <div className="sixweeks_s">
              <img src="static/img/contents1.png" />
              <h5 className="storytext">[ 8월 3주차 ] 혼자 움직이는...</h5>
              <p>
                이번 주도 비트코인의 강세는 계속되었다. 대부분의 알 트코인이 하락을 면치 못하였지만
                비트코인 혼자 계 ...
              </p>
              <span>more</span>
            </div>
            <div className="sixweeks_s">
              <img src="static/img/contents2.png" />
              <h5 className="storytext">[ 8월 3주차 ] 혼자 움직이는...</h5>
              <p>
                이번 주도 비트코인의 강세는 계속되었다. 대부분의 알 트코인이 하락을 면치 못하였지만
                비트코인 혼자 계 ...
              </p>
              <span>more</span>
            </div>
            <div className="sixweeks_s">
              <img src="static/img/contents3.png" />
              <h5 className="storytext">[ 8월 3주차 ] 혼자 움직이는...</h5>
              <p>
                이번 주도 비트코인의 강세는 계속되었다. 대부분의 알 트코인이 하락을 면치 못하였지만
                비트코인 혼자 계 ...
              </p>
              <span>more</span>
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
                회사정보
                <ul className="subfooter">
                  <li className="subfoo">회사소개</li>
                  <li className="subfoo">채용안내</li>
                  <li className="subfoo">복지소개</li>
                </ul>
              </li>
              <li className="mainfoo">
                고객지원
                <ul className="subfooter">
                  <li className="subfoo">자주하는질문(FAQ)</li>
                  <li className="subfoo">1 : 1 문의하기</li>
                  <li className="subfoo">거래 및 입출금 이용안내</li>
                </ul>
              </li>
            </ul>
            <div className="footerinfo">
              <img src="static/img/Social.png" />
              <address>서울특별시 강남구 테헤란로 16길 17 (수정빌딩)</address>
              <p>Copyright ⓒ 2019 SIXWEEKS. All rights reserved</p>
              <span>KR | EN</span>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}
