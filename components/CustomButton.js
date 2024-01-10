import { TouchableOpacity, Text } from 'react-native';

const CustomButton = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={props.buttonStyle}>
      <Text style={props.textStyle}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
