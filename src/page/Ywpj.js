import React from 'react';
import { Layout, Form, Row, Col, Select, Input, Button, Icon, DatePicker, Table, Modal, message } from 'antd';
import '../ywpj.css';
import fp from '../img/fp.jpg';
const { Header, Content, Sider } = Layout;
const { MonthPicker } = DatePicker;
const { Option, OptGroup } = Select;
class Tblist extends React.Component {
  render() {
    const expandedRowRender = () => {
      const columns = [
        { title: 'Date', dataIndex: 'date', key: 'date' },
        { title: 'Name', dataIndex: 'name', key: 'name' },
        { title: 'Upgrade Status', dataIndex: 'upgradeNum', key: 'upgradeNum' }
      ];

      const data = [];
      for (let i = 0; i < 3; ++i) {
        data.push({
          key: i,
          date: '2014-12-24 23:12:00',
          name: 'This is production name',
          upgradeNum: 'Upgraded: 56',
        });
      }
      return <Table columns={columns} dataSource={data} pagination={false} />;
    };
    const data = [
      { key: 1, rownumber: 1, img: "123", id: '12312312' },
      { key: 2, rownumber: 1, img: "123", id: '12312312' }
    ];
    const columns = [
      { title: '行次', dataIndex: 'rownumber' },
      { title: '影像', dataIndex: 'img' },
      { title: '单据编号', dataIndex: 'id' },
      { title: '票据种类', dataIndex: 'type' },
      { title: '匹配记账类型', dataIndex: 'matetype' },
      { title: '确认记账类型', dataIndex: 'confirmtype' },
      { title: '往来单位', dataIndex: 'contact' },
      { title: '开票日期', dataIndex: 'invoicedate' },
      { title: '价税合计', dataIndex: 'price' },
      { title: '关联凭证', dataIndex: 'relevance' },
      { title: '记账状态', dataIndex: 'status' },
    ];
    const rowSelection = {
    };
    return (
      <Table rowSelection={rowSelection} dataSource={data} columns={columns} expandedRowRender={expandedRowRender} expandRowByClick={true} />
    )
  }
}

class Tishi1 extends React.Component {
  render() {
    return (
      <Modal
        title="票据细分"
        visible={this.props.zt}
        onOk={this.props.zt3}
        onCancel={this.props.zt2}
        maskClosable={false}
      >
        <p><Icon type="smile" style={{ fontSize: '50px', color: 'red' }} />{this.props.message}</p>
      </Modal>
    )
  }
}

class Tishi2 extends React.Component {
  render() {
    return (
      <Modal
        title="提示"
        width={1200}
        visible={this.props.zt}
        onOk={this.props.zt3}
        onCancel={this.props.zt2}
        maskClosable={false}
      >
        <Layout>
          <Sider className="sideimg" width={700}>
            <img src={fp} />
          </Sider>
          <Content style={{padding:'15px'}}>
            <Row className="line-row">
              <Select defaultValue="选择票据类型" style={{ width: '100%' }}>
                <OptGroup label="Manager">
                  <Option value="jack">Jack</Option>
                  <Option value="lucy">Lucy</Option>
                </OptGroup>
                <OptGroup label="Engineer">
                  <Option value="Yiminghe">yiminghe</Option>
                </OptGroup>
              </Select>
            </Row>
            <Row className="line-row" gutter={10}>
              <Col span={2}>
                <a href=""><Icon type="plus-square" /></a>
              </Col>
              <Col span={8}>
                <Select defaultValue="选择票据类型" style={{ width: '100%' }}>
                  <Option value="jack">Jack</Option>
                  <Option value="lucy">Lucy</Option>
                </Select>
              </Col>
              <Col span={6}>
                <Select defaultValue="选择票据类型" style={{ width: '100%' }}>
                  <Option value="jack">Jack</Option>
                  <Option value="lucy">Lucy</Option>
                </Select>
              </Col>
              <Col span={8}><Input placeholder="Basic usage" /></Col>
            </Row>
            
            <Row className="line-row">
              <Select defaultValue="选择票据类型" style={{ width: '100%' }}>
                <OptGroup label="Manager">
                  <Option value="jack">Jack</Option>
                  <Option value="lucy">Lucy</Option>
                </OptGroup>
                <OptGroup label="Engineer">
                  <Option value="Yiminghe">yiminghe</Option>
                </OptGroup>
              </Select>
            </Row>
            
            <Row className="line-row">
              <Input placeholder="Basic usage" />
            </Row>
          </Content>
        </Layout>
      </Modal>
    )
  }
}
class Toolbar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showModal: false,
      showxf:false,
      message: ''
    }
  }
  showModal1() {
    this.setState({
      showModal: true,
      message: '同步数据成功'
    })
  }
  showModal2() {
    this.setState({
      showModal: true,
      message: '一键匹配成功'
    })
  }
  showModal3() {
    this.setState({
      showxf: true
    })
  }
  handleOk = e => {
    this.setState({
      showModal: false,
    });
  };

  handleCancel = e => {
    this.setState({
      showModal: false,
    });
  };
  handleOk2 = e => {
    this.setState({
      showxf: false,
    });
  };

  handleCancel2 = e => {
    this.setState({
      showxf: false,
    });
  };
  render() {
    return (
      <Header style={{ background: '#fff', height: '60px', lineHeight: '60px', padding: '0 10px' }}>
        <Row gutter={16}>
          <Col span={3}>
            <MonthPicker placeholder="请选择期间" style={{ width: '100%' }} />
          </Col>
          <Col span={3}>
            <Select defaultValue="aa" style={{ width: '100%' }}>
              <Option value="aa">应付账款(专票)进项-库存商品</Option>
              <Option value="bb">应付账款</Option>
            </Select>
          </Col>
          <Col span={3}>
            <Select defaultValue="aa" style={{ width: '100%' }}>
              <Option value="aa">已记账</Option>
              <Option value="bb">未记账</Option>
            </Select>
          </Col>
          <Col span={3}>
            <Button type="primary" icon="search">
              搜索
              </Button>
          </Col>
          <Col span={12}>
            <div style={{ float: 'right' }}>
              <Button onClick={this.showModal1.bind(this)}>同步数据</Button>&nbsp;&nbsp;
              <Button onClick={this.showModal2.bind(this)}>一键匹配</Button>&nbsp;&nbsp;
              <Button onClick={this.showModal3.bind(this)}>票据细分</Button>
            </div>
          </Col>
        </Row>
        <Tishi1 zt={this.state.showModal} zt2={this.handleCancel.bind(this)} zt3={this.handleOk.bind(this)} message={this.state.message} />
        <Tishi2 zt={this.state.showxf} zt2={this.handleCancel2.bind(this)} zt3={this.handleOk2.bind(this)} />
      </Header>
    )
  }
}
class Ywpj extends React.Component {
  render() {
    return (
      <Layout style={{ height: '100%' }}>
        <Toolbar />
        <Content style={{ background: '#fff', padding: '10px', overflow: 'auto' }}>
          <Tblist />
        </Content>
      </Layout>
    )
  }
}

export default Ywpj;