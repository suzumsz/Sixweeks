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
<<<<<<< HEAD
        <h1>SIXWEEKS</h1>
        <p>회원가입하는 사이트의 주소가 아래와 같은지 확인하세요</p>
        <p className="site">https://www.SIXWEEKS.com</p>
        <form onSubmit={this.onSubmit}>
          <div className="form-group row">
            <div>
              <label className="col">성</label>
            </div>
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="First name"
                name="first_name"
                value={this.state.first_name}
                onChange={this.onChange}
              />
            </div>
            <div>
              <label className="col">이름</label>
            </div>
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Last name"
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
              <label htmlFor="inputAddress">주소</label>
            </div>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="inputAddress"
                placeholder="1234 Main St"
                name="address"
                value={this.state.address}
                onChange={this.onChange}
              />
            </div>
          </div>
          <div className="form-group row">
            <div>
              <label htmlFor="inputEmail4" className="col-sm-2 col-form-label">
                email
              </label>
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
            <label htmlFor="inputPassword" className="col-sm-2 col-form-label">
              비밀번호
            </label>
            <div className="col-sm-10">
              <input
                type="password"
                className="form-control"
                id="inputPassword"
                placeholder="Password"
                name="Password"
                value={this.state.Password}
                onChange={this.onChange}
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="inputPassword" className="col-sm-2 col-form-label">
              비밀번호확인
            </label>
            <div className="col-sm-10">
              <input
                type="password"
                className="form-control"
                id="inputPasswordcheck"
                placeholder="Password"
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="secu_pass" className="col-sm-2 col-form-label">
              보안비밀번호
            </label>
            <div className="col-sm-10">
              <input
                type="password"
                className="form-control"
                id="secu_pass"
                placeholder="Password"
                name="secu_pass"
                value={this.state.secu_pass}
                onChange={this.onChange}
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="inputPassword" className="col-sm-2 col-form-label">
              보안비밀번호확인
            </label>
            <div className="col-sm-10">
              <input
                type="password"
                className="form-control"
                id="inputsecuPasswordcheck"
                placeholder="Password"
              />
            </div>
          </div>
          <div className="form-group">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="gridCheck" />
              <label className="form-check-label" htmlFor="gridCheck">
                이 계정을 만드는 것에 동의합니다.
=======
        <div id="sign">
          <img className="signimg" src="static/img/sixweekslogin.png" />
          <p>로그인하는 사이트의 주소가 아래와 같은지 확인하세요</p>
          <p className="site">
            <img src="static/img/lock.png" />
            https://www.SIXWEEKS.com
          </p>
          <form
            action="http://ec2-13-125-250-20.ap-northeast-2.compute.amazonaws.com/signup"
            method="post"
          >
            <div class="form-group row">
              <div>
                <label class="col">성</label>
              </div>
              <div class="col">
                <input type="text" class="form-control" placeholder="First name" />
              </div>
              <div>
                <label class="col">이름</label>
              </div>
              <div class="col">
                <input type="text" class="form-control" placeholder="Last name" />
              </div>
            </div>
            <div class="form-group row">
              <div>
                <label class="col">전화번호</label>
              </div>
              <div class="state">
                <select id="inputState" class="form-control">
                  <option selected>국가</option>
                  <option>KOREA +82</option>
                  <option>CHINA +86</option>
                  <option>USA +1</option>
                  <option>JAPAN +81</option>
                  <option>RUSSIA +7</option>
                </select>
              </div>
              <div class="tel">
                <input type="tel" class="form-control" id="" placeholder="전화번호" />
              </div>
            </div>
            <div class="form-group row">
              <div>
                <label for="inputAddress">주소</label>
              </div>
              <div class="col-sm-10">
                <input
                  type="text"
                  class="form-control"
                  id="inputAddress"
                  placeholder="1234 Main St"
                />
              </div>
            </div>
            <div class="form-group row">
              <div>
                <label for="inputEmail4" class="col-sm-2 col-form-label">
                  email
                </label>
              </div>
              <div class="col-sm-10">
                <input type="email" class="form-control" id="inputEmail4" placeholder="이메일" />
              </div>
              <button>인증하기</button>
            </div>
            <div class="form-group row">
              <label for="inputPassword" class="col-sm-2 col-form-label">
                비밀번호
              </label>
              <div class="col-sm-10">
                <input
                  type="password"
                  class="form-control"
                  id="inputPassword"
                  placeholder="Password"
                />
              </div>
            </div>
            <div class="form-group row">
              <label for="inputPassword" class="col-sm-2 col-form-label">
                비밀번호확인
              </label>
              <div class="col-sm-10">
                <input
                  type="password"
                  class="form-control"
                  id="inputPassword"
                  placeholder="Password"
                />
              </div>
            </div>
            <div class="form-group row">
              <label for="inputPassword" class="col-sm-2 col-form-label">
                보안비밀번호
>>>>>>> 4dffc1db6f4431cba0c6e68b89f7f9878f3a7c27
              </label>
              <div class="col-sm-10">
                <input
                  type="password"
                  class="form-control"
                  id="inputPassword"
                  placeholder="Password"
                />
              </div>
            </div>
            <div class="form-group row">
              <label for="inputPassword" class="col-sm-2 col-form-label">
                보안비밀번호확인
              </label>
              <div class="col-sm-10">
                <input
                  type="password"
                  class="form-control"
                  id="inputPassword"
                  placeholder="Password"
                />
              </div>
            </div>
            <div class="form-group">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" id="gridCheck" />
                <label class="form-check-label" for="gridCheck">
                  이 계정을 만드는 것에 동의합니다.
                </label>
              </div>
            </div>
            <button type="submit" class="btn btn-primary">
              Sign up
            </button>
            <div>
              이미 계정이 있습니까? <a href="#">로그인</a>
            </div>
<<<<<<< HEAD
          </div>
          <button type="submit" className="btn btn-primary" path="/profile">
            Sign up
          </button>
          <div>
            이미 계정이 있습니까? <a href="#">로그인</a>
          </div>
        </form>
=======
          </form>
        </div>
>>>>>>> 4dffc1db6f4431cba0c6e68b89f7f9878f3a7c27
      </Layout>
    );
  }
}
export default Signup;
