import { REQUEST_STUDENTS, PUSH_TAGS, RECEIVE_STUDENTS, PUSH_STUDENTS } from "../actions/students";


const initialState = {
    students: [],
    displayStudents: [],
    tags: []
};


/**
 * @param {Object} state
 * @param {Object} action
 * @returns {Object}
 */
const studentsReducer = (state = initialState, action) => {
    switch (action.type) {
        case PUSH_STUDENTS:
            return {
                ...state,
                students: action.students,
                displayStudents: action.displayStudents
            };
        case PUSH_TAGS:
            return {
                ...state,
                tags: action.tags
            };
        case REQUEST_STUDENTS:
            return {
                ...state,
                loaded: false
            };
        case RECEIVE_STUDENTS:
            return {
                ...state,
                loaded: true
            };
        default:
            return state;
    }
};


export default studentsReducer;