import React, {useState} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import * as studentsActions from "../../actions/students";
import {
    StyledButton,
    StyledContent,
    StyledTagInput
} from "./styles";


const Tags = (props) => {
    const { students, student } = props;
    const [tag, setTag] = useState('');

    const addTag = (event) => {
        event.preventDefault();

        students.tags.push({"title": tag, "studentId": student.id});
        props.onAddTags(students.tags, students.tags);
        setTag('');
    };

    const tags = students.tags.filter((tag, id) => {return tag.studentId === student.id});

    return (
        <StyledContent>
            {
                student.grades.map((grade, id) => {
                    return (
                        <span key={id}>Test {id + 1}: &emsp; {grade}%</span>
                    )
                })
            }
            {
                tags &&
                tags.map((tag, id) => {
                    return (
                        <StyledButton key={id}>
                            {tag.title}
                        </StyledButton>
                    )
                })
            }
            <br/>
            <form onSubmit={addTag}>
                <StyledTagInput
                    type="text"
                    placeholder="Add a tag"
                    name="tag"
                    onChange={e => setTag(e.target.value)}
                    value={tag}
                />
            </form>
        </StyledContent>
    )

};

Tags.propTypes = {
    name: PropTypes.object
};

// Map Redux state to component props
function mapStateToProps(state) {
    return {
        ...state
    }
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
    return {
        onAddTags: (tags) => dispatch(studentsActions.pushTags(tags))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Tags);