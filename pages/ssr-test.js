import Link from "next/link";
import Layout from "../components/layout";
import axios from "axios";
import Head from "next/head";

//여기에 빗썸 데이터 넣어서 출력할거임
class SSRTest extends React.Component {
  static async getInitialProps({ req }) {
    const response = await axios.get(
      "http://ec2-13-125-250-20.ap-northeast-2.compute.amazonaws.com/show"
    );
    return {
      users: response.data
    };
  }

  render() {
    const { users } = this.props;

    const userList = users.map(user => <li key={user.number}>{user.name}</li>);

    return (
      <Layout>
        <ul>{userList}</ul>
      </Layout>
    );
  }
}

export default SSRTest;
