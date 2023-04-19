import * as React from 'react';
import Svg, {G, Rect, Path, Defs, ClipPath} from 'react-native-svg';
const ArrowPink = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={36}
    height={36}
    fill="none"
    {...props}>
    <G clipPath="url(#a)">
      <Rect
        width={36}
        height={36}
        fill="#fff"
        rx={8.8}
        transform="matrix(0 1 1 0 0 0)"
      />
      <Rect
        width={35}
        height={35}
        x={0.5}
        y={0.5}
        stroke="#C4EAE3"
        rx={8.3}
        transform="matrix(0 1 1 0 0 0)"
      />
      <Path
        fill="#FDB2AD"
        fillRule="evenodd"
        d="m16.106 11.269 6.78 5.883a.576.576 0 0 1 0 .896l-6.78 5.883a1.176 1.176 0 0 1-1.496 0 .836.836 0 0 1 0-1.298l5.8-5.033-5.8-5.033a.836.836 0 0 1 0-1.298 1.176 1.176 0 0 1 1.496 0Z"
        clipRule="evenodd"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Rect
          width={36}
          height={36}
          fill="#fff"
          rx={8.8}
          transform="matrix(0 1 1 0 0 0)"
        />
      </ClipPath>
    </Defs>
  </Svg>
);
export default ArrowPink;
