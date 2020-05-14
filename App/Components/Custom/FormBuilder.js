import React, { Fragment, memo, useMemo } from 'react';
import { TextInputItem, AppClick } from '..';
import { Row, Col, Text } from 'native-base';
import AppSpacer from '../Shared/AppSpacer';
import AppText from '../Shared/AppText';
import Theme from '../../Config/Theme';
import PickerInputItem from './PickerInputItem';
import DatePickerItem from './DatePickerItem';

function FormBuilder({ formData, updateForm, form }) {
  function renderMultipleInputsOrSingleInput(data, index) {
    if (Array.isArray(data)) {
      return (
        <Row key={index}>
          <Col>{renderInput(data[0], index)}</Col>
          <AppSpacer size={40} horizontal />
          <Col>{renderInput(data[1], index)}</Col>
        </Row>
      );
    } else if (typeof data === 'string') {
      return (
        <Fragment key={index}>
          <AppText color={Theme.light} bold fontSize={30}>
            {data}
          </AppText>
          <AppSpacer size={40} />
        </Fragment>
      );
    } else {
      return renderInput(data, index);
    }
  }

  function renderInput(
    {
      label,
      inputType,
      value,
      keyName,
      placeholder,
      lightLabel,
      hideIcon,
      note,
      options,
      keyFailedData,
      customIcon
    },
    index,
  ) {
    let propsInput = {
      key: index,
      lightLabel,
      label,
      placeholder,
      value,
      onChangeText: onChange,
      hideIcon,
      note,
      keyFailedData,
      inputType,
      customIcon
    };

    function onChange(value) {
      updateForm(keyName, value);
    }

    if (inputType === 'picker') {
      return (
        <PickerInputItem
          {...propsInput}
          value={(form[keyName] || {}).value}
          options={options}
          onSelect={onChange}
        />
      );
    }

    if (inputType === 'date' || inputType === 'time') {
      return (
        <DatePickerItem
          {...propsInput}
          value={form[keyName]}
          onSelect={onChange}
          mode={inputType}
        />
      );
    }

    switch (inputType) {
      case 'text':
        propsInput.textInputProps = {
          autoCapitalize: 'words',
          keyboardType: 'default',
        };
        break;
      case 'email':
        propsInput.textInputProps = {
          keyboardType: 'email-address',
          autoCapitalize: 'none',
        };
        break;
      case 'password':
        textInputPropsDerived = {
          autoCapitalize: 'none',
        };
        propsInput.textInputProps = {
          autoCapitalize: 'none',
        };
        propsInput.secureTextEntry = true;
        break;
    }

    return useMemo(() => (

      <TextInputItem {...propsInput} value={form[keyName]} />


    ));
  }

  return formData.map(renderMultipleInputsOrSingleInput);
}

export default memo(FormBuilder);
