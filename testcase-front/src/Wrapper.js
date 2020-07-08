import React from 'react';
import Main from './components/Main';
import {Paper,Box} from '@material-ui/core'

export default function Wrapper (){
    return(
    <>
        <Box maxWidth={"80%"} paddingBottom="5%" ml={"10%"} mt={"10%"} mr={"5%"}>
                <Paper elevation={24}>
                    <Main />
                </Paper>
        </Box>
    </>)
}
