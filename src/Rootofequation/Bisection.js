import React from 'react';
import { Input } from 'antd';
import { Button } from 'antd';
import '../App.css';
import { calBisection } from '../Math/Math';
import { re } from 'mathjs';
import ModalPoP from '../companentjs/ModalPoP';
import apis from '../API/index';


class Bisection extends React.Component {

    state = {
        Equation: '',
        XL: '',
        XR: '',
        E: '',
        re: [],
        rel: [],
        isModalVisible: false,
        hasData: false,
        apiData: [],


    };
    async getData()
    {
        let tempData = null
        await apis.getRoot().then(res => {tempData = res.data})
        this.setState({apiData: tempData})
        this.setState({hasData: true})
        /* console.log(tempData); */
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
                Equation: this.state.apiData[index]["equation"],
                XL: this.state.apiData[index]["xl"],
                XR: this.state.apiData[index]["xr"],
                E: this.state.apiData[index]["error"],
                isModalVisible: false
            })
    }

    onClickOk = e =>{
        this.setState(

            {isModalVisible: false}
        )
    }

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
                    <ModalPoP 
                    visible = {this.state.isModalVisible}
                    onOk = {this.onClickOk}
                    hasData = {this.state.hasData}
                    apiData = {this.state.apiData}
                    onClick = {this.onClickInsert}
                    />

                    <Button type="primary" onClick={this.onClickExample} className="set">ตัวอย่าง</Button><br/>

                        Equation: <Input onChange={this.getEquation} value={this.state.Equation} /><br />
                        <label className="label1">
                        XL:</label><Input onChange={this.getXL} value={this.state.XL}/>
                        XR: <Input onChange={this.getXR} value={this.state.XR}/><br />
                        <label className="label2">
                        ERROR:</label> <Input onChange={this.getEro} value={this.state.E}/><br />
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