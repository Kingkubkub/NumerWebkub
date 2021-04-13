import React from 'react';
import { Input } from 'antd';
import { Button } from 'antd';
import '../App.css';
import {calBisection} from '../KubKub/Mathkub'

class Bisection extends React.Component {

    state = {
        Equation:'x^4-13',
        XL: '1.5',
        XR: '2.0',
        E: '0.000001',
        re: ''
    };

    getEquation = e =>{
        this.setState({
            Equation: e.target.value,
        })

    }

    getXL = e =>{
        this.setState({
            XL: e.target.value,
        })
    }

    getXR = e =>{
        this.setState({
            XR: e.target.value,
        })
    }

    getEro = e =>{
        this.setState({
            E: e.target.value,
        })
    }

    Show = e =>{
        this.setState(
            {re: calBisection(this.state.Equation,this.state.XL,this.state.XR,this.state.E)}
        );
    }

    render() {


        return (

            <div>
                <div>
                    <div>
                        Bisection
                </div>
                Equation: <Input onChange={this.getEquation} />
                XL: <Input onChange={this.getXL} />
                XR: <Input onChange={this.getXR} />
                Error: <Input onChange={this.getEro} />
                    <Button type="primary" onClick={this.Show} className="set">Calculate</Button>
                </div>
               {this.state.re}
            </div>
        );
    }
}
export default Bisection;