import React from 'react';
import { Layout, Form, Row, Col, Select, Input, Button, Icon, DatePicker, Table, Modal, message,Checkbox } from 'antd';
import '../jcsz.css';
class Jcsz extends React.Component {
  
  render() {
    const { getFieldDecorator } = this.props.form;
    const handleSubmit = e => {
      e.preventDefault();
      this.props.form.validateFieldsAndScroll((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
    };
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 6 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 18 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 6,
        },
        sm: {
          span: 16,
          offset: 6,
        },
      },
    };
    return (
      <div className="bg-jcsz">
        <h2>基本信息</h2>
      <Form {...formItemLayout} onSubmit={this.handleSubmit}>
        <Form.Item label="公司名称">
          {getFieldDecorator('companyname', {
            rules: [{ required: true, message: 'Please input your nickname!', whitespace: false }],
          })(<Input />)}
        </Form.Item>
        <Form.Item label="税号">
          {getFieldDecorator('taxnumber', {
            rules: [{ required: true, message: 'Please input your nickname!', whitespace: true }],
          })(<Input />)}
        </Form.Item>
        <Form.Item label="会计制度">
          {getFieldDecorator('aa', {
            rules: [{ required: true, message: 'Please input your nickname!', whitespace: true }],
          })(<Select><Select.Option value="lucy">lucy</Select.Option></Select>)}
        </Form.Item>
        <Form.Item label="纳税类型">
          {getFieldDecorator('bb', {
            rules: [{ required: true, message: 'Please input your nickname!', whitespace: true }],
          })(<Select><Select.Option value="lucy">lucy</Select.Option></Select>)}
        </Form.Item>
        <Form.Item label="科目编号长度">
          {getFieldDecorator('bb', {
            rules: [{ required: true, message: 'Please input your nickname!', whitespace: true }],
          })(<Input />)}
        </Form.Item>
        <Form.Item label="科目层级">
          {getFieldDecorator('cc', {
            rules: [{ required: true, message: 'Please input your nickname!', whitespace: true }],
          })(<Input />)}
        </Form.Item>
        <h2>凭证生成</h2>
        <Form.Item {...tailFormItemLayout}>
          {getFieldDecorator('agreement', {
            valuePropName: 'checked',
          })(
            <Checkbox>
              按明细生成
            </Checkbox>,
          )}
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            保存
          </Button>
        </Form.Item>
      </Form>
      </div>
    )
  }
}
const WrappedJcsz = Form.create({ name: 'abc' })(Jcsz);
export default WrappedJcsz;