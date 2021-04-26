import React from 'react';
import '../App.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import { Route } from "react-router-dom";
import { HashRouter } from 'react-router-dom';
import { Link, Redirect } from "react-router-dom"; import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import Bisection from '../Rootofequation/Bisection';
import Falseposition from '../Rootofequation/Falseposition';
import Newton from '../Rootofequation/Newton';
import Onepoint from '../Rootofequation/Onepoint';
import Secant from '../Rootofequation/Secant';
import CarmerRule from '../Maxtic/CarmerRule';
import GaussElimination from '../Maxtic/GaussElimination';
import GaussJordan from '../Maxtic/GaussJordan';
import JacobiIteration from '../Maxtic/JacobiIteration';
import LUDecompositionMethod from '../Maxtic/LUDecompositionMethod';
import GaussSeidel from '../Maxtic/GaussSeidel';
import ConjugateGradient from '../Maxtic/ConjugateGradient';
import Lagrange from '../INTHERPOLATION/Lagrange'
import NewtonDivided from '../INTHERPOLATION/NewtonDivided';
import Spline from '../INTHERPOLATION/Spline';
import LinearRegression from '../Regression/LinearRegression';
import PolynomialRegression from '../Regression/PolynomialRegression';
import MultiLinearRegression from '../Regression/MultiLinearRegression';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;


class Nave extends React.Component {
    render() {
        return (
            <HashRouter>
               
                <Layout>
                    <Header className="header">
                    
                        <h1 className="M"> NUMERICAL METHODS </h1>
                        <div className="logo" />
                        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                           
                        </Menu>
                    </Header>
                    <Layout>
                        <Sider width={300} className="siterx">
                            <Menu
                                mode="inline"
                                defaultSelectedKeys={['1']}
                                defaultOpenKeys={['sub1']}
                                style={{ height: '100%', borderRight: 0 }}
                            >
                                <SubMenu key="sub1" title="ROOT OF EQUATION">
                                    <Menu.Item key="1"><Link to = '/Bisection'>Bisection</Link> </Menu.Item>
                                    <Menu.Item key="2"><Link to = '/Falseposition'>Falseposition</Link></Menu.Item>
                                    <Menu.Item key="3"><Link to = '/Newton'>Newton</Link></Menu.Item>
                                    <Menu.Item key="4"><Link to = '/Onepoint'>Onepoint</Link></Menu.Item>
                                    <Menu.Item key="5"><Link to = '/Secant'>Secant</Link></Menu.Item>
                                    
                                </SubMenu>
                                <SubMenu key="sub2"  title="SOLUTION TECHNIQUES">
                                    <Menu.Item key="6"><Link to = '/CarmerRule'>Carmer's Rule</Link></Menu.Item>
                                    <Menu.Item key="7"><Link to = '/GaussElimination'>Gauss Elimination Method</Link></Menu.Item>
                                    <Menu.Item key="8"><Link to = '/GaussJordan'>Gauss Jordan Method</Link></Menu.Item>
                                    <Menu.Item key="12"><Link to = '/LUDecompositionMethod'>LU Decomposition Method</Link></Menu.Item>
                                    <Menu.Item key="9"><Link to = '/JacobiIteration'>Jacobi Iteration Method</Link></Menu.Item>
                                    <Menu.Item key="10"><Link to = '/GaussSeidel'>Gauss-Seidel Iteration Method</Link></Menu.Item>
                                    <Menu.Item key="11"><Link to = '/ConjugateGradient'>Conjugate Gradient Method</Link></Menu.Item>
                                    
                                </SubMenu>
                                <SubMenu key="sub3"title="INTHERPOLATION">
                                    <Menu.Item key="13"><Link to = '/NewtonDivided'>Newton's Divided-differences</Link></Menu.Item>
                                    <Menu.Item key="14"><Link to = '/Lagrange'>Lagrange Polynomials</Link></Menu.Item>
                                    <Menu.Item key="15"><Link to = '/Spline'>Spline inttherpolation</Link></Menu.Item>
                                </SubMenu>
                                <SubMenu key="sub4"title="REGRESSION">
                                    <Menu.Item key="16"><Link to = '/LinearRegression'>LinerRegression</Link></Menu.Item>
                                    <Menu.Item key="17"><Link to = '/PolynomialRegression'>PolynomialRegression</Link></Menu.Item>
                                    <Menu.Item key="18"><Link to = '/MultiLinearRegression'>MultiLinearRegression</Link></Menu.Item>
                                    
                                </SubMenu>
                            </Menu>
                        </Sider>
                        <Layout style={{ padding: '0 24px 24px' }}>
    
                            <Content
                                className="site-layout-background"
                                style={{
                                    padding: 30,
                                    margin: 20,
                                    marginLeft:20,
                                    minHeight: 1211,
                                    borderRadius: 10,
                                

                                }}
                            >
                               <Route path='/Bisection' component={Bisection}></Route>
                               <Route path='/Falseposition' component={Falseposition}></Route>
                               <Route path='/Newton' component={Newton}></Route>
                               <Route path='/Onepoint' component={Onepoint}></Route>
                               <Route path='/Secant' component={Secant}></Route>
                               <Route path='/CarmerRule' component={CarmerRule}></Route>
                               <Route path='/GaussElimination' component={GaussElimination}></Route>
                               <Route path='/GaussJordan' component={GaussJordan}></Route>
                               <Route path='/JacobiIteration' component={JacobiIteration}></Route>
                               <Route path='/LUDecompositionMethod' component={LUDecompositionMethod} ></Route>
                               <Route path='/GaussSeidel' component={GaussSeidel}></Route>
                               <Route path='/ConjugateGradient' component={ConjugateGradient}></Route>
                               <Route path='/Lagrange' component={Lagrange}></Route>
                               <Route path="/Spline" component={Spline}></Route>
                               <Route path="/NewtonDivided" component={NewtonDivided}></Route>
                               <Route path="/LinearRegression" component={LinearRegression}></Route>
                               <Route path="/PolynomialRegression" component={PolynomialRegression}></Route>
                               <Route path="/MultiLinearRegression" component={MultiLinearRegression}></Route>
                               

                               
                            </Content>
                        </Layout>
                    </Layout>
                </Layout>
              

            </HashRouter>

        );
    }
}

export default Nave;