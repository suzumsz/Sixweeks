import React from "react";
import Layout from "../components/layout";

class Login extends React.Component {
  render() {
    return (
      <Layout>
        <h1>SIXWEEKS</h1>
        <p>회원가입하는 사이트의 주소가 아래와 같은지 확인하세요</p>
        <p>이메일 </p>
        <form>
          <div class="form-group col-md-6">
            <label for="inputEmail4">Email</label>
            <input type="email" class="form-control" id="inputEmail4" placeholder="이메일" />
          </div>
          <div class="form-group col-md-6">
            <label for="inputPassword4">Password</label>
            <input
              type="password"
              class="form-control"
              id="inputPassword4"
              placeholder="Password"
            />
          </div>
          <div class="form-group">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="gridCheck" />
              <label class="form-check-label" for="gridCheck">
                비밀번호저장
              </label>
              <label class="form-check-label">아이디/비밀번호 찾기</label>
            </div>
          </div>
          <button type="submit" class="btn btn-primary">
            Login
          </button>
          <button type="submit" class="btn btn-primary">
            Sign up
          </button>
        </form>
      </Layout>
    );
  }
}
export default Login;
