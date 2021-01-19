import {
  FETCH_SERVICES_REQUEST,
  FETCH_SERVICES_SUCCESS,
  FETCH_SERVICES_FAILURE
} from './serviceTypes'

const initialState = {
  loading: false,
  services: [],
  error: ''
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SERVICES_REQUEST:
      return {
        ...state,
        loading: true
      }

    case FETCH_SERVICES_SUCCESS:
      return {
        loading: false,
        services: action.payload,
        error: ''
      }
    
    case FETCH_SERVICES_FAILURE:
      return {
        loading: false,
        services: [],
        error: action.payload
      }
    default: return state
  }
}

export default reducer
