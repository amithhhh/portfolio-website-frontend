import axios from 'axios'

const URL = "http://localhost:5000/api/message/get-messages"



export const retrieveMessages = async () => {
    const response = await axios.get(URL)
    return response.data
}

export const retrieveMessageById = async (id) => {
    const response = await axios.get(`${URL}/${id}`)
    return response.data
}

export const checkUser = async () => {
    try {
        const response = await axios.get('http://localhost:5000/api/dashboard', { withCredentials: true });
        return response.data;  // Ensure response is structured correctly
    } catch (error) {
        console.error("Error fetching user authentication:", error.response?.data || error.message);
        return { access: false }; // Return a default value to prevent app crash
    }
};