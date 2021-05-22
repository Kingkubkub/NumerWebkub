import { InputmaxticMulti } from './inputregression';
import { Col, Row, Button,Input } from 'antd';
import React from 'react';
import { calMultiple } from '../Math/Math';

import apis from '../API/index';
import {copyArray} from '../Math/Math';

class MultiLinearRegression extends React.Component {

    state = {
        A: [[],[],[],[]],
        Re: "",
        x1: '',
        x2: '',
        x3: '',
        n: 2,
        isModalVisible: false,
        hasData: false,
        apiData: [],
    }
    async getData()
    {
        let tempData = null
        await apis.getRegession().then(res => {tempData = res.data})
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
                A: copyArray(this.state.apiData[2].n,this.state.apiData[2].matrixA),
                x1: this.state.apiData[2].x1,
                x2: this.state.apiData[2].x2,
                x3: this.state.apiData[2].x3,
                n: this.state.apiData[2].n,

            })
    }

    onClickOk = e =>{
        this.setState(

            {isModalVisible: false}
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

    getx1 = e =>{
        this.setState({

            x1: e.target.value
            
        });
    }
    getx2 = e =>{
        this.setState({

            x2: e.target.value
            
        });
    }
    getx3 = e =>{
        this.setState({

            x3: e.target.value
            
        });
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
        this.setState(
            { A: this.state.A}
        )

    }

    Show = e => {
        this.setState(

            {Re: calMultiple(this.state.n,this.state.A,this.state.x1,this.state.x2,this.state.x3)}


        );
    }

    render() {

        return (
            <div>
                <div className="car2 car">
                    <h1 className="intherh">MULTILINEAR REGRESSION</h1>
                    <div className="car2">


                    <Button type="primary" onClick={this.onClickExample} className="inther" >ตัวอย่าง</Button>
                    <Button type="primary" onClick={this.getNum} className="inther">เพิ่ม</Button>
                    <Button type="primary" onClick={this.getNumD} className="inther">ลด</Button><br />
                        <div className="car34">
                        <div>
                            <p className="xy">ใส่ค่า X , Y</p>
                        </div>
                            <InputmaxticMulti className="SP" n={this.state.n} onChange={this.MaxticA} value={this.state.A}/>
                        </div>
                    </div>
                    <div>

                    
                        ค่า X1 ที่ต้องการ <br/>
                        <Input onChange={this.getx1} value={this.state.x1}/><br/>
                        ค่า X2 ที่ต้องการ <br/>
                        <Input onChange={this.getx2} value={this.state.x2}/><br/>
                        ค่า X3 ที่ต้องการ <br/>
                        <Input onChange={this.getx3} value={this.state.x3}/><br/>
                        <Button type="primary" onClick={this.Show} className="set13">Calculate</Button><br/>

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

export default MultiLinearRegression;