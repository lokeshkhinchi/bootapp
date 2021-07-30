import {
  FETCH_SERVICES_REQUEST,
  FETCH_SERVICES_SUCCESS,
  FETCH_SERVICES_FAILURE,
  POST_SERVICE_REQUEST,
  POST_SERVICE_FAILURE,
  EDIT_SERVICE_REQUEST,
  EDIT_SERVICE_FAILURE,
  DELETE_SERVICE_REQUEST,
  DELETE_SERVICE_FAILURE
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
    
    case POST_SERVICE_FAILURE:
      return {
        ...state,
        error: action.payload
      }

    case EDIT_SERVICE_REQUEST:
      const putServices = state.services.concat(action.payload);
      return {
        ...state,
        services: putServices,
        error: ''
      }
    
    case EDIT_SERVICE_FAILURE:
      return {
        loading: false,
        services: [],
        error: action.payload
      }

    case DELETE_SERVICE_REQUEST:
      const filteredServices = state.services.filter(service => service.id !== action.payload.id)
      const deleteServices = state.services.concat(action.payload);
      return {
        ...state,
        services: filteredServices,
        error: ''
      }
    
    case DELETE_SERVICE_FAILURE:
      return {
        ...state,
        error: action.payload
      }

    default: return state
  }
}

export default reducer
