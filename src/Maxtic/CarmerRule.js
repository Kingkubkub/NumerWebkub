import { Inputmaxtic, Inputmaxtic2 } from './Inputmaxtic';
import { Col, Row, Button } from 'antd';
import React from 'react';
import { calCramer } from '../Math/Math';
import ModalPoP from '../companentjs/ModalPoP';
import apis from '../API/index';
import {copyArray} from '../Math/Math';


class CarmerRule extends React.Component {

    state = {
        A: [[],[]],
        B: [],
        Re: '',
        n: 2,
        isModalVisible: false,
        hasData: false,
        apiData: [],
    }
    async getData()
    {
        let tempData = null
        await apis.getmatrix().then(res => {tempData = res.data})
        this.setState({apiData: tempData})
        this.setState({hasData: true})
       
    }

    onClickExample = e =>{
        if(!this.state.hasData){
            this.getData()
        }
        this.setState({isModalVisible: true})
    }

    onClickInsert = e =>{
        let index = e.currentTarget.getAttribute('name').split('_')
            index = parseInt(index[1])
            this.setState({
                A: copyArray(this.state.apiData[index]["n"],this.state.apiData[index]["matrixA"]),
                B: this.state.apiData[index]["matrixB"],
                n: this.state.apiData[index]["n"],
                isModalVisible: false
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

            { Re: calCramer(this.state.n, this.state.A, this.state.B) }
            

        );
    }
    
    render() {

        return (
            <div>
                <div className="car">
                    <h1 className="h">CARMER RULE</h1>
                    <div className="car1">
                    <ModalPoP 
                            visible = {this.state.isModalVisible}
                            onOk = {this.onClickOk}
                            hasData = {this.state.hasData}
                            apiData = {this.state.apiData}
                            onClick = {this.onClickInsert}
                        />

                    <Button type="primary" onClick={this.onClickExample} className="inther" >ตัวอย่าง</Button>
                    <Button type="primary" onClick={this.getNum} className="inther">เพิ่ม</Button>
                    <Button type="primary" onClick={this.getNumD} className="inther">ลด</Button><br />

                        <label>MaxticA</label>

                        <Inputmaxtic n={this.state.n} onChange={this.MaxticA} value={this.state.A}/>

                        <label>MaxtcB</label>

                        <Inputmaxtic2 n={this.state.n} onChange={this.MaxticB} value={this.state.B}/>

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

export default CarmerRule;
