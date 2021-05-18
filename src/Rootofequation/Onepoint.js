import React from 'react';
import { Input } from 'antd';
import '../App.css';
import { Button } from 'antd';
import { calOnepoint } from '../Math/Math';
import ModalPoP from '../companentjs/ModalPoP';
import apis from '../API/index';


class Onepoint extends React.Component {
    state = {
        Equation: '',
        X: '',
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
                X: this.state.apiData[index]["initial_x"],
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
                    <ModalPoP 
                            visible = {this.state.isModalVisible}
                            onOk = {this.onClickOk}
                            hasData = {this.state.hasData}
                            apiData = {this.state.apiData}
                            onClick = {this.onClickInsert}
                        />
                        <Button type="primary" onClick={this.onClickExample} className="set">ตัวอย่าง</Button><br/>
                        Equation: <Input onChange={this.getEquation} value={this.state.Equation}/><br />
                        <label className="label1">X  :: </label><Input onChange={this.getX} value={this.state.X}/><br />
                        <label className="label2">ERROR: </label><Input onChange={this.getEro} value={this.state.E}/><br />
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
export default Onepoint;