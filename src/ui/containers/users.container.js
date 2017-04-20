import R from 'ramda';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose, renderNothing, branch } from 'recompose';
import users from '../../ui/components/users';
import { getUsers } from './../../model/raw-selectors';
import { getIsLoggedIn } from './../../model/auth/auth.selector';

const mapStateToProps = createStructuredSelector({
  users: getUsers,
  isLoggedIn: getIsLoggedIn,
});

const showIfAuthorized = branch(
  props => !R.prop('isLoggedIn', props),
  renderNothing,
);

export default compose(
  connect(mapStateToProps, null),
  showIfAuthorized,
)(users);
