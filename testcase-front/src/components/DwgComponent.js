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

export default function DwGraph(props) {
  const { register,handleSubmit,errors } = useForm({
    mode:"onChange",
    reValidateMode:"onChange"
  });
    const onSubmit=data=>props.handleInputSubmit(Object.assign({},data,{"type":"dwg"}));
    const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Grid container className={classes.header}>
            <IconButton className={classes.back} onClick={()=>props.handleBack(null)} aria-label="delete" size="large">
                <ArrowBack fontSize="inherit" />
            </IconButton>
        <Typography component="h1" variant="h5">
          Directed Weighted Graph
        </Typography>
        </Grid>
        <form className={classes.form} noValidate onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2}>
            <Grid item xs={12} >
              <TextField
              size="small"
                type="text" 
                id="dwg_name" 
                name="dwg_name" 
                inputRef={register({required:"Required",maxLength:{value:7,message:"Maximum Lenght is 7"}})}
                helperText={errors?.dwg_name?.message}
                variant="outlined"
                required
                fullWidth
                error={errors.dwg_name}
                label="Name of Input"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} >
              <TextField
              size="small"
                type="text" 
                name="dwg_nodes" 
                id="dwg_nodes" 
                inputRef={register({required:"Required",pattern: {value: /^[0-9]*$/,message: "Enter a Number"},})}
                helperText={errors?.dwg_nodes?.message}
                variant="outlined"
                required
                fullWidth
                error={errors.dwg_nodes}
                label="Number of Nodes"
              />
            </Grid>
            <Grid item xs={12}>
                <TextField
                size="small"
                    type="text" 
                    id="dwg_edges" 
                    name="dwg_edges" 
                    inputRef={register({required:"Required",pattern: {value: /^[0-9]*$/,message: "Enter a Number"},})}
                    helperText={errors?.dwg_edges?.message}
                    variant="outlined"
                    required
                    error={errors.dwg_edges}
                    fullWidth
                    label="Number of Edges"
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                size="small"
                    type="text" 
                    id="dwg_min_weight" 
                    name="dwg_min_weight" 
                    inputRef={register({required:"Required",pattern: {value: /^[0-9]*$/,message: "Enter a Number"},})}
                    helperText={errors?.dwg_min_weight?.message}
                    variant="outlined"
                    required
                    fullWidth
                    error={errors.dwg_min_weight}
                    label="Maximum Weight"
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                size="small"
                    type="text" 
                    id="dwg_max_weight" 
                    name="dwg_max_weight" 
                    inputRef={register({required:"Required",pattern: {value: /^[0-9]*$/,message: "Enter a Number"},})}
                    helperText={errors?.dwg_max_weight?.message}
                    variant="outlined"
                    required
                    error={errors.dwg_max_weight}
                    fullWidth
                    label="Maximum Weight"
                />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            // color="inherit"
            className={classes.submit}
            disabled={!!errors.dwg_name || !!errors.dwg_nodes || !!errors.dwg_edges || !!errors.dwg_min_weight|| !!errors.dwg_max_weight}
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
          