import { REQUEST_IMAGE, RECEIVE_IMAGE, PUSH_IMAGE, DELETE_IMAGE, REQUEST_IMAGE_FAILED } from '../actions/index';

const initialState = {
  mainImage: {
    url: '',
    id: '',
    date: ''
  },
  loading: false,
  images: [],
  errorMessage: ''
}


export default function rootReducer(state = initialState, action) {

  switch (action.type) {
    case REQUEST_IMAGE:
      return {
        ...state,
        loading: true
      }
    case RECEIVE_IMAGE:
      return {
        ...state,
        loading: false,
        mainImage: {
          url: action.data.images.fixed_height.url,
          id: action.data.id,
          date: new Date(Date.now()).toLocaleTimeString(),
          title: action.data.title
        },
        errorMessage: ''
      }
    case PUSH_IMAGE:
      return {
        ...state,
        images: [...state.images, state.mainImage]
      }
    case DELETE_IMAGE:
      return {
        ...state,
        images: action.payload
      }
    case REQUEST_IMAGE_FAILED:
      return {
        ...state,
        errorMessage: action.message
      }
    default:
      return state;
  }
}