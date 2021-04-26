import React from 'react';
import { Input } from 'antd';
import '../App.css';
import { Button } from 'antd';
import { calSecant } from '../Math/Math';


class Secant extends React.Component {
    state = {
        Equation: 'x^4+13',
        X0: '2',
        X1: '3.0',
        E: '0.000001',
        re: '',
    };

    getEquation = e => {
        this.setState({
            Equation: e.target.value,
        })

    }

    getX0 = e => {
        this.setState({
            X0: e.target.value,
        })
    }
    getX1 = e => {
        this.setState({
            X1: e.target.value,
        })
    }


    getEro = e => {
        this.setState({
            E: e.target.value,
        })
    }

    Show = e => {
        this.setState(
            { re: calSecant(this.state.Equation, this.state.X0, this.state.X1, this.state.E) }
        );
    }
    render() {

        return (

            <div>
                <div className="bg">
                    <div>
                        <h1 className="cho">SECANT</h1>
                    </div>
                    <div className="bg2">
                        Equation: <Input onChange={this.getEquation} /><br />
                        <label className="label1">X0:</label><Input onChange={this.getX} />
                    X1: <Input onChange={this.getX} /><br />
                        <label className="label2">ERROR:</label> <Input onChange={this.getEro} /><br />
                        <Button type="primary" onClick={this.Show} className="set">Calculate</Button>
                    </div>
                </div ><br />
                <div className="iteration">

                    <h1 className="h1x">ANSWEAR</h1>
                    {this.state.re[this.state.re.length - 1]}
                </div>
                <div className="iteration">
                    <h1 className="h1x">ITERATION</h1>
                    {this.state.re}

                </div>
            </div>


        );
    }
}
export default Secant;