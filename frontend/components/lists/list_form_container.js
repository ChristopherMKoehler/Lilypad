import { connect } from 'react-redux';
import { createList, updateList, receiveErrors } from '../../actions/list_actions';
import ListForm from './list_form';

const mapStateToProps = (state, ownProps) => {
  let initialState =  ownProps.list || null;

  return {
    initialState,
    errors: state.lists.errors
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  let processForm = ownProps.formType === "edit" ? updateList : createList;
  return {
    processForm: (list) => dispatch(processForm(list)),
    clearErrors: () => dispatch(receiveErrors({}))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListForm);
