import { useState, useEffect } from 'react';
import styles from './Login.module.css';
 
const Login = () => {
    const [displayEmail, setEmail]  = useState('');
    const [displayPassword, setPassword]  = useState('');
    const [error, setError] = useState('');

    return (
        <div className="Logar">
            <h2>Login</h2>
            <form>
                <label>
                    <span>
                        E-mail:
                    </span>
                    <input type="email" name="displayName" required placeholder="E-mail" />
                </label>
                <label>
                    <span>
                        Senha:
                    </span>
                    <input type="password" name="displayName" required placeholder="Senha" />
                </label>
              
                 <button className="btnLogar">
                    Logar
                </button>
            </form>
        </div>
    )
}
 
export default Login