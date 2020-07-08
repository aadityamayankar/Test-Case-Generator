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
  },
}));

export default function WeightedTree(props) {
  const { register,handleSubmit,errors } = useForm({
    mode:"onChange",
    reValidateMode:"onChange"
  });
    const onSubmit=data=>props.handleInputSubmit(Object.assign({},data,{"type":"wt"}));
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
          Weighted Tree
        </Typography>
        </Grid>
        <form className={classes.form} noValidate onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2}>
            <Grid item xs={12} >
              <TextField
              size="small"
                type="text" 
                id="wt_name" 
                name="wt_name"
                inputRef={register({required:"Required",maxLength:{value:7,message:"Maximum Lenght is 7"}})}
                helperText={errors?.wt_name?.message}
                variant="outlined"
                required
                fullWidth
                error={errors.wt_name}
                label="Name of Input"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} >
              <TextField
              size="small"
                type="text" 
                name="wt_nodes" 
                id="wt_nodes"
                inputRef={register({required:"Required",pattern: {value: /^[0-9]*$/,message: "Enter a Number"},})}
                helperText={errors?.wt_nodes?.message}
                variant="outlined"
                required
                fullWidth
                error={errors.wt_nodes}
                label="Number of Nodes"
              />
            </Grid>
            <Grid item xs={12}>
                <TextField
                size="small"
                    type="text" 
                    name="wt_min_weight" 
                    id="wt_min_weight"
                    inputRef={register({required:"Required",pattern: {value: /^[0-9]*$/,message: "Enter a Number"},})}
                    helperText={errors?.wt_min_weight?.message}
                    variant="outlined"
                    required
                    fullWidth
                    error={errors.wt_min_weight}
                    label="Minimum Weight"
                />
                </Grid>
            <Grid item xs={12}>
                <TextField
                size="small"
                    type="text" 
                    name="wt_max_weight" 
                    id="wt_max_weight"
                    inputRef={register({required:"Required",pattern: {value: /^[0-9]*$/,message: "Enter a Number"},})}
                    helperText={errors?.wt_max_weight?.message}
                    variant="outlined"
                    required
                    fullWidth
                    error={errors.wt_max_weight}
                    label="Maximum Weight"
                />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            // color="inherit"
            disabled={!!errors.wt_name || !!errors.wt_nodes || !!errors.wt_min_weight || !!errors.wt_max_weight}
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
          