import React, { Component } from 'react';
import Number from './NumberComponent';
import Array from './ArrayComponent';
import String from './StringComponent';
import UnweightedTree from './UnweightedTreeComponent';
import WeightedTree from './WeightedTreeComponent';
import DuGraph from './DugComponent';
import DwGraph from './DwgComponent';
import UuGraph from './UugComponent';
import Main from './Main';
import {connect} from 'react-redux';
import {changeDs,submitList} from '../redux/ActionCreators';

const mapStateToProps=state=>{
    return{
      selectedDS:state.Ds_Reducer.selectedDS,
      inputList:state.List_Reducer
    };
  };
  
const mapDispatchToProps = dispatch =>({
    changeDs:(selectedDS)=>dispatch(changeDs(selectedDS)),
    submitList:(data)=>dispatch(submitList(data)),
    dispatch    
});


class DsComponent extends Component{
    rendercomponent=(dsisSelected)=>{
        
        switch (dsisSelected) {
            case 0:
                return(
                    <Number handleBack={this.handleBack} handleInputSubmit={this.handleInputSubmit}/>
                );
            case 1:
                return(
                    <Array handleBack={this.handleBack} handleInputSubmit={this.handleInputSubmit}/>
                );
            case 2:
                return(
                    <String handleBack={this.handleBack} handleInputSubmit={this.handleInputSubmit}/>
                );
            case 3:
                return(
                    <UnweightedTree handleBack={this.handleBack} handleInputSubmit={this.handleInputSubmit}/>
                );
            case 4:
                return(
                    <WeightedTree handleBack={this.handleBack} handleInputSubmit={this.handleInputSubmit}/>
                );
            case 5:
                return(
                    <DuGraph handleBack={this.handleBack} handleInputSubmit={this.handleInputSubmit}/>
                );
            case 6:
                return(
                    <DwGraph handleBack={this.handleBack} handleInputSubmit={this.handleInputSubmit}/>
                );
            case 7:
                return(
                    <UuGraph handleBack={this.handleBack} handleInputSubmit={this.handleInputSubmit}/>
                );
            case null:
                return(
                    <Main/>
                );
            default:
                return(<h1>ERROR</h1>);
            }
    }
    // this function handles functionality of the ability of going back
    //invoked on click of 'back' button on each ds Component
    handleBack=(button)=>{
        this.props.dispatch(changeDs(button));
    }
    //this function handles the functionality of dispatching data of all the datastructures 
    // invoked on click of 'Add input' button on each ds Component
    handleInputSubmit=(data)=>{
        this.props.dispatch(submitList(data));
        this.handleBack(null);
    }
    
    render(){
        return(
            <>
                {this.rendercomponent(this.props.selectedDS)}
            </>
        );
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(DsComponent);