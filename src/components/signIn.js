import React, { Proptypes } from 'react';
import Button from './button';


const SignIn = ({ googleSignIn }) => {
  return (
    <div>
      { googleSignIn &&
        <Button onClick={googleSignIn}>
          Google Sign In
        </Button>
      }
    </div>
  );
};

SignIn.propTypes = {
  googleSignIn: Proptypes.func,
};

export default SignIn;
