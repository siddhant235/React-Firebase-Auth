import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import {useAuth} from '../context/AuthProvider'
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(52),
      height: theme.spacing(52)

    },
    justifyContent:'center',
    alignItems:"center",
    marginTop:'2rem',
    
  },
  form:{
    display: 'flex',
      flexDirection:'column',
      margin:'3rem',
      padding:"2rem",
    backgroundColor:'#ccc'  
  },
  TextField:{
      margin:"1rem"
  },
  button:{
      padding:'0.5rem',
      margin:'1rem'
  },
  login:{
      color:'blue',
      '&:hover':{
   cursor:'pointer'
      }
  }
}));
const SignupForm=()=> {
  const classes = useStyles();
  const [signupData,setSignupData]=useState({
      email:"",
      password:""
  });
  const {signup,currentUser} =useAuth();
  
 const submitHandler=async (event)=>{
    event.preventDefault();
    try{
      
    await signup(signupData.email,signupData.password)
    
    }
    catch{
        console.log("failed to create account")
    }
   
    setSignupData({
        email:"",
        password:""
    })
    // console.log(signupData);
}
  const handleChange=name=>event=>{
      event.preventDefault();
      setSignupData({...signupData,[name]:event.target.value})
  }
 return (
    <div >
      {JSON.stringify(currentUser)}
      <Paper variant="outlined" className={classes.root}>
      <form className={classes.form} noValidate autoComplete="off">
          <h2>Signup</h2>
      <TextField className={classes.TextField} id="standard-basic" label="Email" onChange={handleChange('email')} value={signupData.email} />
      <TextField className={classes.TextField} id="standard-basic" label="Passsword" onChange={handleChange('password')} value={signupData.password} />
    
      <Button onClick={submitHandler}  className={classes.button} variant="contained" color="primary">
Submit
</Button>
<br/>
<h3 className={classes.login}>Already have a account? Log In</h3>
    </form>
          
        </Paper>
   
    </div>
  );
}
export default SignupForm
