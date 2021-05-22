import {Inputmaxtic,Inputmaxtic2} from './Inputmaxtic';
import {Col,Row,Button} from 'antd';
import React from 'react';
import { calSeidel } from '../Math/Math';
import { Input } from 'antd';

import apis from '../API/index';
import {copyArray} from '../Math/Math';

class GaussSeidel extends React.Component{
    state = {
        A: [[],[]],
        B: [],
        Re: '',
        ERR: '',
        n: 2,

        hasData: false,
        apiData: [],
    }
    async getData()
    {
        let tempData = null
        await apis.getmatrix().then(res => {tempData = res.data})
        this.setState({apiData: tempData})
        this.setState({hasData: true})
        this.onInsert()
        
    }

    onClickExample = e =>{
        if(!this.state.hasData){
            this.getData()
        }
        
    }

    onInsert(){

        this.setState({
            A: copyArray(this.state.apiData[1].n,this.state.apiData[1].matrixA),
            B: this.state.apiData[1].matrixB,
            n: this.state.apiData[1].n,
            ERR: this.state.apiData[1].error
            
        })
    }
    
    getNum = e => {

        if (this.state.n < 5) {

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


    getERRer = e =>{
        this.setState({

            ERR: e.target.value,

        })
    }


    MaxticA = e => {
        let I = e.target.name.split(" ");
        this.state.A[parseInt(I[0])][parseInt(I[1])] = e.target.value;
        this.setState(
            { A: this.state.A}
        )
    
    }

    MaxticB = e => {
        let I1 = e.target.name.split(" ");
        this.state.B[parseInt(I1[0])] = e.target.value;
        this.setState(
            { A: this.state.A}
        )

    }
   
    Show = e => {
        this.setState(

            {Re: calSeidel(this.state.n,this.state.A,this.state.B,this.state.ERR)}

        );
    }
    
    render() {

        return (
            <div>
                <div className="car">
                    <h1 className="h">Gauss-Seidel Iteration Method</h1>
                    <div className="car1">


                <Button type="primary" onClick={this.onClickExample} className="inther" >ตัวอย่าง</Button>
                <Button type="primary" onClick={this.getNum} className="inther">เพิ่ม</Button>
                <Button type="primary" onClick={this.getNumD} className="inther">ลด</Button><br />

                        <label>MaxticA</label>

                        <Inputmaxtic n={this.state.n} onChange={this.MaxticA} value={this.state.A}/>

                        <label>MaxtcB</label>

                        <Inputmaxtic2 n={this.state.n} onChange={this.MaxticB} value={this.state.B}/>

                        ERROR:<br/>

                        <Input onChange={this.getERRer} placeholder="ใส่ค่า Error" value={this.state.ERR}/>

                    </div>

                    <div>
                        <Button type="primary" onClick={this.Show} className="set1">Calculate</Button>
                    </div>
                    <br />
                </div><br/>

                <div className="h1M">
                    <h1 >ITERATION</h1>
                    {this.state.Re}
                </div>
            </div>
        );
    }
}

export default GaussSeidel;