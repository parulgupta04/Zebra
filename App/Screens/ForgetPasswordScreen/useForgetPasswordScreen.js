import React, { useState } from 'react'
import { AppText, FormBuilder } from '../../Components'

function useForgetPasswordScreen(props) {
    const [recovery_type, setrecovery_type] = useState('phone')
    console.log("=========recovery_type", recovery_type)
    const formBuilderData = [
        {
            inputType: 'text',
            label: 'Enter Name',
            placeholder: 'Enter Name',
            keyName: 'name',
            validationTypes: ['required'],
        },



    ];
    function toggleOption(selected) {
        setrecovery_type(selected)

    }
    return (
        recovery_type,
        toggleOption,
        formBuilderData
    )
}

export default useForgetPasswordScreen;
