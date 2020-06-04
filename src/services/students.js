import axios from 'axios';

export const getStudents = async () => {
    let API_URL;
    if (process.env.NODE_ENV === 'production') {
        API_URL = 'https://www.hatchways.io/api/assessment/students';
    } else {
        API_URL = 'http://hatchways.io/api/assessment/students';
    }

    return await axios.get(API_URL);
};