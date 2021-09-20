import React from 'react'
import { useField } from 'formik'

import { SelectStyle } from './SelectBox.style'

const SelectBox = (props: any) => {
    const [field, meta] = useField(props)
    const invalid = Boolean(!field.value && meta.touched)

    return (
        <>
        <label className="input-label">{props.label}</label>
        <SelectStyle
            name={field.name}
            color="primary"
            error={invalid}
            helperText={invalid && meta.error}
            value={field.value}
            onBlur={field.onBlur}
            onChange={field.onChange}
            
            inputProps={{
                min: props.type === 'number' ? 0 : undefined
            }}
            {...props}
        >
            {props.children}
        </SelectStyle>
        </>
    )
}

export default SelectBox;