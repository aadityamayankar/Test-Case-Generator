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
  form: {
    width: '100%', // Fix IE 11 issue.
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

export default function UnweightedTree(props) {
  const { register,handleSubmit,errors } = useForm({
    mode:"onChange",
    reValidateMode:"onChange"
  });
    const onSubmit=data=>props.handleInputSubmit(Object.assign({},data,{"type":"ut"}));
    const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Grid container className={classes.header}>
            <IconButton onClick={()=>props.handleBack(null)} aria-label="delete" size="large">
                <ArrowBack size="inherit" />
            </IconButton>
        <Typography component="h1" variant="h5">
          Unweighted Tree
        </Typography>
        </Grid>
        <form className={classes.form} noValidate onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2}>
            <Grid item xs={12} >
              <TextField
              size="small"
                type="text" 
                id="ut_name" 
                name="ut_name"
                inputRef={register({required:"Required",maxLength:{value:7,message:"Maximum Lenght is 7"}})}
                helperText={errors?.ut_name?.message}
                variant="outlined"
                required
                fullWidth
                error={errors.ut_name}
                label="Name of Input"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} >
              <TextField
              size="small"
                type="text" 
                name="ut_nodes" 
                id="ut_nodes"
                inputRef={register({required:"Required",pattern: {value: /^[0-9]*$/,message: "Enter a Number"},})}
                helperText={errors?.ut_nodes?.message}
                variant="outlined"
                required
                fullWidth
                error={errors.ut_nodes}
                label="Number of Nodes"
              />
            </Grid>
            </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            // color="inherit"
            disabled={!!errors.ut_name || !!errors.ut_nodes}
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
          