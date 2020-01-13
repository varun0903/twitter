import React from 'react';
import PropTypes from 'prop-types';

function Student(props){
    return(
        <div>
            <span>{props.name}</span>
            <span>{props.age}</span>
            <span>{props.location}</span>
            <span>{props.course}</span>
        </div>
    );
}
Student.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number,
    location: PropTypes.string,
    // course: PropsTypes.oneOf['JS','React.JS',"Node.js"]
};
export default Student;