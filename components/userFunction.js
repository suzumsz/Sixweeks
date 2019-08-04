import axios from "axios";

export const register = newUser => {
  return axios
    .post("http://ec2-13-125-250-20.ap-northeast-2.compute.amazonaws.com/user/register", {
      national: newUser.national,
      first_name: newUser.first_name,
      last_name: newUser.last_name,
      address: newUser.address,
      email: newUser.email,
      password: newUser.password,
      ponenumber: newUser.ponenumber,
      secu_pass: newUser.secu_pass
    })
    .then(res => {
      console.log(res);
    });
};

export const login = user => {
  return axios
    .post("http://ec2-13-125-250-20.ap-northeast-2.compute.amazonaws.com/user/login", {
      email: user.email,
      password: user.password
    })
    .then(res => {
      console.log("login!!");
      localStorage.setItem("usertoken", res.data);
      return res.data;
    })
    .catch(err => {
      console.log(err);
    });
};

export const write = note => {
  return axios
    .post("http://ec2-13-125-250-20.ap-northeast-2.compute.amazonaws.com/write", {
      title: note.title,
      name: note.name,
      content: note.content
    })
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err);
    });
};
