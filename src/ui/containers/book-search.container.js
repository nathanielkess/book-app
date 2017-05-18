import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import SearchBox from './../components/search-box';

const mapStateToProps = createStructuredSelector({
  watermark: () => 'watermark',
});

const mapDispatchToProps = {
  onSubmit: () => ({ type: 'SUBMIT!' }),
  onChange: () => ({ type: 'CHANGE' }),
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchBox);
