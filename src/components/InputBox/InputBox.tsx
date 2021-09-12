import React, {Fragment} from 'react'
import { useField } from 'formik'
import { TextFieldStyle, TextFieldErrorStyle, InputBoxStyle } from './InputBox.style'

const InputBox = (props: any) => {
    const [field, meta] = useField(props)

    return (
        <InputBoxStyle>
            <label className="input-label">{props.label}</label>
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
        </InputBoxStyle>
    )
}

export default InputBox;