import React, { useState } from 'react';
import { TextInput } from 'react-native';

const FormUser = () => {

  const [value, onChangeText] = useState('TA GRAND MERE !');

  return (
    <TextInput
      style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
      onChangeText={text => onChangeText(text)}
      value={value}
    />
  )
}

export default FormUser;