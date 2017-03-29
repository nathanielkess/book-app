import R from 'ramda';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose, withProps, branch, renderComponent } from 'recompose';
import signIn from '../../components/signIn';
import currentUser from '../../components/current-user';
// import mapStateToProps from '../counter/counter.selector';
import * as mapDispatchToProps from './auth.actions';
import { getIsLoggedIn } from './auth.selector';
import store from '../../store';

const { onLoginAttempt } = mapDispatchToProps;

const mapStateToProps = createStructuredSelector({
  isLoggedIn: getIsLoggedIn,
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
    // onFacebookAuth: () => { store.dispatch(onLoginAttempt('facebook')); },
  })),
  branchComponent,
)(signIn);