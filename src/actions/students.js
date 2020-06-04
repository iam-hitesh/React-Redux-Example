import { getStudents } from "../services";

export const PUSH_STUDENTS = 'PUSH_STUDENTS';
export const PUSH_TAGS = 'PUSH_TAGS';
export const REQUEST_STUDENTS = 'REQUEST_STUDENTS';
export const RECEIVE_STUDENTS = 'RECEIVE_STUDENTS';


/**
 * @param students
 * @param displayStudents
 * @return {Object}
 */
export function pushStudents(students, displayStudents) {
    return {
        type: PUSH_STUDENTS,
        students: students,
        displayStudents: displayStudents
    };
}

/**
 * @param tags
 * @return {Object}
 */
export function pushTags(tags) {
    return {
        type: PUSH_TAGS,
        tags: tags
    };
}

/**
 * @return {Object}
 */
export function requestStudents() {
    return {
        type: REQUEST_STUDENTS
    };
}

/**
 * @return {Object}
 */
export function receiveStudents() {
    return {
        type: RECEIVE_STUDENTS
    };
}



/**
 * @return {Promise}
 *
 * @description Fetch students from API
 */
export const fetchStudents = () => (dispatch) => {
    dispatch(requestStudents());

    return getStudents()
        .then((response) => {
            dispatch(receiveStudents());
            dispatch(pushStudents(response.data.students, response.data.students));
        }).finally(() => {
            dispatch(receiveStudents());
        });
};