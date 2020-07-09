import React,{Component} from 'react';
import ArrFix from './ArrayFix';

export default class ArrayComponent extends Component{
  constructor(props){
    super(props)
  }
  handleBackFix=(value)=>{
    this.props.handleBack(null);
  }
  handleInputSubmitFix=(dataObj)=>{
    this.props.handleInputSubmit(dataObj)
  }
  render(){
    return(<><ArrFix handleBackFix={this.handleBackFix} handleInputSubmitFix={this.handleInputSubmitFix}/></>);
  }
}