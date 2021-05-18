import React from 'react';
import { Input } from 'antd';
import { Button } from 'antd';
import '../App.css';
import { calBisection } from '../Math/Math';
import { re } from 'mathjs';
import ModalPoP from '../companentjs/ModalPoP';
import apis from '../API/index';


class Text1 extends React.Component {

    state = {

        Name: 'None'
    };

    get = e =>{
        
        this.setState(
            {
                Name: e.target.value,
            }
        )

    }

    render() {

        return (

            <div >
                <div className="bg">

                    <div className="bg2">

                        <label>ใส่ค่าทดสอบ</label><br/>
                        <Input></Input>
                        <Button className="set" onClick={this.get}>ตกลง</Button>
                    </div>
                </div >


                {this.state.Name}


            </div>
        );
    }
}

export default Text1;