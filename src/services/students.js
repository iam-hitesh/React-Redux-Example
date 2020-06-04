import axios from 'axios';

export const getStudents = async () => {
    return await axios.get(
        `http://hatchways.io/api/assessment/students`
    );
};