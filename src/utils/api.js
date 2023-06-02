import axios from "axios";

/**
 * Define the base of the request url to the api using axios
 * @mixin
 */
const apiUrl = axios.create({
    baseURL: `http://localhost:3001/api/v1`
});

class api {

    /**
     * Uses axios to connect the user to the API using the POST method
     * @param {object} params {userName, userPassword}
     * @returns {object} token
     */
    axiosToken = async (params) => {
        const response = await apiUrl.post('/user/login', params);
        return response.data.body.token;
    }

    //look up user information
    /**
     * Uses axios to retrieve user's informations from the API using the POST method
     * @param {string} token 
     * @returns {object}
     */
    axiosProfile = async (token) => {
        const response = await apiUrl.post('/user/profile', {}, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response.data.body;
    }

    /**
     * Uses axios to edit user's informations (first name, last name) in the API using the PUT method
     * @param {string} token 
     * @param {object} newUser {firstName, lastName}
     * @returns {object}
     */
    axiosUserUpdate = async (token, newUser) => {
        const response = await apiUrl.put('/user/profile', newUser, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response.data.body;
    }

}

export default new api();
