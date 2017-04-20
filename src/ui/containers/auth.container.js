import R from 'ramda';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose, withProps, branch, renderComponent } from 'recompose';
import signIn from './../../ui/components/signIn';
import currentUser from './../../ui/components/current-user';
// import mapStateToProps from '../counter/counter.selector';
import * as mapDispatchToProps from './../../model/auth/auth.actions';
import { getIsLoggedIn } from '././../../model/auth/auth.selector';
import { getName, getPhotoURL } from './../../model/raw-selectors';
import store from '../../store';

const { onLoginAttempt } = mapDispatchToProps;

const mapStateToProps = createStructuredSelector({
  isLoggedIn: getIsLoggedIn,
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
