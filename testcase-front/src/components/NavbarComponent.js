import React from 'react';
import {AppBar,Toolbar,Typography,IconButton,makeStyles,Tooltip,Zoom} from '@material-ui/core'
import {GitHub,Brightness3,BrightnessHigh,Feedback} from '@material-ui/icons';

export default function Navbar(props) {

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
    },
  }));

  const classes = useStyles();
    return (
      <div className={classes.root}>
          <AppBar color="inherit" position="static">
            <Toolbar>
              <Typography variant="h6" className={classes.title}>
                Test Case Generator
              </Typography>
              <Tooltip TransitionComponent={Zoom} title="Feedback">
                <a style={{textDecoration:'none'}} href="mailto:runtime.error.true@gmail.com">
                <IconButton color="secondary" >
                  <Feedback/>
                </IconButton>
                </a>
              </Tooltip>
                <Tooltip TransitionComponent={Zoom} title="Github Repo">
                <IconButton onClick={()=>window.open("https://github.com/aadityamayankar/Test-Case-Generator")} color="inherit" >
                  <GitHub />
                </IconButton >
              </Tooltip>
              { props.currTheme==="dark" ?
               (<Tooltip TransitionComponent={Zoom} title="Light Mode">
                <IconButton onClick={props.toggleDarkTheme} color="inherit" >
                  <BrightnessHigh/>
                </IconButton>
              </Tooltip>) :
                (<Tooltip TransitionComponent={Zoom} title="Dark Mode">
                <IconButton onClick={props.toggleDarkTheme} color="inherit" >
                  <Brightness3/>
                </IconButton>
              </Tooltip>)}
            </Toolbar>
          </AppBar>
      </div>
    );
}