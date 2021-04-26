import { Inputmaxtic } from './inputintherpolation';
import { Col, Row, Button,Input } from 'antd';
import React from 'react';
import { calLagrange } from '../Math/Math';


class Lagrange extends React.Component {

    state = {
        A: [[], []],
        Re: "",
        xS: '',
        point: [],
        n: 2
    }

    getxS = e =>{
        this.setState({

            xS: e.target.value
            
        });
    }

    getpoint = e =>{
        let index = []
        index = e.target.value
        this.setState
            (
                { point: index.split(",") }
            )
    }

    getNum = e => {

        if (this.state.n < 6) {

            let arr= this.state.A;
            arr.push([])
            this.setState(

                { n: this.state.n + 1,
                A :arr
                }

            );
        }

    }

    getNumD = e => {
        if (this.state.n > 2) {
            this.setState(
                { n: this.state.n - 1 }
            );

        }
    }


    MaxticA = e => {

        let I = e.target.name.split(" ");
        this.state.A[parseInt(I[0])][parseInt(I[1])] = e.target.value;

    }

    Show = e => {
        this.setState(

            {Re: calLagrange(this.state.A,this.state.point,this.state.xS)}


        );
    }

    render() {

        return (
            <div>
                <div className="car2 car">
                    <h1 className="intherh">LAGRANGE POLYNOMIALS</h1>
                    <div className="car2">

                        <Button type="primary" onClick={this.getNum} className="inther">เพิ่ม</Button>
                        <Button type="primary" onClick={this.getNumD} className="inther">ลด</Button><br />
                        <div className="car3">
                            <Inputmaxtic className="SP" n={this.state.n} onChange={this.MaxticA} />
                        </div>
                    </div>
                    <div>

                    <Button type="primary" onClick={this.Show} className="set13">Calculate</Button><br/><br/><br/>
                        ค่า X ที่ต้องการ <br/>
                        <Input onChange={this.getxS} /><br/>
                        ใส่จุดที่ต้องการ<br/>
                        <Input onChange={this.getpoint} />

                    </div>
                    <br />
                </div><br />
                <div className="h1M">
                    

                </div>
                <div className="h1M">
                    <h1 >ANSWEAR</h1>
                    {this.state.Re}
                </div>
            </div>

        );
    }
}

export default Lagrange;