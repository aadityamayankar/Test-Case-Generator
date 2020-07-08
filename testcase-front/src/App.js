import React, { Component } from 'react';
import Wrapper from './Wrapper';
import {Provider} from 'react-redux';
import NavbarComponent from './components/NavbarComponent'
import {ConfigureStore} from './redux/configureStore';
import { createMuiTheme,ThemeProvider } from "@material-ui/core/styles";
const store = ConfigureStore();

export default class App extends Component{
    
    constructor(props){
        super(props);
        this.state={
            palette: {
                type: "dark"
            }
        };
    }

    toggleDarkTheme = () => {
        let PaletteType = this.state.palette.type === "light" ? "dark" : "light";
        this.setState({
          palette: {
            type: PaletteType
          }
        });
    };

    render(){
        const muiTheme = createMuiTheme(this.state);
        return(
        <>
            <Provider store={store}>
            <ThemeProvider theme={muiTheme}>
                <NavbarComponent currTheme={this.state.palette.type} toggleDarkTheme={this.toggleDarkTheme}/>
                <Wrapper/>
            </ThemeProvider>
            </Provider>
        </>)
    }
}