import { Image } from 'react-native';

const CustomImage = (props) => {
  return (
    <Image
      source={props.imagenya}
      style={props.imagestyle}
    />
  );
}

export default CustomImage;
