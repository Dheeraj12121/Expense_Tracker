import React, { useEffect, useState } from "react";
import { Form, Input, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Spinner from "../components/Spin";

const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const submitHandler = async (values) => {

    try {
      setLoading(true)
     const {data} = await axios.post('/users/login',values)
     setLoading(false)
      message.success('login success')
      localStorage.setItem('user', JSON.stringify({...data.user,password:''}))
      navigate('/')
    } catch (error) {
      setLoading(false)
      message.error("Something went wrong")
    }

  };

  // prevent for login user

  useEffect(() =>{
    if(localStorage.getItem('user')){
      navigate('/');
    }
  },[])
  return (
    <div>
    {loading && <Spinner/>}
      <div className="register-page">
        <Form layout="vertical" onFinish={submitHandler}>
          <h1>Login Form</h1>
          <Form.Item label="Email" name="email">
            <Input type="email" />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input type="password" />
          </Form.Item>
          <div className="d-flex justify-content-between">
            <Link to={"/register"}>Not a user ? Cleck Here to login</Link>
            <button className="btn btn-primary">Login User</button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Login;
