let init = {
  message: '',
  isOpen: false
}

function notificationReducer(state = init, action) {
  switch (action.type) {
    case 'SHOW_NOTIFICATION': return { message: action.message, isOpen: true }; break;
    default: return getDefault(action); break;
  }
}

function getDefault(action) {
  if (_.isUndefined(action.message)) {
     return init;
  }

  return { message: action.message, isOpen: false };
}

export default notificationReducer;
