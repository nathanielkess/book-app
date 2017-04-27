import R from 'ramda';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose, renderNothing, branch } from 'recompose';
import users from '../../ui/components/users';
import { getUsers, getAuthStatus } from './../../model/raw-selectors';

const mapStateToProps = createStructuredSelector({
  users: getUsers,
  isLoggedIn: getAuthStatus,
});

const showIfAuthorized = branch(
  props => !R.prop('isLoggedIn', props),
  renderNothing,
);

export default compose(
  connect(mapStateToProps, null),
  showIfAuthorized,
)(users);
