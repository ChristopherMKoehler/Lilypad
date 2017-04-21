import * as ListApiUtil from '../util/list_api_util';

export const RECEIVE_LISTS = "RECEIVE_LISTS";
export const RECEIVE_LIST = "RECEIVE_LIST";
export const REMOVE_LIST = "REMOVE_LIST";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

const receiveLists = (lists) => ({
  type: RECEIVE_LISTS,
  lists
});

const receiveList = (list) => ({
  type: RECEIVE_LIST,
  list
});

const removeList = (list) => ({
  type: REMOVE_LIST,
  list
});

export const receiveErrors = (errors) => {
  return {
    type: RECEIVE_ERRORS,
    errors
  };
};

export const fetchLists = () => dispatch => (
  ListApiUtil.fetchLists()
    .then(
      (lists) => dispatch(receiveLists(lists)),
      (errors) => dispatch(receiveErrors(errors.responseJSON))
    )
);

export const deleteList = id => dispatch => {
  return ListApiUtil.deleteList(id)
  .then(
    (list) => dispatch(removeList(list)),
    (errors) => dispatch(receiveErrors(errors.responseJSON))
  );
};


export const updateList = list => dispatch => (
  ListApiUtil.updateList(list)
    .then(
      (list) => dispatch(receiveList(list)),
      (errors) => dispatch(receiveErrors(errors.responseJSON))
    )
);

export const createList = list => dispatch => {
  return ListApiUtil.createList(list)
  .then(
    (list) => dispatch(receiveList(list)),
    (errors) => dispatch(receiveErrors(errors.responseJSON))
  );
};
