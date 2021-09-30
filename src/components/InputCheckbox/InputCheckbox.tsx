import React from 'react'
import { useField } from 'formik'

import { CheckboxWrapperStyle } from './InputCheckbox.style'
type CheckboxProps = {
    name: string
    onClick: () => void
    className: string
    isCorrectOption: boolean
    label?: string;
}

const InputCheckbox = (props: CheckboxProps) => {
    const { name, onClick, className, isCorrectOption, label } = props
    const [field, meta] = useField({ name })
    const invalid = field['value'] && !field['value'].length && Boolean(meta.error && meta.touched) ? '#ff3d3d' : '#dcdcdc'
    const check = isCorrectOption ? undefined : invalid
    console.log("check: ", check)
    return (
        <CheckboxWrapperStyle className={className} onClick={onClick}>
            {label}
        </CheckboxWrapperStyle>
    )
}

export default InputCheckbox;