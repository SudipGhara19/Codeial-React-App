import { useState } from 'react';
import { useToasts } from 'react-toast-notifications';
import styles from '../styles/login.module.css';



const Login = () => {

    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const[loggingIn, setloggingIn] = useState(false);
    const {addToast} = useToasts();

    const handleSubmit = (e) =>{
        e.preventDefault();
        setloggingIn(true);

        if(!email || !password){
            return addToast('Please Enter Both Email and Password',{
                appearance: 'error',
            })
        }
    }
  return (
    <form className={styles.loginForm} onSubmit={handleSubmit}>
      <span className={styles.loginSignupHeader}>Log In</span>

      <div className={styles.field}>
        <input 
            type="email" 
            placeholder="Email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
        />
      </div>

      <div className={styles.field}>
        <input 
            type="password" 
            placeholder="Paasword" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)}/>
      </div>

      <div className={styles.field} disabled={loggingIn}>
        <button>{ loggingIn ? 'Logging In...' : 'Log In'}</button>
      </div>
    </form>
  );
};

export default Login;
