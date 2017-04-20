import R from 'ramda';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose, renderNothing, branch } from 'recompose';
import users from '../../components/__ecosystems/users';
import { getUsers } from '../raw-selectors';
import { getIsLoggedIn } from '../auth/auth.selector';

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
