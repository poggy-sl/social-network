import React from 'react';
import styles from './FormsControls.module.css';
import {Field} from 'redux-form';


export const FormControl = ({input, meta: {touched, error}, children}) => {

    const hasError = touched && error;

    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
            <div>
                {children}
            </div>
            { hasError && <span>{error}</span> }
        </div>
    )
}

export const Textarea = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}>
                <textarea {...input} {...restProps} />
            </FormControl>
}

export const Input = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}>
                <input {...input} {...restProps} />
            </FormControl>
}

export const createField = (name, placeholder, component, validate, props = {}, text = '') => {
    return <div>
            <Field name={name} 
                    placeholder={placeholder} 
                    component={component} 
                    validate={validate} 
                    {...props} />
                    {text}
        </div>
}