import React, { useState , useEffect,  } from "react";
import { Form, Modal, Select, Table, message } from "antd";
import Layout from "../components/Layout/Layout";
import axios from "axios";
import Spin from "../components/Spin"

const HomePage = () => {
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [getAllTransection, setGetAllTransection] = useState([])

  // table data
  const columns = [
    {
      title:'Date',
      dataIndex:'date'
    },
    {
      title:'Amount',
      dataIndex:'amount'
    },
    {
      title:'Type',
      dataIndex:'type'
    },
    {
      title:'Category',
      dataIndex:'category'
    },
    {
      title:'Refrence',
      dataIndex:'refrence'
    },
    {
      title:'Actions',
    },
  ]


  // getall Transection
  const getAllTransactions = async () => {
    try {
      const user = JSON.parse(localStorage.getItem('user'));
      setLoading(true)
      await axios.post('/transections/get-transection',{userid:user._id})
      setLoading(false)
      setGetAllTransection(res.data)
      console.log(res.data);
    } catch (error) {
      console.log(error);
      message.error("Ftech Issue With Trancton")
    }
  };

  // useEffect Hook
  useEffect(() => {
    getAllTransactions(); 
  }, [])

  // form handling
  const handleSubmit = async (value) => {
    try {
      const user = JSON.parse(localStorage.getItem('user'))
      setLoading(true)
      await axios.post('/transections/add-transection', {...values,userid:user.id})
      setLoading(false)
      message("Transection Added Successfully")
      setShowModal(false)
    } catch (error) {
      setLoading(false)
      message.error("Faild to add transection")
    }
  };

  return (
    <>
      <Layout>
      {loading && <Spin/>}
        <div className="filters"></div>
        <div>rangefilters</div>
        <div>
          <button
            className="btn btn-primary"
            onClick={() => setShowModal(true)}
          >
            Add new
          </button>
        </div>
        <div className="content">
          <Table columns={colums} dataSource={allTransection}/>
        </div>
        <Modal
          title="Add Transection"
          open={showModal}
          onCancel={() => setShowModal(false)}
          footer={false}
        >
          <Form layout="vertical" onFinish={handleSubmit}>
            <Form.Item label="Amount" name="amount">
              <Input type="text" />
            </Form.Item>

            <Form.Item label="type" name="type">
              <Select>
                <Select.Option value="income">Income</Select.Option>
                <Select.Option value="expense">Expense</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item label="Category" name="category">
              <Select>
                <Select.Option value="salary">Salary</Select.Option>
                <Select.Option value="tip">Tip</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item label="Date">
              <Input type="date" />
            </Form.Item>
            <Form.Item label="Refrence" name="refrence">
              <Input type="text" />
            </Form.Item>
            <Form.Item label="Description" name="description">
              <Input type="text" />
            </Form.Item>

            <div className="d-flex justify-content-end">
              <butto type="submit" className="btn btn-primary">
                SAVE
              </butto>
            </div>
          </Form>
        </Modal>
      </Layout>
    </>
  );
};

export default HomePage;
