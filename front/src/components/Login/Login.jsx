import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import { getLogUser } from '../../redux/actions/userAC/userAC';

export default function Login() {
  const [input, setInput] = React.useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const loginUser = (event) => {
    const { name, value } = event.target;
    setInput({ ...input, [name]: value });
  }

  const submit = async () => {
    dispatch(getLogUser(input));
    navigate('/cabinet')
  }

  return (
    <div className='loginForm'>
      <TextField label="Email" variant="filled" name="email" type="email" required onChange={loginUser} />
      <TextField label="Пароль" variant="filled" name="password" type="password" required onChange={loginUser} />
      <Button onClick={submit} type="submit" variant="contained" color="primary">
        Войти
      </Button>
    </div>
  )
}
