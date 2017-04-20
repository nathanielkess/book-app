import { connect } from 'react-redux';
import counter from './../components/counter';
import mapStateToProps from './../../model/counter/counter.selector';
import * as mapDispatchToProps from './../../model/counter/counter.actions';

export default connect(mapStateToProps, mapDispatchToProps)(counter);
