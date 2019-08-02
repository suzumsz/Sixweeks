import React from "react";
import Layout from "../components/layout";
import { register } from "../components/userFunction";
import profile from "../components/profile";

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
        this.props.history.push(`/profile`);
      }
    });
  }

  render() {
    return (
      <Layout>
        <div className="signup">
          <div id="sign">
            <img className="signimg" src="static/img/sixweekslogin.png" />
            <p>로그인하는 사이트의 주소가 아래와 같은지 확인하세요</p>
            <p className="site">
              <img src="static/img/lock.png" />
              https://www.SIXWEEKS.com
            </p>
            <form onSubmit={this.onSubmit}>
              <div className="form-group row">
                <div className="col" id="name">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="성"
                    name="first_name"
                    value={this.state.first_name}
                    onChange={this.onChange}
                  />
                </div>

                <div className="col" id="name">
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
                <div>
                  <label className="col">전화번호</label>
                </div>
                <div className="state">
                  <input
                    id="national"
                    className="form-control"
                    name="national"
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
                <div>
                  <label htmlFor="inputAddress" />
                </div>
                <div className="col-sm-10">
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
                <div>
                  <label htmlFor="inputEmail4" className="col-sm-2 col-form-label" />
                </div>
                <div className="col-sm-10">
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
                <button>인증하기</button>
              </div>
              <div className="form-group row">
                <label htmlFor="inputPassword" className="col-sm-2 col-form-label" />
                <div className="col-sm-10">
                  <input
                    type="password"
                    className="form-control"
                    id="inputPassword"
                    placeholder="비밀번호"
                    name="Password"
                    value={this.state.Password}
                    onChange={this.onChange}
                  />
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="inputPassword" className="col-sm-2 col-form-label" />
                <div className="col-sm-10">
                  <input
                    type="password"
                    className="form-control"
                    id="inputPasswordcheck"
                    placeholder="비밀번호 확인"
                  />
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="secu_pass" className="col-sm-2 col-form-label" />
                <div className="col-sm-10">
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
                <label htmlFor="inputPassword" className="col-sm-2 col-form-label" />
                <div className="col-sm-10">
                  <input
                    type="password"
                    className="form-control"
                    id="inputsecuPasswordcheck"
                    placeholder="보안 비밀번호 확인"
                  />
                </div>
              </div>
              <div className="form-group">
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" id="gridCheck" />
                  <label className="form-check-label" htmlFor="gridCheck">
                    이 계정을 만드는 것에 동의합니다.
                  </label>
                </div>

                <button type="submit" class="btn btn-primary">
                  Sign up
                </button>
                <div>
                  이미 계정이 있습니까? <a href="#">로그인</a>
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
