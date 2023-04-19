import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const Hamburger = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}>
    <Path
      stroke="#0C0D5B"
      strokeLinecap="round"
      strokeWidth={2.2}
      d="M2.55 6.55h26.156M2.55 16.45h26.156M2.55 26.35h26.156"
    />
  </Svg>
);
export default Hamburger;
