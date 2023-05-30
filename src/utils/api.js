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
     * 
     * @param {*} params {userName, userPassword}
     * @returns 
     */
    axiosToken = async (params) => {
        const response = await apiUrl.post('/user/login', params);
        console.log('axiosToken : ', response)
        return response.data.body.token;
    }

    //look up user information
    axiosProfile = async (token) => {
        const response = await apiUrl.post('/user/profile', {}, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response.data.body;
    }

    //edit user information
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
