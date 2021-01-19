import axios from 'axios';
import { 
  FETCH_SERVICES_REQUEST,
  FETCH_SERVICES_SUCCESS,
  FETCH_SERVICES_FAILURE 
} from "./serviceTypes"

export const fetchServicesRequest = () => {
  return {
    type: FETCH_SERVICES_REQUEST
  }
}

const fetchServicesSuccess = services => {
  return {
    type: FETCH_SERVICES_SUCCESS,
    payload: services
  }
}

const fetchServicesFailure = error => {
  return {
    type: FETCH_SERVICES_FAILURE,
    payload: error
  }
}

export const fetchServices = () => {
  return (dispatch) => {
    dispatch(fetchServicesRequest)
    axios.get('https://5fe8bc5c2e12ee0017ab4a43.mockapi.io/services')
      .then(responce => {
        const services = responce.data
        dispatch(fetchServicesSuccess(services))
      })
      .catch(error => {
        const errorMsg = error.message
        dispatch(fetchServicesFailure(errorMsg))
      })
  }
}
