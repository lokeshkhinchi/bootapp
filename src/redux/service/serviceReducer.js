import {
  FETCH_SERVICES_REQUEST,
  FETCH_SERVICES_SUCCESS,
  FETCH_SERVICES_FAILURE,
  POST_SERVICE_REQUEST,
  POST_SERVICE_FAILURE
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

    case POST_SERVICE_REQUEST:
      const services = state.services.concat(action.payload);
      return {
        ...state,
        services: services,
        error: ''
      }

    default: return state
  }
}

export default reducer
