import axios from 'axios';

export const getStudents = async () => {
    return await axios.get(
        `https://www.hatchways.io/api/assessment/students`
    );
};