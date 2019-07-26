import Link from "next/link";
import React from "react";
import { Container, Row, Col, Button, Jumbotron, ListGroup, ListGroupItem } from "reactstrap";
import Page from "../components/page";
import Layout from "../components/layout";

export default class extends Page {
  render() {
    return (
      <Layout {...this.props} navmenu={false} container={false}>
        <Jumbotron
          className="text-light rounded-0"
          style={{
            backgroundColor: "rgba(188,224,253,0.5)",
            paddingTop: 250
          }}
        >
          <Container className="mt-2 mb-2">
            <h1 className="display-2" style={{ fontWeight: 300 }}>
              <span style={{ fontWeight: 380, fontSize: 30 }}>
                <br className="v-block d-sm-none" />
                안전한 글로벌 암호화폐 거래소의 표준
              </span>
            </h1>

            <p className="lead mb-5" style={{ fontSize: 35 }}>
              A SIXWEEKS 에서 다양한 암호화폐 거래해 보세요ㄴㅇㄴㅇ
            </p>
            <p className="text-right">
              <a
                href="https://github.com/iaincollins/nextjs-starter"
                className="btn btn-outline-light btn-lg"
              >
                <span className="more" /> 더 알아보기
              </a>
            </p>

            <style jsx>{`
              .display-2 {
                text-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
                color: rgba(255, 255, 255, 0.9);
              }
              .lead {
                font-size: 3em;
                opacity: 0.7;
              }
              @media (max-width: 767px) {
                .display-2 {
                  font-size: 3em;
                  margin-bottom: 1em;
                }
                .lead {
                  font-size: 1.5em;
                }
              }
            `}</style>
          </Container>
        </Jumbotron>
        <Container>
          <h2 className="text-center display-4 mt-2 mb-5">게팅 Started</h2>
          <p>
            <a href="https://github.com/zeit/next.js">Next.js</a> from{" "}
            <a href="https://zeit.co">Zeit</a> makes creating websites with React easy.
          </p>
          <p>
            This project integrates several concepts to show how you can use them together in a
            Next.js project.
          </p>
          <p>It also serves as template for creating new projects.</p>
          <pre>
            {`git clone https://github.com/iaincollins/nextjs-starter.git
npm install
npm run dev`}
          </pre>
          <p>
            The simplest way to deploy projects to the cloud is with with 'now', which is from Zeit,
            the creators of Next.js framework.
          </p>
          <pre>
            {`npm install -g now
now`}
          </pre>
          <p>
            For more information on how to build and deploy see{" "}
            <a href="https://github.com/iaincollins/nextjs-starter/blob/master/README.md">
              README.md
            </a>
          </p>
          <p>
            For tips on configuring authentication see{" "}
            <a href="https://github.com/iaincollins/nextjs-starter/blob/master/AUTHENTICATION.md">
              AUTHENTICATION.md
            </a>
          </p>
          <p>
            The next.js repository has a{" "}
            <a href="https://github.com/zeit/next.js/tree/master/examples">
              great selection of examples
            </a>{" "}
            which are an excellent reference.
          </p>
        </Container>
      </Layout>
    );
  }
}
