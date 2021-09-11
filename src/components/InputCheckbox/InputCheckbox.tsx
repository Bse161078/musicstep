import React from 'react'
import { useField } from 'formik'

import { CheckboxWrapperStyle } from './InputCheckbox.style'
type CheckboxProps = {
    name: string
    onClick: () => void
    className: string
    isCorrectOption: boolean
}

const InputCheckbox = (props: CheckboxProps) => {
    const { name, onClick, className, isCorrectOption } = props
    const [field, meta] = useField({ name })
    const invalid = field['value'] && !field['value'].length && Boolean(meta.error && meta.touched) ? '#ff3d3d' : '#dcdcdc'
    const check = isCorrectOption ? undefined : invalid

    return (
        <CheckboxWrapperStyle className={className} onClick={onClick}>
            {/* <TickIcon fill={check} /> */}
        </CheckboxWrapperStyle>
    )
}

export default InputCheckbox;