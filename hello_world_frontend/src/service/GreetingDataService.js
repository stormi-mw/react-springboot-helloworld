import axios from 'axios'

const GREETING = 'Goodbye, World'
const API_URL = 'http://localhost:8080/greeting'

class GreetingDataService {

    retrieveMessage(name) {
        return axios.get(`${API_URL}?name=${name}`);
    }
}

export default new GreetingDataService()
