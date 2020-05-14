import { useState } from 'react';
import { StyleSheet } from 'react-native';
import getPerfectSize  from '../../Utilities/DimensionHandler';
import useForm from '../../Hooks/Shared/useForm';
import Theme from '../../Config/Theme';
import useValidation from '../../Hooks/Shared/useValidation';

function usePaymentScreen({ navigation }) {
    const [cardType, setCardType] = useState('Debit')
    function changeCardType(selected) {
        setCardType(selected)
    }
    const styles = StyleSheet.create({
        headerleftIcon: { flex: 1.5, paddingLeft: 10 },
        line: { height: 1, width: "92%", backgroundColor: Theme.shadeGrey, alignSelf: "center" },
        field: {
            width: 300,
            color: '#449aeb',
            borderColor: '#000',
            borderWidth: 1,
            borderRadius: 5,
          }
    })
    const formBuilderData = [
        {
            inputType: 'picker',
            label: 'Bank Name',
            placeholder: 'Select Your Bank',
            keyName: 'idType',
            lightLabel: true,
            options: [
                { value: 'SBI', display: 'SBI' },
                { value: 'PNB', display: 'PNB' },
                { value: 'ICICI', display: 'ICICI' },
            ],
            validationTypes: ['picker'],
        },
        {
            inputType: 'text',
            label: 'Enter Name',
            placeholder: 'Enter Name',
            keyName: 'name',
            validationTypes: ['required'],
        },
        // {
        //     inputType: 'text',
        //     label: 'Card Number',
        //     placeholder: 'Card Number',
        //     keyName: 'Card_Number',
        //     validationTypes: ['required'],
        // },
        // [{
        //     inputType: 'date',
        //     label: 'Exp-Date',
        //     placeholder: '-- / -- / ----',
        //     keyName: 'exp_date',
        //     lightLabel: true,
        //     validationTypes: ['required', 'date'],
        // },
        // {
        //     inputType: 'text',
        //     label: 'CVV',
        //     placeholder: 'Enter CVV',
        //     keyName: 'cvv',
        //     lightLabel: true,
        //     validationTypes: ['required'],
        // },

        // ]

    ];
    const payNow = (form) => {
        console.log("-------- ppayNow", form)
        // const validationStatus = useValidation(formBuilderData, form);
        // console.log("validationStatus")
    }


    return {

        formBuilderData,
        changeCardType, cardType, styles, payNow

    };
}

export default usePaymentScreen;