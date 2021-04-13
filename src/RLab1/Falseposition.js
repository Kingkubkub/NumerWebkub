import React from 'react';
import { Input } from 'antd';
import '../App.css';
import { Button } from 'antd';

class Falseposition extends React.Component{
    render(){

        return(

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
          
        </div>

        );
    }
}
export default Falseposition;