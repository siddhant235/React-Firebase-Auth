import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import { Alert } from '@material-ui/lab';
import {useAuth} from '../context/AuthProvider'
import {Link,useHistory} from 'react-router-dom'
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
const Login=()=> {
  const classes = useStyles();
  const history=useHistory();
  const [signupData,setSignupData]=useState({
      email:"",
      password:""
  });
  const {login}=useAuth();
  const [error,setError]=useState('')
  const [loading,setLoading]=useState(false)
 const submitHandler=async (event)=>{
    event.preventDefault();
    try{
      setLoading(true)
    await login(signupData.email,signupData.password)
    history.push("/")
    
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
      <div className={classes.root}>
      <form className={classes.form} noValidate autoComplete="off">
          <h2>Login</h2>
      <TextField className={classes.TextField} id="standard-basic" label="Email" onChange={handleChange('email')} value={signupData.email} />
      <TextField className={classes.TextField} id="standard-basic" label="Passsword" onChange={handleChange('password')} value={signupData.password} />
    
      <Button onClick={submitHandler} disabled={loading}  className={classes.button} variant="contained" color="primary">
Submit
</Button>
<br/>
<h3 className={classes.login}>Need  an account? <Link to="/signup">Sign Up</Link></h3>
    </form>
          
        </div>
   
    </div>
  );
}
export default Login

