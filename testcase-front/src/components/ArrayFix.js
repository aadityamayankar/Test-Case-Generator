import React from 'react';
import {makeStyles,Container,Grid,Box,Typography,TextField,CssBaseline,Button,IconButton,Tooltip} from '@material-ui/core';
import {HelpOutline,ArrowBack,Add} from '@material-ui/icons';
import {useForm} from "react-hook-form";

const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    form: {
      width: '100%', 
      marginTop: theme.spacing(8),
    },
    submit: {
      width: '80%',
      margin: theme.spacing(3,5),
    },
    header:{
      marginTop: theme.spacing(5),
      justifyContent:"center",
      alignItems:"center"
    }
  }));

export default function ArrayFixComponent(props){

  const { register,handleSubmit,errors } = useForm({
    mode:"onChange",
    reValidateMode:"onChange"
  });
    const onSubmit=data=>props.handleInputSubmitFix(Object.assign({},data,{"type":"arr"}));
    const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Grid className={classes.header} container>
            <IconButton onClick={()=>props.handleBackFix(null)} aria-label="delete" size="large">
                <ArrowBack fontSize="inherit" />
            </IconButton>
        <Typography component="h1" variant="h5">
          Array
        </Typography>
        </Grid>
        <form className={classes.form} noValidate onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2}>
            <Grid item xs={12} >
              <TextField
              size="small"
                type="text" 
                id="arr_name" 
                name="arr_name" 
                inputRef={register({required:"Required",maxLength:{value:7,message:"Maximum Lenght is 7"}})}
                helperText={errors?.arr_name?.message}
                variant="outlined"
                required
                fullWidth
                error={!!errors.arr_name}
                label="Name of Input"
                autoFocus
              />
            </Grid>
            <Grid item container xs={12} >
              <Grid item xs={10}>
              <TextField
              size="small"
                type="text" 
                id="arr_dim" 
                name="arr_dim"
                placeholder="x,y"
                inputRef={register({required:"Required",pattern: {value: /^[0-9]+(,[0-9]+)$/,message: "Enter two Comma Separated Numbers"},})}
                helperText={errors?.arr_dim?.message}
                variant="outlined"
                required
                fullWidth
                error={!!errors.arr_dim}
                label="Dimension of Array"
              />
              </Grid>
              <Grid align="center" item xs={2}>
                <Tooltip title="Enter two Comma Separated Numbers Ex: 2,2">
                <IconButton>
                  <HelpOutline/>
                </IconButton>
                </Tooltip>
              </Grid>
            </Grid>
            <Grid item xs={12}>
                <TextField
                size="small"
                    type="text" 
                    id="arr_min_value" 
                    name="arr_min_value" 
                    inputRef={register({required:"Required",pattern: {value: /^[0-9]*$/,message: "Enter a Number"},})}
                    helperText={errors?.arr_min_value?.message}
                    variant="outlined"
                    required
                    fullWidth
                    error={!!errors.arr_min_value}
                    label="Minimum Value"
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                size="small"
                    type="text" 
                    id="arr_max_value" 
                    name="arr_max_value" 
                    inputRef={register({required:"Required",pattern: {value: /^[0-9]*$/,message: "Enter a Number"},})}
                    helperText={errors?.arr_max_value?.message}                    
                    variant="outlined"
                    required
                    fullWidth
                    error={!!errors.arr_max_value}
                    label="Maximum Value"
                />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            // color="inherit"
            disabled={!!errors.arr_name || !!errors.arr_dim || !!errors.arr_min_value || !!errors.arr_max_value}
            className={classes.submit}
            startIcon={<Add/>}
          >
            Add Input
          </Button>
          <Grid container justify="flex-end">
          </Grid>
        </form>
      </div>
      <Box mt={5}>
      </Box>
    </Container>
  );
}
