import React from 'react';
import { Input } from 'antd';
import '../App.css';
import { Button } from 'antd';
import { calOnepoint } from '../Math/Math';


class Onepoint extends React.Component {
    state = {
        Equation: 'x^4-13',
        X: '1.5',
        E: '0.000001',
        re: []
    };

    getEquation = e => {
        this.setState({
            Equation: e.target.value,
        })

    }

    getX = e => {
        this.setState({
            X: e.target.value,
        })
    }


    getEro = e => {
        this.setState({
            E: e.target.value,
        })
    }

    Show = e => {
        this.setState(
            { re: calOnepoint(this.state.Equation, this.state.X, this.state.E) }
        );
    }
    render() {

        return (

            <div>
                <div className="bg">
                    <div>
                        <h1 className="cho">ONE POINT</h1>
                    </div>
                    <div className="bg2">
                        Equation: <Input onChange={this.getEquation} /><br />
                        <label className="label1">XL: </label><Input onChange={this.getX} /><br />
                        <label className="label2">ERROR: </label><Input onChange={this.getEro} /><br />
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
export default Onepoint;