import axios from 'axios';

const baseURL = window.location.origin;

export async function getAccommodations() {
    return await axios.get(`${baseURL}/api/accomm`)
        .then(response => {
            return response.data
        })
        .catch(error => {
            console.error('There was a problem with the request:', error);
        });
}

