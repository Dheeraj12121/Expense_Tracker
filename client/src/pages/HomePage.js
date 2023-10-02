import React, { useState } from "react";
import { Form, Modal, Select } from "antd";
import Layout from "../components/Layout/Layout";

const HomePage = () => {
  const [showModal, setShowModal] = useState(false);

  // form handling
  const handleSubmit = (value) => {
    console.log(value);
  };

  return (
    <>
      <Layout>
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
        <div className="content"></div>
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
