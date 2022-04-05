import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import './Registration.css';
import { createUser } from '../../redux/actions/userAC/userAC';


export default function Registration() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [input, setInput] = React.useState({});

  const regUser = (event) => {
    const { name, value } = event.target;
    setInput({ ...input, [name]: value });
  }

  const submit = () => {
    dispatch(createUser(input));
    navigate('/home')
  }

  return (
    <div className='regForm'>
      <TextField label="Firstname" variant="filled" name="firstname" required onChange={regUser} />
      <TextField label="Lastname" variant="filled" name="lastname" required onChange={regUser} />
      <TextField label="Email" variant="filled" name="email" type="email" required onChange={regUser} />
      <TextField label="Password" variant="filled" name="password" type="password" required onChange={regUser} />
      <TextField label="Phone" variant="filled" name="phone" type="phone" required onChange={regUser} />
      <Button onClick={submit} type="submit" variant="contained" color="primary">
        Зарегистрироваться
      </Button>
    </div>
  )
}
