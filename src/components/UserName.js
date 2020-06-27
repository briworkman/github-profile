import React from 'react';
import { useForm } from 'react-hook-form';

function UserName(props) {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (user) => {
    props.history.push({
      pathname: `/user/${user.username}`,
      state: { username: user.username },
    });
  };

  return (
    <div>
      <h1>HI</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Enter Username Here</h1>
        <div className='field'>
          <input
            type='text'
            placeholder='Username'
            name='username'
            ref={register({ required: true, maxLength: 100 })}
          />
          {errors.username && 'Username is required'}
          <button type='submit'>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default UserName;
