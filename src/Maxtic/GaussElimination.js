import {Inputmaxtic,Inputmaxtic2} from './Inputmaxtic';
import {Col,Row,Button} from 'antd';
import React from 'react';
import { calElimination } from '../Math/Math';


class GaussEliminationMethod extends React.Component{
        state = {
            A: [[],[],[]],
            B: [],
            Re: '',
            n: 3
        }
    
        MaxticA = e => {
            let I = e.target.name.split(" ");
            this.state.A[parseInt(I[0])][parseInt(I[1])] = e.target.value;
        
        }
    
        MaxticB = e => {
            let I1 = e.target.name.split(" ");
            this.state.B[parseInt(I1[0])] = e.target.value;
    
        }
       
        Show = e => {
            this.setState(
    
                {Re: calElimination(this.state.n,this.state.A,this.state.B)}
    
            );
        }
        
        render() {
    
            return (
                <div>
                    <div className="car">
                        <h1 className="h">GAUSS ELIMINATION METHOD</h1>
                        <div className="car1">
                            <label>MaxticA</label>
    
                            <Inputmaxtic n={this.state.n} onChange={this.MaxticA} />
    
                            <label>MaxtcB</label>
    
                            <Inputmaxtic2 n={this.state.n} onChange={this.MaxticB} />
    
                        </div>
                        <div>
                            <Button type="primary" onClick={this.Show} className="set1">Calculate</Button>
                        </div>
                        <br />
                    </div><br/>
                    <div className="h1M">
                        <h1>ANSWEAR</h1>
                        {this.state.Re[this.state.Re.length-1]}
                       
                    </div>
                    <div className="h1M">
                        <h1 >ITERATION</h1>
                        {this.state.Re}
                    </div>
                </div>
    
            );
        }
    }

export default GaussEliminationMethod;
