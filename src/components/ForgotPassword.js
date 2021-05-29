import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import { Alert } from '@material-ui/lab';
import {useAuth} from '../context/AuthProvider'
import {Link} from 'react-router-dom'
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(52),
      height: theme.spacing(56)

    },
    justifyContent:'center',
    alignItems:"center",
    marginTop:'2rem',
    
  },
  form:{
    display: 'flex',
    width:'30%',
      flexDirection:'column',
      margin:'3rem',
      padding:"2rem",
    
      boxSizing:"border-box",
      boxShadow:"1px 1px 6px 1px #ccc",
   
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
const ForgotPasssword=()=> {
  const classes = useStyles();
  const [signupData,setSignupData]=useState({
      email:"",
      password:""
  });
  const {resetPassword}=useAuth();
  const [error,setError]=useState('')
  const [message,setMessage]=useState('')
  const [loading,setLoading]=useState(false)
 const submitHandler=async (event)=>{
    event.preventDefault();
    try{
        setMessage("")
      setLoading(true)
    await resetPassword(signupData.email)
   setMessage("Check your inbox for further instructions")
    
    }
    catch{
        console.log("failed to create account")
        return setError("Failed to Sign In")
    }
   
    setSignupData({
        email:"",
        password:""
    })
 setLoading(false)
}
  const handleChange=name=>event=>{
      event.preventDefault();
      setSignupData({...signupData,[name]:event.target.value})
  }
 return (
    <div >
      {error && <Alert severity="error">{error}</Alert>}
      {message && <Alert severity="success">{message}</Alert>}
      <div className={classes.root}>
      <form className={classes.form} noValidate autoComplete="off">
          <h2>Reset Password</h2>
      <TextField className={classes.TextField} id="standard-basic" label="Email" onChange={handleChange('email')} value={signupData.email} />
     
    
      <Button onClick={submitHandler} disabled={loading}  className={classes.button} variant="contained" color="primary">
Reset Password
</Button>
<br/>
 <h3><Link to="/login">Log In</Link></h3>
<h3 className={classes.login}>Need  an account? <Link to="/signup">Sign Up</Link></h3>
    </form>
         
        </div>
   
    </div>
  );
}
export default ForgotPasssword

