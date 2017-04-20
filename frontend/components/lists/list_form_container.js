import { connect } from 'react-redux';
import { createList, updateList } from '../../actions/list_actions';
import ListForm from './list_form';

const mapStateToProps = (state, ownProps) => {
  let initialState = ownProps.list || null;
  let formType = ownProps.formType;
  return {
    initialState,
    formType
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  let processForm = ownProps.formType === "edit" ? updateList : createList;
  return {
    processForm: (list) => dispatch(processForm(list))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListForm);
