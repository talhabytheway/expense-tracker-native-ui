import * as React from 'react';
import Svg, {Rect, Path} from 'react-native-svg';
import ratios from '../../styles/ratios';

let {widthPixel, heightPixel} = ratios;

const Send = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={widthPixel(66)}
    height={widthPixel(66)}
    viewBox="0 0 66 66"
    fill="none"
    {...props}>
    <Rect
      width={64.825}
      height={64.825}
      x={widthPixel(0.661)}
      y={widthPixel(0.661)}
      stroke="#0C0D5B"
      strokeDasharray="5.51 3.31"
      strokeWidth={1.323}
      rx={32.412}
    />
    <Path
      fill="#0C0D5B"
      d="M6 33.562C6 18.34 18.34 6 33.562 6c15.221 0 27.561 12.34 27.561 27.562 0 15.221-12.34 27.561-27.561 27.561C18.34 61.123 6 48.783 6 33.562Z"
    />
    <Path
      fill="#fff"
      d="M41.427 28.978a.47.47 0 0 1 .004.031l.002.029.002.011-.001.006v.006c0 .01-.002.019-.003.028a.458.458 0 0 1-.004.031l-.004.024a.228.228 0 0 1-.006.02l-.001.005a.37.37 0 0 1-.01.03l-.01.022-.008.018-.004.006a.399.399 0 0 1-.015.027l-.014.02-.018.023-.005.007-.006.008a.04.04 0 0 1-.004.004l-.004.003a.444.444 0 0 1-.022.023l-.004.004-4.114 3.628a.43.43 0 0 1-.703-.23.42.42 0 0 1 .135-.4l3.278-2.89H26.427a.424.424 0 0 1-.427-.423c0-.233.191-.422.427-.422h13.461l-3.278-2.89a.419.419 0 0 1-.034-.596.43.43 0 0 1 .602-.034l4.114 3.627.004.005a.049.049 0 0 0 .004.004l.026.025.006.008a.076.076 0 0 0 .005.007l.005.005.014.018.013.02a.427.427 0 0 1 .019.033l.009.018a.321.321 0 0 1 .007.017.37.37 0 0 1 .012.036l.007.024a.357.357 0 0 1 .004.021v.003ZM27.546 38.167h13.462c.235 0 .426.19.426.422a.424.424 0 0 1-.426.422H27.546l3.279 2.891a.419.419 0 0 1-.15.716.43.43 0 0 1-.418-.086l-4.114-3.628-.005-.004a.388.388 0 0 1-.03-.03l-.006-.008a.078.078 0 0 0-.005-.007l-.004-.005a.253.253 0 0 1-.014-.017l-.01-.017-.003-.004a.455.455 0 0 1-.016-.027l-.003-.006-.009-.018-.007-.017-.002-.005a.413.413 0 0 1-.01-.03l-.002-.005-.005-.02-.004-.02v-.004A.408.408 0 0 1 26 38.6V38.579a.39.39 0 0 1 .006-.06v-.003l.005-.02.005-.02.002-.005a.413.413 0 0 1 .01-.03l.002-.006.007-.017.009-.017.003-.007a.457.457 0 0 1 .018-.03l.011-.017.014-.017.005-.006a.371.371 0 0 1 .045-.049l4.114-3.627a.43.43 0 0 1 .602.034.419.419 0 0 1-.034.596l-3.279 2.89Z"
    />
  </Svg>
);
export default Send;
