import React from 'react';
import {makeStyles,Container,Grid,Box,Typography,TextField,CssBaseline,Button,IconButton,Tooltip} from '@material-ui/core';
import {ArrowBack,Add} from '@material-ui/icons';
import {useForm} from 'react-hook-form';
import { HelpOutline } from '@material-ui/icons';

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

export default function StringComponent(props) { 
    const { register,handleSubmit,errors } = useForm({
        mode:"onChange",
        reValidateMode:"onChange"
      });
    const onSubmit=data=>props.handleInputSubmit(Object.assign({},data,{"type":"str"}));
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
                String
            </Typography>
            </Grid>
            <form className={classes.form} noValidate onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={2}>
                <Grid item xs={12} >
                <TextField
                size="small"
                    type="text" 
                    id="str_name" 
                    name="str_name"
                    inputRef={register({required:"Required",maxLength:{value:7,message:"Maximum Lenght is 7"}})}
                    helperText={errors?.str_name?.message}
                    variant="outlined"
                    required
                    fullWidth
                    error={!!errors.str_name}
                    label="Name of Input"
                    autoFocus
                />
                </Grid>
                <Grid item xs={12} >
                <TextField
                size="small"
                    type="text" 
                    name="str_size" 
                    id="str_size"
                    inputRef={register({required:"Required",pattern: {value: /^[0-9]*$/,message: "Enter a Number"},})}
                    helperText={errors?.str_size?.message}
                    variant="outlined"
                    required
                    fullWidth
                    error={!!errors.str_size}
                    label="Size of String"
                />
                </Grid>
                <Grid item container xs={12}>
                    <Grid item xs={10}>
                    <TextField
                    size="small"
                        type="text" 
                        id="chars" 
                        name="chars" 
                        placeholder="Default [a-z]"
                        inputRef={register}
                        variant="outlined"
                        fullWidth
                        label="Chars"
                    />
                    </Grid>
                    <Grid align="center" item xs={2}>
                        <Tooltip title="Default Characters are Lower Case Letters (a-z)">
                            <IconButton>
                                <HelpOutline/>
                            </IconButton>
                        </Tooltip>
                    </Grid>
                </Grid>
            </Grid>
            <Button
                type="submit"
                fullWidth
                variant="contained"
                // color="inherit"
                disabled={!!errors.str_name || !!errors.str_size}
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
          