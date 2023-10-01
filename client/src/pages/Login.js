import React from 'react'
import { Form, Input } from "antd";
import { Link } from "react-router-dom";

const submitHandler = (values) =>{
    console.log(values);
}
const Login = () => {
  return (
    <div>
    <div className="register-page">
        <Form layout="vertical" onFinish={submitHandler}>
          <h1>Login Form</h1>
          <Form.Item label="Email" name="email">
            <Input type='email' />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input type="password" />
          </Form.Item>
          <div className="d-flex justify-content-between">
            <Link to={'/register'}>Not a user ? Cleck Here to login</Link>
            <button className='btn btn-primary'>Login User</button>
          </div>
        </Form>
      </div>
    </div>
  )
}

export default Login