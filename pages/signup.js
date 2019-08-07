import React from "react";
import Layout from "../components/layout";
import { register } from "../components/userFunction";
import { email } from "../components/userFunction";
import Profile from "../components/profile";

class Signup extends React.Component {
  constructor() {
    super();
    this.state = {
      national: "",
      first_name: "",
      last_name: "",
      address: "",
      email: "",
      password: "",
      ponenumber: "",
      secu_pass: ""
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();

    const user = {
      national: this.state.national,
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      address: this.state.address,
      email: this.state.email,
      password: this.state.password,
      ponenumber: this.state.ponenumber,
      secu_pass: this.state.secu_pass
    };

    register(user).then(res => {
      if (res) {
        this.props.history.push(`../components/profile`);
      }
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const mail = {
      email: this.state.email
    };
    email(mail).then(res => {
      if (res) {
        this.props.history.push(`../components/profile`);
      }
    });
  }

  render() {
    return (
      <Layout>
        <div className="signup">
          <div id="sign">
            <img className="signimg" src="static/img/sixweekslogin.png" />
            <p>회원가입하는 사이트의 주소가 아래와 같은지 확인하세요</p>
            <p className="site">
              <img src="static/img/lock.png" />
              https://www.SIXWEEKS.com
            </p>
            <form onSubmit={this.onSubmit}>
              <div className="form-group row">
                <div className="col" className="name1">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="성"
                    name="first_name"
                    value={this.state.first_name}
                    onChange={this.onChange}
                  />
                </div>

                <div className="col" className="name2">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="이름"
                    name="last_name"
                    value={this.state.last_name}
                    onChange={this.onChange}
                  />
                </div>
              </div>
              <div className="form-group row">
                <div className="state">
                  <input
                    id="national"
                    className="form-control"
                    name="national"
                    placeholder="+국가번호"
                    value={this.state.national}
                    onChange={this.onChange}
                  />
                </div>
                <div className="tel">
                  <input
                    type="tel"
                    className="form-control"
                    id="tel"
                    placeholder="전화번호"
                    name="ponenumber"
                    value={this.state.ponenumber}
                    onChange={this.onChange}
                  />
                </div>
              </div>
              <div className="form-group row">
                <div className="col-sm-10" className="address">
                  <input
                    type="text"
                    className="form-control"
                    id="inputAddress"
                    placeholder="주소"
                    name="address"
                    value={this.state.address}
                    onChange={this.onChange}
                  />
                </div>
              </div>
              <div className="form-group row">
                <div className="col-sm-10" className="email">
                  <input
                    type="email"
                    className="form-control"
                    id="inputEmail4"
                    placeholder="이메일"
                    name="email"
                    value={this.state.email}
                    onChange={this.onChange}
                  />
                </div>
                <button
                  type="submit"
                  className="checkbtn"
                  name="email"
                  value={this.state.email}
                  handleSubmit={this.handleSubmit}
                >
                  인증하기
                </button>
              </div>
              <p
                style={{
                  fontSize: 11,
                  marginLeft: -310,
                  marginTop: -10,
                  color: "#2981e6"
                }}
              >
                * 이메일 인증을 받아야 사용이 가능합니다. 정확히 입력해 주세요.
              </p>
              <div className="form-group row">
                <div className="col-sm-10" className="pw">
                  <input
                    type="password"
                    className="form-control"
                    id="inputPassword"
                    placeholder="비밀번호"
                    name="password"
                    value={this.state.password}
                    onChange={this.onChange}
                  />
                </div>
              </div>
              <div className="form-group row">
                <div className="col-sm-10" className="pw">
                  <input
                    type="password"
                    className="form-control"
                    id="inputPasswordcheck"
                    placeholder="비밀번호 확인"
                  />
                </div>
              </div>
              <div className="form-group row">
                <div className="col-sm-10" className="pw">
                  <input
                    type="password"
                    className="form-control"
                    id="secu_pass"
                    placeholder="보안 비밀번호"
                    name="secu_pass"
                    value={this.state.secu_pass}
                    onChange={this.onChange}
                  />
                </div>
              </div>
              <div className="form-group row">
                <div className="col-sm-10" className="pw">
                  <input
                    type="password"
                    className="form-control"
                    id="inputsecuPasswordcheck"
                    placeholder="보안 비밀번호 확인"
                  />
                </div>
              </div>
              <div className="col-auto my-1">
                <div className="custom-control custom-checkbox mr-sm-2">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="customControlAutosizing"
                  />
                  <label
                    className="custom-control-label"
                    id="agree"
                    htmlFor="customControlAutosizing"
                  >
                    이 계정을 만드는 것에 동의합니다.
                  </label>
                </div>

                <button type="submit" className="signupbtn">
                  Sign up
                </button>
                <div>
                  <p>
                    이미 계정이 있습니까? <a href="#">로그인</a>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </Layout>
    );
  }
}
export default Signup;
