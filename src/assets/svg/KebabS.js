import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import ratios from '../../styles/ratios';

let {widthPixel, heightPixel} = ratios;

const KebabS = ({color = '#fff'}) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={widthPixel(4)}
    height={widthPixel(18)}
    viewBox="0 0 4 18"
    fill="none">
    <Path
      fill={color}
      fillRule="evenodd"
      d="M3.88 2.34a1.54 1.54 0 1 1-3.08 0 1.54 1.54 0 0 1 3.08 0Zm0 6.6a1.54 1.54 0 1 1-3.08 0 1.54 1.54 0 0 1 3.08 0Zm-1.54 8.14a1.54 1.54 0 1 0 0-3.08 1.54 1.54 0 0 0 0 3.08Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default KebabS;
