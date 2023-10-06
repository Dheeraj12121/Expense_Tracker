import React, { useState, useEffect } from "react";
import { Form, Modal, Select, Table, message, DatePicker } from "antd";
import { UnorderedListOutlined, AreaChartOutlined } from "@ant-design/icons";
import Layout from "../components/Layout/Layout";
import axios, { all } from "axios";
import Spin from "../components/Spin";
import moment from "moment";
import { RangePicker } from " DatePicker";
import Analytics from "../components/Analytics";

const HomePage = () => {
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [allTransection, setAllTransection] = useState([]);
  const [frequency, setFrequency] = useState("7");
  const [selectedDate, setSelectedDate] = useState([]);
  const [type, setType] = useState("all");
  const [viewData, setViewData] = useState("table");

  // table data
  const columns = [
    {
      title: "Date",
      dataIndex: "date",
      render: (text) => <span>{moment(text).format("YYYY-MM-DD")}</span>,
    },
    {
      title: "Amount",
      dataIndex: "amount",
    },
    {
      title: "Type",
      dataIndex: "type",
    },
    {
      title: "Category",
      dataIndex: "category",
    },
    {
      title: "Refrence",
      dataIndex: "refrence",
    },
    {
      title: "Actions",
    },
  ];

  // getall Transection

  // useEffect Hook
  useEffect(() => {
    const getAllTransactions = async () => {
      try {
        const user = JSON.parse(localStorage.getItem("user"));
        setLoading(true);
        const res = await axios.post("/transections/get-transection", {
          userid: user._id,
          frequency,
          selectedDate,
          type,
        });
        setLoading(false);
        setAllTransection(res.data);
        console.log(res.data);
      } catch (error) {
        console.log(error);
        message.error("Ftech Issue With Trancton");
      }
    };
    getAllTransactions();
  }, [frequency, selectedDate, type]);

  // form handling
  const handleSubmit = async (value) => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      setLoading(true);
      await axios.post("/transections/add-transection", {
        ...values,
        userid: user.id,
      });
      setLoading(false);
      message("Transection Added Successfully");
      setShowModal(false);
    } catch (error) {
      setLoading(false);
      message.error("Faild to add transection");
    }
  };

  return (
    <>
      <Layout>
        {loading && <Spin />}
        <div className="filters"></div>
        <div>
          <h6>Select Frequency</h6>
          <Select value={frequency} onChange={(values) => setFrequency(values)}>
            <Select.Option value="7">Last 1 Week</Select.Option>
            <Select.Option value="30">Last 1 Month</Select.Option>
            <Select.Option value="365">Last 1 Year</Select.Option>
            <Select.Option value="custom">Custom</Select.Option>
          </Select>
          {frequency === "custom" && (
            <RangePicker
              value={selectedDate}
              onChange={(values) => setSelectedDate(values)}
            />
          )}
        </div>
        <div>
          <h6>Select Type</h6>
          <Select value={type} onChange={(values) => setType(values)}>
            <Select.Option value="all">ALL</Select.Option>
            <Select.Option value="income">INCOME</Select.Option>
            <Select.Option value="expense">EXPENSE</Select.Option>
          </Select>
          {frequency === "custom" && (
            <RangePicker
              value={selectedDate}
              onChange={(values) => setSelectedDate(values)}
            />
          )}
        </div>

        <div className="switch-icons">
          <UnorderedListOutlined
            className={`mx-2 ${
              viewData === "table" ? "active-icon" : "inactive-icon"
            }`}
            onClick={() => setViewData("table")}
          />
          <AreaChartOutlined
            className={`mx-2 ${
              viewData === "table" ? "active-icon" : "inactive-icon"
            }`}
            onClick={() => setViewData("analytics")}
          />
        </div>

        <div>
          <button
            className="btn btn-primary"
            onClick={() => setShowModal(true)}
          >
            Add new
          </button>
        </div>
        <div className="content">
        {viewData === 'table' ? <Table columns={colums} dataSource={allTransection} /> 
        : <Analytics allTransection={allTransection}/>  }
          
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
