import R from 'ramda';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose, withProps, branch, renderComponent } from 'recompose';
import signIn from './../../ui/components/signIn';
import currentUser from './../../ui/components/current-user';
// import mapStateToProps from '../counter/counter.selector';
import * as mapDispatchToProps from './../../model/auth/auth.actions';
import { getName, getPhotoURL, getAuthStatus } from './../../model/raw-selectors';
import store from '../../store';

const { onLoginAttempt } = mapDispatchToProps;

const mapStateToProps = createStructuredSelector({
  isLoggedIn: getAuthStatus,
  name: getName,
  photoURL: getPhotoURL,
});

const branchComponent = branch(
  R.prop('isLoggedIn'),
  renderComponent(currentUser),
  renderComponent(signIn),
);

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withProps(props => ({
    ...props,
    onGoogleAuth: () => { store.dispatch(onLoginAttempt('google')); },
    onSignOut: () => { store.dispatch(onLoginAttempt('logout')); },
      // onFacebookAuth: () => { store.dispatch(onLoginAttempt('facebook')); },
  })),
  branchComponent,
)(signIn);
