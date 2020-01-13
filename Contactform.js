import React from 'react';
import {useFormik} from 'formik';

const ConactForm =() => {
    const validate = values =>{
        console.log(JSON.stringify(values));
        const errors ={};
        if(!values.fullName) {
            errors.fullName = 'Required';
        }
    }
}