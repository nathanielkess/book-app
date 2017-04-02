import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import user from '../../components/users';
import { getUsers } from '../raw-selectors';

const mapStateToProps = createStructuredSelector({
  users: getUsers,
});

export default connect(mapStateToProps, null)(user);
