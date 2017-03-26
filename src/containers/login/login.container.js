import { connect } from 'react-redux';
import counter from '../../components/counter';
import mapStateToProps from './counter.selector';
import * as mapDispatchToProps from './counter.actions';

export default connect(mapStateToProps, mapDispatchToProps)(counter);
