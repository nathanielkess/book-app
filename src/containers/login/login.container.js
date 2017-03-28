import { connect } from 'react-redux';
import { compose, withProps } from 'recompose';
import signIn from '../../components/signIn';
// import mapStateToProps from '../counter/counter.selector';
import * as mapDispatchToProps from './login.actions';
import store from '../../store';

const { onLoginAttempt } = mapDispatchToProps;

export default compose(
  connect(null, mapDispatchToProps),
  withProps(props => ({
    ...props,
    onGoogleAuth: () => { store.dispatch(onLoginAttempt('google')); },
    // onFacebookAuth: () => { store.dispatch(onLoginAttempt('facebook')); },
  })),
)(signIn);
