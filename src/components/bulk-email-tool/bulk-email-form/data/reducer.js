export function editorReducer(state, action) {
  switch (action.type) {
    case 'EDITOR_ON_CHANGE':
      return {
        ...state,
        ...action.payload,
      };
    case 'COPY_TO_EDITOR':
      return {
        ...state,
        emailBody: action.payload.emailBody || '',
        emailSubject: action.payload.emailSubject || '',
        emailRecipients: action.payload.emailRecipients || [],
        scheduleDate: action.payload.scheduleDate || '',
        scheduleTime: action.payload.scheduleTime || '',
        schedulingId: action.payload.schedulingId || '',
        emailId: action.payload.emailId || null,
      };
    case 'ADD_RECIPIENT':
      return {
        ...state,
        emailRecipients: [...state.emailRecipients, action.payload],
      };
    case 'REMOVE_RECIPIENT':
      return {
        ...state,
        emailRecipients: state.emailRecipients.filter((value) => value !== action.payload),
      };
    case 'CLEAR_RECIPIENTS':
      return {
        ...state,
        emailRecipients: [],
      };
    case 'CLEAR_DATE_TIME':
      return {
        ...state,
        scheduleDate: '',
        scheduleTime: '',
      };
    case 'CLEAR_EDITOR':
      return {
        ...state,
        emailBody: '',
        emailSubject: '',
        scheduleDate: '',
        scheduleTime: '',
        emailRecipients: [],
        editMode: false,
        schedulingId: '',
        emailId: null,
      };
    case 'SET_EDIT_MODE':
      return {
        ...state,
        editMode: action.payload,
      };
    case 'PATCH_SCHEDULED_EMAIL':
      return state;
    case 'PATCH_START':
      return {
        ...state,
        isLoading: true,
      };
    case 'PATCH_COMPLETE':
      return {
        ...state,
        isLoading: false,
        errorRetrievingData: false,
        ...action.payload,
      };
    case 'PATCH_FAILURE':
      return {
        ...state,
        isLoading: false,
        errorRetrievingData: true,
      };
    case 'POST_BULK_EMAIL':
      return state;
    case 'POST_START':
      return {
        ...state,
        isLoading: true,
      };
    case 'POST_COMPLETE':
      return {
        ...state,
        isLoading: false,
        errorRetrievingData: false,
        ...action.payload,
      };
    case 'POST_FAILURE':
      return {
        ...state,
        isLoading: false,
        errorRetrievingData: true,
      };
    default:
      return state;
  }
}

export const editorInitialState = {
  emailBody: '',
  emailSubject: '',
  scheduleDate: '',
  scheduleTime: '',
  emailRecipients: [],
  editMode: false,
  schedulingId: '',
  emailId: null,
  isLoading: false,
  errorRetrievingData: false,
};

export default editorReducer;
