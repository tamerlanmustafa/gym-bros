import React, { useState } from 'react';

const SignIn: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you can perform the sign-in logic with the email and password
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className='sign-in flex flex-fd-c flex-jc-c flex-ai-c'>
      <h2>Sign In</h2>
        <form
              className='flex flex-fd-c flex-jc-c flex-ai-c'
              onSubmit={handleSubmit}>
            <div >
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default SignIn;
