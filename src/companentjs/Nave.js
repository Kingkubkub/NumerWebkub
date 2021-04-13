import React from 'react';
import '../App.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import { Route } from "react-router-dom";
import { HashRouter } from 'react-router-dom';
import { Link, Redirect } from "react-router-dom"; import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import Bisection from '../RLab1/Bisection';
import Falseposition from '../RLab1/Falseposition';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;


class Nave extends React.Component {
    render() {
        return (
            <HashRouter>
                <Layout>
                    <Header className="header">
                        <div className="logo" />
                        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                           
                        </Menu>
                    </Header>
                    <Layout>
                        <Sider width={200} className="site-layout-background">
                            <Menu
                                mode="inline"
                                defaultSelectedKeys={['1']}
                                defaultOpenKeys={['sub1']}
                                style={{ height: '100%', borderRight: 0 }}
                            >
                                <SubMenu key="sub1" title="ROOT OF EQUATION">
                                    <Menu.Item key="1"><Link to = '/Bisection'>Bisection</Link> </Menu.Item>
                                    <Menu.Item key="2"><Link to = '/Falseposition'>Falseposition</Link></Menu.Item>
                                    <Menu.Item key="3">option3</Menu.Item>
                                    <Menu.Item key="4">option4</Menu.Item>
                                </SubMenu>
                                <SubMenu key="sub2"  title="subnav 2">
                                    <Menu.Item key="5">option5</Menu.Item>
                                    <Menu.Item key="6">option6</Menu.Item>
                                    <Menu.Item key="7">option7</Menu.Item>
                                    <Menu.Item key="8">option8</Menu.Item>
                                </SubMenu>
                                <SubMenu key="sub3"title="subnav 3">
                                    <Menu.Item key="9">option9</Menu.Item>
                                    <Menu.Item key="10">option10</Menu.Item>
                                    <Menu.Item key="11">option11</Menu.Item>
                                    <Menu.Item key="12">option12</Menu.Item>
                                </SubMenu>
                            </Menu>
                        </Sider>
                        <Layout style={{ padding: '0 24px 24px' }}>
    
                            <Content
                                className="site-layout-background"
                                style={{
                                    padding: 24,
                                    margin: 0,
                                    minHeight: 1080,
                                }}
                            >
                               <Route path='/Bisection' component={Bisection}></Route>
                               <Route path='/Falseposition' component={Falseposition}></Route>

                            </Content>
                        </Layout>
                    </Layout>
                </Layout>

            </HashRouter>

        );
    }
}

export default Nave;