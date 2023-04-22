import axios from "axios";

const PEOPLE_URL = 'localhost:3000/persons';
const token = `Barrer ${localStorage.getItem("accessToken")}`;

const getAllPeople = async () => {
    try {
        const response = await axios.get(PEOPLE_URL, {headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        console.log('searching for people: ' + PEOPLE_URL);
        return response.data;
    } catch (error) {
        console.log(error);
        return error;
    }
}

const getPersonById = async (personId) => {
    try {
        const response = await axios.get(PEOPLE_URL, {headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        console.log('searching for people: ' + PEOPLE_URL);
        return response.data;
    } catch (error) {
        console.log(error);
        return error;
    }
}

export default getAllPeople;
