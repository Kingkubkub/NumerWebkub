import React from 'react';
import { Input } from 'antd';
import '../App.css';
import { Button } from 'antd';
import { calSecant } from '../Math/Math';

import apis from '../API/index';


class Secant extends React.Component {
    state = {
        Equation: "",
        X0: "",
        X1: "",
        E: "",
        re: [],

        apiData: [],
        hasData: false,


    };
    async getData()
    {
        let tempData = null
        await apis.getRoot().then(res => {tempData = res.data})
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
                Equation: this.state.apiData[4].equation,
                X0: this.state.apiData[4].xl,
                X1: this.state.apiData[4].xr,
                E: this.state.apiData[4].error,
    
            })
    }


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

                        <Button type="primary" onClick={this.onClickExample} className="set" >ตัวอย่าง</Button><br/>
                        Equation: <Input onChange={this.getEquation} value={this.state.Equation}/><br />
                        <label className="label1">X0:</label><Input onChange={this.getX} value={this.state.X0} />
                    X1: <Input onChange={this.getX} value={this.state.X1}/><br />
                        <label className="label2">ERROR:</label> <Input onChange={this.getEro} value={this.state.E}/><br />
                        <Button type="primary" onClick={this.Show} className="set">Calculate</Button>
                    </div>
                </div ><br />

                <div className="iteration">
                    <h1 className="h1x">ITERATION</h1>
                    {this.state.re}

                </div>
            </div>


        );
    }
}
export default Secant;