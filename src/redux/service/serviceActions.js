import axios from 'axios';
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

const postServiceRequest = service => {
  return {
    type: POST_SERVICE_REQUEST,
    payload: service
  }
}

const postServiceFailure = error => {
  return {
    type: POST_SERVICE_FAILURE,
    payload: error
  }
}

const editServiceRequest = service => {
  return {
    type: EDIT_SERVICE_REQUEST,
    payload: service
  }
}

const editServiceFailure = error => {
  return {
    type: EDIT_SERVICE_FAILURE,
    payload: error
  }
}



const deleteServiceRequest = id => {
  return {
    type: DELETE_SERVICE_REQUEST,
    payload: {
      id: id,
    }
  }
}

const deleteServiceFailure = error => {
  return {
    type: DELETE_SERVICE_FAILURE,
    payload: error
  }
}

export const fetchServices = () => {
  return (dispatch) => {
    dispatch(fetchServicesRequest)
    axios.get('https://5fe8bc5c2e12ee0017ab4a43.mockapi.io/services')
      .then(responce => {
        const services = responce.data.reverse()
        dispatch(fetchServicesSuccess(services))
      })
      .catch(error => {
        const errorMsg = error.message
        dispatch(fetchServicesFailure(errorMsg))
      })
  }
}

export const postService = (service) => {
  return (dispatch) => {
    axios.post('https://5fe8bc5c2e12ee0017ab4a43.mockapi.io/services', service)
      .then(response => {
        const service = response.data;
        console.log(service);
        dispatch(postServiceRequest(service))
      })
      .catch(error => {
        const errorMsg = error.message
        dispatch(postServiceFailure(errorMsg))
      })
  }
}

export const editService = (userId, service) => {
  return (dispatch) => {
    axios.put(`https://5fe8bc5c2e12ee0017ab4a43.mockapi.io/services/${userId}`, service)
      .then(response => {
        const service = response.data;
        dispatch(editServiceRequest(service))
      })
      .catch(error => {
        const errorMsg = error.message
        dispatch(editServiceFailure(errorMsg))
      })
  }
}

export const deleteService = (userId) => {
  console.log('delete');
  return (dispatch) => {
    axios.delete(`https://5fe8bc5c2e12ee0017ab4a43.mockapi.io/services/${userId}`)
      .then(response => {
        dispatch(deleteServiceRequest(userId))
      })
      .catch(error => {
        const errorMsg = error.message
        dispatch(deleteServiceFailure(errorMsg))
      })
  }
}
