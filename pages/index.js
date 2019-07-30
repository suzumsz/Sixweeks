import Link from "next/link";
import React from "react";
import { Container, Row, Col, Button, Jumbotron, ListGroup, ListGroupItem } from "reactstrap";
import Page from "../components/page";
import Layout from "../components/layout";
import { relative } from "path";

export default class extends Page {
  render() {
    return (
      <Layout {...this.props} navmenu={false} container={false}>
        <Jumbotron
          className="text-light rounded-0"
          style={{
            backgroundColor: "rgba(188,224,253,0.5)",
            paddingTop: 250,
            paddingBottom: 150,
            marginBottom: 100,
            position: "relative"
          }}
        >
          <Container className="mt-2 mb-2">
            <h1 className="display-2" style={{ fontWeight: 300 }}>
              <span style={{ fontWeight: 380, fontSize: 30 }}>
                <br className="v-block d-sm-none" />
                안전한 글로벌 암호화폐 거래소의 표준
              </span>
            </h1>
            <h1 className="display-6" style={{ fontWeight: 300 }}>
              <span style={{ fontWeight: 380, fontSize: 35 }}>
                <br className="v-block d-sm-none" />A SIXWEEKS 에서 다양한 암호화폐 거래해 보세요
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
        </Jumbotron>

        <div className="coin">
          <h2>시세데스네~</h2>
        </div>

        <div className="sixweeks_story">
          <div className="sixweeks_s">
            <h2>광고</h2>
          </div>
          <div className="sixweeks_s">
            <h2>광고</h2>
          </div>
          <div className="sixweeks_s">
            <h2>광고</h2>
          </div>
        </div>

        <div className="about_sixweeks">
          <div className="about_icon">
            <h5>아이콘</h5>
          </div>
          <div className="about_icon">
            <h5>아이콘</h5>
          </div>
          <div className="about_icon">
            <h5>아이콘</h5>
          </div>
          <div className="about_icon">
            <h5>아이콘</h5>
          </div>
        </div>

        <div className="footer">
          <h3>sixweeks</h3>
        </div>
      </Layout>
    );
  }
}
