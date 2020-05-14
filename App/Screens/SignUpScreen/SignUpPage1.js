import React, { Fragment } from 'react'
import { Content, Container, Row, Col } from 'native-base'
import { FormBuilder, AppText, AppSpacer, RoundedButton } from '../../Components'

function SignUpPage1(props) {

    let { styles, formBuilderData, updateForm, form, saveAndProceedView } = props
    return (

        <Content
            contentContainerStyle={styles.swiperContentStyles}
            enableResetScrollToCoords={false}>
            <FormBuilder
                formData={formBuilderData}
                updateForm={updateForm}
                form={form}
            />
            {saveAndProceedView()}
        </Content>
    )
}

export default SignUpPage1
