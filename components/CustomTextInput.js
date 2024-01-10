import { TextInput } from 'react-native';

const CustomTextInput = (props) => {
  return (
    <TextInput
      placeholder={props.placeholder}
      style={props.textinputstyle}
      id={props.nama}
      onChangeText={props.onChangeText}
    />
  );
}

export default CustomTextInput;