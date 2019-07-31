import Layout from "../components/layout";
import axios from "axios";

class NewBoard extends React.Component {
  static async getInitialProps({ req }) {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users");
    return {
      users: response.data
    };
  }

  render() {
    const { users } = this.props;

    const userList = users.map(user => (
      <li key={user.id}>
        {user.name}
        {user.email}
        {user.id}
      </li>
    ));

    return <Layout>{userList}</Layout>;
  }
}

export default NewBoard;
