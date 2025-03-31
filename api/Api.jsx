import axios from 'axios'

const URL = "https://amithekapi.onrender.com/api/message/get-messages"


export const retrieveMessages = async () => {
    try {
        const response = await axios.get(URL, { 
            withCredentials: true  // Ensure cookies are sent with the request
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching messages:", error.response?.data || error.message);
        return { error: "Failed to retrieve messages" };
    }
};


export const retrieveMessageById = async (id) => {
    try {
        const response = await axios.get(`${URL}/${id}`, {
            withCredentials: true,  // ✅ Ensures cookies (JWT token) are sent
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching message by ID:", error.response?.data || error.message);
        return { error: "Failed to fetch message" };
    }
};


export const checkUser = async () => {
    try {
        const response = await axios.get('https://amithekapi.onrender.com/api/dashboard', { withCredentials: true });
        return response.data;  // Ensure response is structured correctly
    } catch (error) {
        console.error("Error fetching user authentication:", error.response?.data || error.message);
        return { access: false }; // Return a default value to prevent app crash
    }
};