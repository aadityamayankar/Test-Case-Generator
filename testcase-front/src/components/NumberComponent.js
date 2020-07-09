import React from 'react';
import {makeStyles,Container,Grid,Box,Typography,TextField,CssBaseline,Button,IconButton} from '@material-ui/core';
import {ArrowBack,Add} from '@material-ui/icons';
import {useForm} from 'react-hook-form';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  header:{
    marginTop: theme.spacing(5),
    justifyContent:"center",
    alignItems:"center"    
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(8),
  },
  submit: {
    width: '80%',
    margin: theme.spacing(3,5),
  },
}));

export default function NumberComponent(props) {
  const { register,handleSubmit,errors } = useForm({
    mode:"onChange",
    reValidateMode:"onChange"
  });
  const onSubmit=data=>props.handleInputSubmit(Object.assign({},data,{"type":"num"}));
  const classes = useStyles();

  return (
      <>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={classes.paper}>
            <Grid className={classes.header} container>
                <IconButton onClick={()=>props.handleBack(null)} aria-label="delete" size="large">
                    <ArrowBack size="large"/>
                </IconButton>
            <Typography component="h1" variant="h5">
              Number
            </Typography>
            </Grid>
            <form className={classes.form} noValidate onSubmit={handleSubmit(onSubmit)}>
              <Grid container spacing={2}>
                <Grid item xs={12} >
                  <TextField
                    size="small"
                    type="text" 
                    id="num_name" 
                    name="num_name" 
                    inputRef={register({required:"Required",maxLength:{value:7,message:"Maximum Lenght is 7"}})}
                    helperText={errors?.num_name?.message}
                    variant="outlined"
                    required
                    fullWidth
                    error={!!errors.num_name}
                    label="Name of Input"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} >
                  <TextField
                    size="small"
                    type="text" 
                    name="num_min_value" 
                    id="num_min_value" 
                    inputRef={register({required:"Required",pattern: {value: /^[0-9]*$/,message: "Enter a Number"},})}
                    helperText={errors?.num_min_value?.message}
                    variant="outlined"
                    required
                    fullWidth
                    error={!!errors.num_min_value}
                    label="Minimum Value"
                  />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                      size="small"
                        type="text" 
                        id="num_max_value" 
                        name="num_max_value"
                        inputRef={register({required:"Required",pattern: {value: /^[0-9]*$/,message: "Enter a Number"},})}
                        helperText={errors?.num_max_value?.message}
                        variant="outlined"
                        required
                        fullWidth
                        error={!!errors.num_max_value}
                        label="Maximum Value"
                    />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                disabled={!!errors.num_name || !!errors.num_min_value || !!errors.num_max_value}
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
      </>
  );
}
          