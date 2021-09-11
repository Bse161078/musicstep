import React, {Fragment} from 'react'
import { useField } from 'formik'
import { TextFieldStyle, TextFieldErrorStyle } from './InputBox.style'

const InputBox = (props: any) => {
    const [field, meta] = useField(props)

    return (
        <Fragment>
            <TextFieldStyle
                className={props.className}
                name={field.name}
                color="primary"
                value={field.value}
                onBlur={field.onBlur}
                onChange={field.onChange}
                placeholder={props.label}
                {...props}
            />
            {meta.touched && meta.error ? <TextFieldErrorStyle>{meta.error}</TextFieldErrorStyle> : null}
        </Fragment>
    )
}

export default InputBox;