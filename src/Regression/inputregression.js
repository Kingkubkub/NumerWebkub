import {Input,Col,Row} from 'antd';
import React from 'react';


class Inputmaxtic extends React.Component{

    ColRow() {

        let arrrow=[];
        
        for(let i=0;i<this.props.n;i++){
            let arrcol=[];
            for(let j=0;j<2;j++){
                arrcol.push(<Col><Input  className="SP Inputmaxtic" name={i.toString()+" "+j.toString()} placeholder="ใส่ค่า" value={this.props.value[i][j]} onChange={this.props.onChange} autoComplete="off" /></Col>)
                
            }
            arrrow.push(<Row>{arrcol}</Row>)
        }
        return arrrow;
    }


    render(){
        return(

            <div>
                {this.ColRow()}
            </div>

            );
    }
}

class InputmaxticMulti extends React.Component{

    ColRow() {

        let arrrow=[];
        
        for(let i=0;i<this.props.n;i++){
            let arrcol=[];
            for(let j=0;j<4;j++){
                arrcol.push(<Col><Input  className="SP Inputmaxtic" name={i.toString()+" "+j.toString()} placeholder="ใส่ค่า" value={this.props.value[i][j]} onChange={this.props.onChange} autoComplete="off" /></Col>)
                
            }
            arrrow.push(<Row>{arrcol}</Row>)
        }
        return arrrow;
    }


    render(){
        return(

            <div>
                {this.ColRow()}
            </div>

            );
    }
}


export {Inputmaxtic,InputmaxticMulti}