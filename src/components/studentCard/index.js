import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';

import Tags from "../tags";
import * as studentsActions from '../../actions/students';

import {
    StyledDetails,
    StyledImage,
    StyledImageContainer,
    StyledOtherDetails,
    StyledProfile,
    StyledProfilesCard,
    StyledSearchBox,
    StyleExpandableButton
} from "./styles";


const StudentCard = (props) => {
    const { onRequestStudents, students } = props;
    const [showTag, setTag ] = useState(-1);

    useEffect(() => {
        onRequestStudents();
    }, [onRequestStudents]);

    const [searchQuery, setSearchQuery] = useState({ name: null, tag: null });

    useEffect(() => {
        searchStudent();
    }, [searchQuery]);

    // Calculate average of given list of marks
    const averageMarks = (marks) => {
        let sum = 0;
        marks.forEach(function(entry) {
            sum += parseFloat(entry);
        });

        return sum/marks.length;
    };

    // Search student basis on given query and parameters.
    const searchStudent = () => {
        let filteredStudents = students.students;

        if (searchQuery.tag) {
            // Search students by tags
            filteredStudents = searchTag(filteredStudents, searchQuery.tag);
        }

        if (searchQuery.name) {
            // Search students by name(first/last)
            filteredStudents = searchName(filteredStudents, searchQuery.name);
        }

        props.onSearchStudents(students.students, filteredStudents);
    };

    // Util function for searching students from given list based on provided name parameter
    const searchName = (filteredStudents, searchQuery) => {
        const query = searchQuery.toLowerCase();

        return filteredStudents.filter(function (student) {
            return (
                student.firstName.toLowerCase().indexOf(query) !== -1 ||
                student.lastName.toLowerCase().indexOf(query) !== -1
            );
        });
    };

    // Util function for searching students from given list based on provided tag parameter
    const searchTag = (filteredStudents, searchQuery) => {
        const tagSearch = [];
        const query = searchQuery.toLowerCase();

        students.tags.filter(function(tag) {
            if (tag.title.toLowerCase().indexOf(query) !== -1) {
                tagSearch.push(parseInt(tag.studentId));

                return true;
            }

            return false;
        });

        return filteredStudents.filter(function (student) {
            if (!searchTag) {
                return true;
            }

            return (tagSearch.indexOf(parseInt(student.id)) !== -1);
        });
    };

    return (
        <StyledProfilesCard>
            <StyledSearchBox
                placeholder="Search by name"
                padding="10px"
                type="text"
                onChange={(event) => {
                    const val = event.target.value;
                    setSearchQuery(prevState => {
                        return { ...prevState, name: val }
                    });
                }}
            />
            <StyledSearchBox
                placeholder="Search by tags"
                padding="10px"
                type="text"
                onChange={(event) => {
                    const val = event.target.value;
                    setSearchQuery(prevState => {
                        return { ...prevState, tag: val }
                    });
                }}
            />
            {
                students.displayStudents &&
                students.displayStudents.map((student, id) => {
                    return(
                        <StyledProfile key={id}>
                            <StyledImageContainer>
                                <StyledImage
                                    src={student.pic}
                                    alt={student.firstName}
                                />
                            </StyledImageContainer>

                            <StyledDetails>
                                <h2>{`${student.firstName} ${student.lastName}`}</h2>

                                <StyledOtherDetails>
                                    <span>{`Email: ${student.email}`}</span>
                                    <span>{`Company: ${student.company}`}</span>
                                    <span>{`Skill: ${student.skill}`}</span>
                                    <span>{`Average: ${averageMarks(student.grades)}%`}</span>

                                    {
                                        showTag === student.id ? (
                                            <Tags
                                                student={student}
                                                showTag={showTag}
                                            />
                                        ) : ("")
                                    }
                                </StyledOtherDetails>
                            </StyledDetails>

                            <StyleExpandableButton
                                onClick={() => setTag(showTag === student.id ? -1 : student.id)}
                            >
                                { showTag === student.id ? ("-") : ("+") }
                            </StyleExpandableButton>
                        </StyledProfile>
                    )
                })
            }
        </StyledProfilesCard>
    )
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
        onRequestStudents: () => dispatch(studentsActions.fetchStudents()),
        onSearchStudents: (students, displayStudents) => dispatch(studentsActions.pushStudents(students, displayStudents))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(StudentCard);