import React,{Component} from 'react';
import {Button,Grid,Paper,TextField,Box, IconButton,Tooltip,Zoom,Snackbar} from '@material-ui/core';
import {Repeat,FileCopy} from '@material-ui/icons'

class Result extends Component{

    constructor(props){
        super(props);
        this.state={
            string:"",
            openSnack:false
        }
    }

    fetchData=()=>{
        const inputObj = this.props.prop;
        console.log("Input List:",JSON.stringify(inputObj.inputList));
        // console.log(JSON.stringify(inputObj));
            
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
    
        var raw = JSON.stringify(inputObj);
    
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };
    
        fetch("http://localhost:5000/ds", requestOptions)
            .then(response => response.json())
            .then(result => {console.log(result);this.setState({string:result.answer})})
            .catch(error => {console.log('error', error);this.setState({string:"ERROR"})});
    }

    componentDidMount(){
        this.fetchData();
    }

    handleSnackOpen=()=>{this.setState({openSnack:true});navigator.clipboard.writeText(this.state.string);};
    handleSnackClose = () => {this.setState({openSnack: false})};

    render(){
        return(
            <>
            <Grid justify="center" container>
                <Grid item xs={10}>
                <Paper elevation={5}>
                    <TextField
                            defaultValue={this.state.string}
                            fullWidth
                            aria-label="Result"
                            id="Result"
                            multiline
                            rowsMax={20}
                            variant="outlined"
                            />
                </Paper>
                </Grid>
                <Grid item xs={1}>
                    <Tooltip TransitionComponent={Zoom} title="Copy">
                        <IconButton onClick={this.handleSnackOpen}>
                            <FileCopy/>
                        </IconButton>
                    </Tooltip>
                    <Snackbar
                    open={this.state.openSnack}
                    onClose={this.handleSnackClose}
                    autoHideDuration={500}
                    message="Copied"
                    />
                </Grid>
            </Grid>
                    <Box paddingTop="5%" paddingBottom="5%">
                        <Grid justify="center" spacing={3} container>
                                <Grid item >
                                    <Button startIcon={<Repeat/>} fullWidth variant="contained" type="submit" onClick={()=>this.fetchData()}>Re-Generate</Button>
                                </Grid>
                                <Grid item >
                                    <Button fullWidth variant="contained" type="submit" onClick={()=>this.props.handleClear()}>Clear</Button>
                                </Grid>
                        </Grid>
                    </Box>
            </>
        );
    }

}

export default Result;
