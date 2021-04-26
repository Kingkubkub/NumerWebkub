import React from 'react';
import { Input } from 'antd';
import { Button } from 'antd';
import '../App.css';
import { calBisection } from '../Math/Math';
import { re } from 'mathjs';


class Bisection extends React.Component {

    state = {
        Equation: '2.0',
        XL: '1.5',
        XR: '2.0',
        E: '0.000001',
        re: [],
        rel: []

    };

    getEquation = e => {
        this.setState({
            Equation: e.target.value,
        })

    }

    getXL = e => {
        this.setState({
            XL: e.target.value,
        })
    }

    getXR = e => {
        this.setState({
            XR: e.target.value,
        })
    }

    getEro = e => {
        this.setState({
            E: e.target.value,
        })
    }

    Show = e => {

        this.setState(

            { re: calBisection(this.state.Equation, this.state.XL, this.state.XR, this.state.E) }

        );


    }

    render() {


        return (

            <div >
                <div className="bg">
                    <div>
                        <h1 className="cho">BISECTION</h1>
                    </div>
                    <div className="bg2">
                        Equation: <Input onChange={this.getEquation} /><br />
                        <label className="label1">XL:</label>      <Input onChange={this.getXL} />
                XR: <Input onChange={this.getXR} /><br />
                        <label className="label2">ERROR:</label> <Input onChange={this.getEro} /><br />
                        <Button type="primary" onClick={this.Show} className="set">Calculate</Button>
                    </div>
                </div ><br />
                <div className="iteration">

                    <h1 className="h1x">ANSWEAR</h1>
                    {this.state.re[this.state.re.length-1]}
                </div>
                <div className="iteration">
                    <h1 className="h1x">ITERATION</h1>
                    {this.state.re}

                </div>

            </div>
        );
    }
}
export default Bisection;