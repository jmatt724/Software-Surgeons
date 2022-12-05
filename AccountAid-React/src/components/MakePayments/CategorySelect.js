import { Select } from '@chakra-ui/react'
import React, { useState } from 'react'

function CategorySelect({ options, value, onChange }) {
    const [selected, setSelected] = useState(options[0])

    return (
    <>
        <Select defaultValue={selected}>
            {options.map((option) => 
                <option key={option} value={option} onClick={() => { setSelected(option); onChange(option) }}>{option}</option>
            )}
        </Select>
    </>
    )
}

export default CategorySelect