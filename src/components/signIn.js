import React, { PropTypes } from 'react';
import Button from './button';


const SignIn = ({
  onGoogleAuth,
  onFacebookAuth,
}) =>
  <div>
    { onGoogleAuth &&
      <Button onClick={onGoogleAuth}>
        Google Sign In
      </Button>
    }
    <br />
    { onFacebookAuth &&
      <Button onClick={onFacebookAuth}>
        Facebook signin
      </Button>
    }
  </div>;

SignIn.propTypes = {
  onGoogleAuth: PropTypes.func,
  onFacebookAuth: PropTypes.func,
};


export default SignIn;
