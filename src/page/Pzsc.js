import React from 'react';
import { Layout, Tabs, Form, Row, Col, Select, Input, Button, Icon, DatePicker, Table, Modal, message, Dropdown, Menu } from 'antd';
const { Header, Content, Sider } = Layout;
const { MonthPicker } = DatePicker;
const { Option, OptGroup } = Select;
const { TabPane } = Tabs;
class Pipei extends React.Component {
  render() {
    const data = [
      { key: 1, rownumber: 1, img: "123", id: '12312312' },
      { key: 1, rownumber: 1, img: "123", id: '12312312' },
      { key: 1, rownumber: 1, img: "123", id: '12312312' },
      { key: 2, rownumber: 1, img: "123", id: '12312312' }
    ]
    const columns = [
      { title: '行次', dataIndex: 'rownumber' },
      { title: '影像', dataIndex: 'img' },
      { title: '单据编号', dataIndex: 'id' },
      { title: '票据种类', dataIndex: 'type' }
    ];
    return (
      <Modal title="历史匹配记录"
        visible={this.props.zt1}
        onOk={this.props.zt3}
        onCancel={this.props.zt2}
        maskClosable={false}
        width={1200}
      >
        <p>该列表数据是往来单位和货物名称全称匹配简称列表，用户可以自行修改/删除匹配关系，或重新匹配关系（黄色部分为疑似绑定错误）</p>
        <Tabs defaultActiveKey="1">
          <TabPane tab="客户" key="1">
            <Table dataSource={data} columns={columns} scroll={{ y: 240 }}/>
          </TabPane>
          <TabPane tab="供应商" key="2">
            <Table dataSource={data} columns={columns} scroll={{ y: 240 }}/>
          </TabPane>
          <TabPane tab="存货" key="3">
            <Table dataSource={data} columns={columns} scroll={{ y: 240 }}/>
          </TabPane>
        </Tabs>
      </Modal>
    )
  }
}


class Toolbar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showPP: false,
      showSC: false
    }
  }
  showPP() {
    this.setState({
      showPP: true
    });
  }
  clickok1() {
    this.setState({
      showPP: false
    });
  }
  clickchanel1() {
    this.setState({
      showPP: false
    });
  }
  render() {
    const menu = (
      <Menu>
        <Menu.Item key="0">
          <a href="#">凭证合并</a>
        </Menu.Item>
        <Menu.Item key="1">
          <a href="#">凭证整理</a>
        </Menu.Item>
        <Menu.Item key="2">
          <a href="#">打印</a>
        </Menu.Item>
        <Menu.Item key="3">
          <a href="#">导出</a>
        </Menu.Item>
      </Menu>
    );
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
              <Button onClick={this.showPP.bind(this)}>匹配</Button>&nbsp;&nbsp;
              <Button>凭证生成</Button>&nbsp;&nbsp;
              <Button type="primary">传输到金蝶</Button>&nbsp;&nbsp;
              <Dropdown overlay={menu} trigger={['click']}>
                <Button>更多操作<Icon type="down" /></Button>
              </Dropdown>
            </div>
          </Col>
        </Row>
        <Pipei zt1={this.state.showPP} zt2={this.clickchanel1.bind(this)} zt3={this.clickok1.bind(this)} />
      </Header>
    )
  }
}

class Tblist extends React.Component {
  render() {

    const data = [
      { key: 1, rownumber: 1, img: "123", id: '12312312' },
      { key: 2, rownumber: 1, img: "123", id: '12312312' }
    ];
    const columns = [
      { title: '行次', dataIndex: 'rownumber' },
      { title: '影像', dataIndex: 'img' },
      { title: '单据编号', dataIndex: 'id' },
      { title: '票据种类', dataIndex: 'type' },
      { title: '记账类型', dataIndex: 'confirmtype' },
      { title: '往来单位', dataIndex: 'contact' },
      { title: '开票日期', dataIndex: 'invoicedate' },
      { title: '价税合计', dataIndex: 'price' },
      { title: '关联凭证', dataIndex: 'relevance' },
      { title: '记账状态', dataIndex: 'status' },
    ];
    const rowSelection = {
    };
    return (
      <Table rowSelection={rowSelection} dataSource={data} columns={columns} />
    )
  }
}
class Pzsc extends React.Component {
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

export default Pzsc;