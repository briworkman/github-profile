import React from 'react';
import { useForm } from 'react-hook-form';
import logo from '../assets/logo.png';

function UserName(props) {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (user) => {
    console.log(props);
    props.history.push({
      pathname: `/profile/${user.username}`,
      state: { username: user.username },
    });
  };

  return (
    <div className='username'>
      <img src={logo} alt='GitHub Profile Logo' className='logo' />
      <form onSubmit={handleSubmit(onSubmit)} className='form'>
        <h1 className='title'>Find Your GitHub Profile</h1>
        <div className='field'>
          <input
            className='input'
            type='text'
            placeholder=''
            name='username'
            ref={register({ required: true, maxLength: 100 })}
          />
        </div>
        <div className='button-container'>
          {errors.username && 'Username is required'}
          <button className='submit-button' type='submit'>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default UserName;
