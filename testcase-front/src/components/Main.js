import React,{Component} from 'react';
import Header from './Header';
import Result from './ResultComponent';
import {TextField, Button,CssBaseline, Container,Grid,Box} from '@material-ui/core';
import {connect} from 'react-redux';
import {changeDs,submitResult,clearStore,testCase} from '../redux/ActionCreators';

const mapStateToProps=state=>{
  return{
    showResult:state.Result_Reducer.showResult,
    selectedDS:state.Ds_Reducer.selectedDS,
    test_case:state.Tc_Reducer.test_case,
    inputList:state.List_Reducer
  };
};

const mapDispatchToProps = dispatch =>({
  changeDs:(selectedDS)=>dispatch(changeDs(selectedDS)),
  testCase:()=>dispatch(testCase()),
  submitResult:(boool)=>dispatch(submitResult(boool)),
  clearStore:()=>dispatch(clearStore()),
  dispatch
});

class Main extends Component{
  handelsub=()=>{
    this.props.dispatch(submitResult(true));
  }
// this function handles the click of the nav bar buttons to chose which ds to render
  handleClick=(button)=>{
    this.props.dispatch(changeDs(button));
  }

  cancelCourse = () => { 
    document.getElementById("tc").reset();
  }

  handleClear=()=>{
    this.cancelCourse();
    this.props.dispatch(clearStore())
  }

  render(){
    if(this.props.selectedDS===null){
      if(this.props.showResult===true){
        return (
          <>
          <CssBaseline />
          <Container>
              <Header ds={this.props} handleClick={this.handleClick}/>
              <Grid container justify="center">
                <Grid item xs={12} sm={6}>
                  <form id="tc" autoComplete="off">
                  <TextField size="small" variant="outlined" type="number" required fullWidth label="Enter the Number of Test Cases" defaultValue={this.props.test_case} disabled={true}/>
                  </form>
                </Grid>
              </Grid>
              <Box mt="5%" paddingBottom="5%">
                <Grid container justify="center">
                  <Grid item>
                    <Button variant="contained" type="submit" disabled>GENERATE</Button>
                  </Grid>
                </Grid>
              </Box>
              <Result prop={this.props} handleClear={this.handleClear}/>
          </Container>
          </>
        );
      }
      else{
        return (
          <>
          <CssBaseline />
          <Container>
              <Header ds={this.props} handleClick={this.handleClick}/>
              <Grid container justify="center">
                <Grid item xs={12} sm={6}>
              <form id="tc" autoComplete="off">
              <TextField size="small" variant="outlined" type="number" required label="Enter the Number of Test Cases" fullWidth  onChange={e => this.props.dispatch(testCase(e.target.value))}/>
              </form>
                </Grid>
              </Grid>
              <Box mt="5%" paddingBottom="5%">
                <Grid container justify="center">
                  <Grid item>
                    <Button variant="contained" type="submit" onClick={this.handelsub}
                     disabled={this.props.test_case==="" || this.props.inputList.length===0? true:false}
                     >GENERATE</Button>
                  </Grid>
                </Grid>
              </Box>
          </Container>
          </>
        );
      }
    }
    else{
      return (
        <>
        <CssBaseline />
        <Container>
            <Header ds={this.props} handleClick={this.handleClick}/>
        </Container>
        </>
      );
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Main);
