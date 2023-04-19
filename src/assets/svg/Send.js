import * as React from 'react';
import Svg, {Rect, Path} from 'react-native-svg';
const Send = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={56}
    height={56}
    fill="none"
    {...props}>
    <Rect
      width={54.68}
      height={54.68}
      x={0.66}
      y={0.66}
      stroke="#0C0D5B"
      strokeDasharray="5.5 3.3"
      strokeWidth={1.32}
      rx={27.34}
    />
    <Rect
      width={46.667}
      height={46.667}
      x={4.667}
      y={4.667}
      fill="#0C0D5B"
      rx={23.333}
    />
    <Path
      fill="#fff"
      fillRule="evenodd"
      d="M34.527 23.901a.33.33 0 0 1 .005.05v.005a.03.03 0 0 1 .001.005v.01a.325.325 0 0 1-.006.05v.004a.496.496 0 0 1-.018.063l-.002.005-.006.014a.168.168 0 0 1-.007.015l-.003.005a.372.372 0 0 1-.013.023l-.003.003a.255.255 0 0 1-.02.029l-.004.005-.004.005-.005.007-.004.003-.003.003a.317.317 0 0 1-.019.02l-.003.003-3.484 3.071a.364.364 0 0 1-.594-.194.355.355 0 0 1 .114-.34l2.775-2.447H21.828a.36.36 0 0 1-.361-.357.36.36 0 0 1 .36-.357h11.397l-2.775-2.447a.354.354 0 0 1-.029-.504.364.364 0 0 1 .51-.03l3.483 3.072a.032.032 0 0 1 .003.003.026.026 0 0 0 .003.004l.012.011.01.01.006.007a.059.059 0 0 0 .004.006l.004.005.011.014.01.015.002.003a.347.347 0 0 1 .013.022l.01.02.006.015.002.005a.332.332 0 0 1 .008.025l.006.021a.332.332 0 0 1 .004.02Zm-11.751 7.78h11.396c.2 0 .361.16.361.357a.36.36 0 0 1-.36.357H22.775l2.775 2.447a.355.355 0 0 1-.127.607.364.364 0 0 1-.353-.073l-3.484-3.072a.043.043 0 0 1-.003-.003.317.317 0 0 1-.019-.019l-.003-.003-.004-.004a.057.057 0 0 1-.005-.006l-.004-.006-.004-.005-.011-.014-.01-.014a.344.344 0 0 1-.026-.046l-.005-.015a.382.382 0 0 1-.01-.03l-.002-.004-.004-.017a.227.227 0 0 1-.004-.017v-.003a.33.33 0 0 1-.005-.05v-.005a.03.03 0 0 1 0-.01v-.005a.325.325 0 0 1 .005-.05v-.003a.257.257 0 0 1 .004-.017c0-.006.003-.011.004-.017l.002-.005a.347.347 0 0 1 .01-.03l.006-.014a.225.225 0 0 1 .01-.02.328.328 0 0 1 .025-.04l.011-.015a.084.084 0 0 0 .007-.008l.014-.016a.354.354 0 0 1 .015-.014c0-.002.002-.003.003-.004a.043.043 0 0 1 .003-.004l3.484-3.07a.364.364 0 0 1 .509.028.354.354 0 0 1-.029.504l-2.775 2.448Z"
      clipRule="evenodd"
    />
    <Path
      fill="#fff"
      d="m34.53 23.927-.248.024.249-.024Zm-.003-.026-.246.042.246-.042Zm.005.05-.25.008.25-.008Zm0 .005-.246.036.247-.036Zm.001.007.25.021-.25-.02Zm0 .008-.25-.007.25.007Zm-.002.024.248.024-.248-.024Zm-.004.026.246.043-.246-.043Zm0 .004-.247-.042.247.042Zm-.004.016.244.057-.244-.057Zm-.004.017-.24-.072.24.072Zm-.002.005.24.071-.24-.072Zm-.008.025.233.09-.233-.09Zm-.002.005-.234-.089.234.089Zm-.006.014-.227-.103.227.103Zm-.007.015-.22-.12.22.12Zm-.003.005.22.118-.22-.118Zm-.013.023.21.134h.001l-.211-.134Zm-.003.003-.211-.133.211.133Zm-.009.014-.203-.146.203.146Zm-.011.015.191.16-.191-.16Zm-.004.005-.193-.16.193.16Zm-.004.005-.208-.14.208.14Zm-.005.007-.186-.168.186.168Zm-.004.003.157.195-.157-.195Zm-.003.003-.181-.172.18.172Zm-.016.016.17.183-.17-.183Zm-.003.003-.19-.162.19.162Zm-.003.004.165.187-.166-.187Zm-3.484 3.071-.165-.188.165.188Zm-.353.073-.078.238.078-.238Zm-.127-.606.165.188-.165-.188Zm2.775-2.447.166.187.496-.438h-.662v.25Zm0-.715v.25h.662l-.496-.438-.166.188Zm-2.775-2.447-.166.187.166-.187Zm-.029-.504.186.167-.186-.167Zm.51-.03.165-.187-.166.188Zm3.483 3.072-.166.187.166-.187Zm.003.003.19-.161-.19.162Zm.003.004-.17.183.17-.183Zm.012.011.174-.18-.174.18Zm.01.01.186-.167-.006-.006-.006-.006-.173.18Zm.006.007.207-.14-.207.14Zm.004.006-.193.16.193-.16Zm.004.005.191-.161-.191.16Zm.011.014-.203.146.203-.146Zm.01.015.212-.133-.212.133Zm.002.003-.212.133.212-.133Zm.013.022.22-.117-.22.117Zm.01.02-.228.103.228-.103Zm.006.015.234-.088-.234.088Zm.002.005.233-.09-.233.09Zm.008.025.24-.071-.24.071Zm.006.021-.243.057.243-.057Zm-11.747 7.8-.166-.188-.496.438h.662v-.25Zm0 .714v-.25h-.662l.496.438.166-.188Zm2.775 2.447-.165.188.165-.188Zm.114.34-.244-.051.244.05Zm-.24.267-.078-.238.077.238Zm-.354-.073.165-.188-.165.188Zm-3.484-3.072-.165.188.165-.188Zm-.003-.003.19-.162-.19.162Zm-.003-.004-.17.183.17-.183Zm-.016-.015.181-.172-.18.172Zm-.003-.003-.158.194.158-.194Zm-.004-.004-.186.168.186-.167Zm-.005-.006.208-.14-.208.14Zm-.004-.006.193-.16-.193.16Zm-.004-.005-.191.161.191-.16Zm-.011-.014.203-.146-.203.146Zm-.01-.014-.211.133.212-.133Zm-.002-.003-.211.133.211-.133Zm-.013-.023-.22.117.22-.117Zm-.003-.006.22-.12-.22.12Zm-.007-.014.228-.103-.228.103Zm-.006-.015.234-.088-.234.088Zm-.002-.004-.233.09.233-.09Zm-.008-.026-.24.072.24-.072Zm-.002-.004.24-.073-.24.073Zm-.004-.017-.244.057.244-.057Zm-.004-.017-.246.042.246-.042Zm0-.003-.247.042.247-.042Zm-.004-.026.25-.024-.25.024Zm-.001-.024.25-.007-.25.007Zm0-.005.247-.036-.248.036Zm0-.01-.248-.037.247.037Zm0-.005.25.007-.25-.007Zm.001-.024-.248-.024.248.024Zm.004-.026.246.042-.246-.042Zm0-.003.247.042-.247-.042Zm.004-.017-.244-.057.244.057Zm.004-.017-.24-.072.24.072Zm.002-.005-.24-.071.24.072Zm.008-.025-.233-.09.233.09Zm.002-.005-.234-.088.234.088Zm.006-.014.227.103-.227-.103Zm.007-.015.22.12-.22-.12Zm.003-.005-.22-.117.22.117Zm.013-.023.212.134-.212-.134Zm.002-.003-.212-.133.212.133Zm.01-.014.203.146-.203-.146Zm.011-.015.192.16-.192-.16Zm.004-.005.193.16-.193-.16Zm.003-.003.2.149-.2-.149Zm.014-.016.174.18.007-.007-.181-.173Zm.015-.014.17.183-.17-.183Zm.003-.004-.19-.162.19.162Zm.003-.004-.165-.187.165.187Zm3.484-3.07-.165-.189.165.188Zm.509.028-.186.168.186-.168Zm-.029.504.166.188-.166-.188Zm9.229-5.33a.606.606 0 0 0-.006-.044l-.493.084v.008l.498-.048Zm.002.041-.002-.04-.498.047a.04.04 0 0 1 0 .008l.5-.015Zm-.002-.024v.005l.002.019-.5.015.002.024.002.01.494-.073Zm.003.041-.001-.03-.002-.011-.495.072v-.006a.21.21 0 0 1-.002-.025h.5Zm0 .023v-.023h-.5l.001-.019.498.042Zm0-.006-.002.018v.007-.004l.001-.015-.498-.042.001-.01v-.002.001l-.001.011-.002.022.5.015Zm-.004.041c.001-.009.003-.024.003-.04l-.5-.015v.007l.498.048Zm-.005.045a.602.602 0 0 0 .005-.044l-.497-.049-.001.008.493.085Zm0 .003a.06.06 0 0 0 0-.003l-.493-.085v.004l.492.084Zm-.007.031a.466.466 0 0 0 .006-.031l-.493-.084v.004-.002l.487.113Zm-.009.033.009-.033-.487-.114a.03.03 0 0 1 0-.003v.005l.478.145Zm-.001.003.001-.003-.479-.145-.001.005.479.143Zm-.015.044a.597.597 0 0 0 .015-.044l-.479-.143-.002.007.466.18Zm-.001.003.001-.003-.466-.18-.003.006.468.177Zm-.012.03.012-.03-.468-.177.456.207Zm-.016.03c.002-.003.01-.016.016-.03l-.456-.207a.054.054 0 0 1 .003-.005l-.002.003.44.24Zm-.001.003.001-.003-.439-.239-.004.008.442.234Zm-.023.04a.666.666 0 0 0 .023-.04l-.442-.234a.135.135 0 0 1-.004.006l.423.268Zm-.002.003c0-.002.001-.002.002-.003l-.422-.268-.003.004.423.267Zm-.018.026a.518.518 0 0 0 .018-.027l-.423-.266-.003.004.002-.003.406.292Zm-.023.03.024-.03-.407-.291.383.32Zm-.002.003s0-.002.002-.003l-.383-.322c0 .002-.003.004-.005.006l.386.319Zm.01-.015-.001.003a.198.198 0 0 1-.01.012l-.385-.319-.019.026.415.278Zm-.027.036a.303.303 0 0 0 .027-.036l-.415-.278.003-.004a.189.189 0 0 1 .014-.017l.371.335Zm-.032.03.003-.003.007-.005a.267.267 0 0 0 .023-.023l-.372-.334a.23.23 0 0 1 .025-.024l.315.389Zm.02-.02a.255.255 0 0 1-.015.016l-.005.004-.314-.389-.008.007a.268.268 0 0 0-.02.018l.363.345Zm-.025.026a.707.707 0 0 0 .026-.025l-.362-.345-.005.005.34.365Zm.017-.017-.004.004a.277.277 0 0 1-.013.014l-.341-.366a.277.277 0 0 0-.024.024l.382.324Zm-.029.03a.274.274 0 0 0 .021-.021l.008-.01-.382-.323c0 .002.002-.001.005-.005a.232.232 0 0 1 .017-.016l.331.374Zm-3.483 3.07 3.483-3.07-.33-.376-3.484 3.072.33.375Zm-.597.124c.207.067.434.02.597-.124l-.331-.374a.114.114 0 0 1-.111.022l-.155.476Zm-.408-.454a.608.608 0 0 0 .408.454l.155-.476a.109.109 0 0 1-.073-.08l-.49.102Zm.194-.578a.605.605 0 0 0-.194.578l.49-.102a.105.105 0 0 1 .034-.1l-.33-.376Zm2.775-2.447-2.776 2.447.331.375 2.776-2.447-.331-.375Zm-11.231.438h11.396v-.5H21.828v.5Zm-.611-.608a.61.61 0 0 0 .61.608v-.5a.11.11 0 0 1-.11-.108h-.5Zm.61-.607a.61.61 0 0 0-.61.607h.5a.11.11 0 0 1 .11-.107v-.5Zm11.397 0H21.828v.5h11.396v-.5Zm-2.94-2.01 2.775 2.448.33-.376-2.775-2.447-.33.375Zm-.05-.859a.604.604 0 0 0 .049.859l.331-.375a.104.104 0 0 1-.008-.149l-.372-.335Zm.86-.05a.614.614 0 0 0-.86.05l.372.335a.114.114 0 0 1 .158-.009l.33-.375Zm3.484 3.072-3.483-3.071-.33.375 3.482 3.071.33-.375Zm.029.03-.008-.01a.284.284 0 0 0-.021-.02l-.33.375a.24.24 0 0 1-.018-.017l-.005-.005.382-.323Zm-.017-.018a.208.208 0 0 1 .017.018l-.382.323.007.008.017.017.34-.366Zm.015.015-.015-.015-.341.366.008.008.348-.36Zm.01.01-.01-.01-.348.359.011.01.347-.36Zm.04.047s-.012-.017-.028-.035l-.371.335a.2.2 0 0 1-.014-.017l-.003-.004.415-.28Zm-.011-.014.009.012.001.002-.415.279a.3.3 0 0 0 .02.025l.385-.318Zm.002.003-.002-.003-.386.318.005.006.383-.321Zm.024.03a.454.454 0 0 0-.024-.03l-.383.321.407-.291Zm.017.027c-.002-.004-.009-.016-.018-.028l-.406.292-.001-.002.002.003.423-.265Zm.002.002-.002-.002-.423.265.002.004.423-.267Zm.023.039a.605.605 0 0 0-.023-.04l-.423.268.004.007.441-.235Zm.017.034a.408.408 0 0 0-.012-.024l-.005-.01-.442.235a.46.46 0 0 0 .004.007c0 .002.001.002.002.003l-.003-.005.456-.206Zm.012.03a.459.459 0 0 0-.012-.03l-.455.207.467-.178Zm.001.003-.001-.003-.468.177.002.005.467-.18Zm.015.043a.578.578 0 0 0-.015-.043l-.467.179.003.008.479-.143Zm.01.037a.458.458 0 0 0-.009-.032v-.004l-.48.142.002.007v.003-.003l.487-.113Zm.007.034-.007-.035-.487.114v-.002.007l.494-.084Zm-.602 7.572H22.776v.5h11.396v-.5Zm.611.607a.61.61 0 0 0-.61-.607v.5a.11.11 0 0 1 .11.107h.5Zm-.61.607a.61.61 0 0 0 .61-.607h-.5a.11.11 0 0 1-.11.107v.5Zm-11.397 0h11.396v-.5H22.776v.5Zm2.94 2.01-2.775-2.447-.33.375 2.775 2.447.33-.375Zm.194.578a.605.605 0 0 0-.194-.578l-.33.375c.03.026.042.064.035.1l.489.103Zm-.408.453a.609.609 0 0 0 .408-.453l-.49-.102a.109.109 0 0 1-.073.08l.155.475Zm-.597-.123c.163.144.39.19.597.123l-.155-.475a.114.114 0 0 1-.11-.023l-.332.375Zm-3.483-3.071 3.483 3.071.33-.375-3.482-3.071-.33.375Zm-.029-.03.008.01a.284.284 0 0 0 .021.02l.33-.375a.205.205 0 0 1 .018.017l.005.005-.382.323Zm.017.018a.206.206 0 0 1-.017-.018l.382-.323-.007-.008-.017-.017-.34.366Zm-.026-.026a.636.636 0 0 0 .026.026l.341-.366a.07.07 0 0 1-.005-.004l-.362.344Zm.02.02c.002 0 0-.002-.004-.005a.198.198 0 0 1-.016-.015l.362-.345a.268.268 0 0 0-.027-.024l-.314.388Zm-.032-.031.023.022.007.006.002.002.316-.388.005.005.02.018-.373.335Zm-.026-.035s.01.017.026.035l.372-.335a.203.203 0 0 1 .017.021l-.415.28Zm.01.014a.204.204 0 0 1-.009-.012l-.001-.002.415-.279s-.008-.012-.02-.025l-.385.318Zm-.002-.003.002.003.386-.318a.261.261 0 0 0-.005-.006l-.383.321Zm-.024-.03c.01.015.02.027.024.03l.383-.321-.407.291Zm-.017-.026.018.027.406-.292c0 .002.002.003.002.003l-.003-.004-.423.266Zm-.002-.003.002.003.423-.266-.003-.004-.422.267Zm-.023-.039a.635.635 0 0 0 .023.039l.423-.267-.004-.007-.442.235Zm-.001-.003.001.003.442-.234a.277.277 0 0 1-.004-.008l-.44.239Zm-.016-.031.016.03.439-.238a.032.032 0 0 0-.002-.003l.003.005-.456.206Zm-.012-.03.012.03.455-.207-.467.178Zm-.001-.002.001.003.468-.177-.003-.006-.466.18Zm-.015-.044a.567.567 0 0 0 .015.044l.466-.18-.002-.008-.479.144Zm-.001-.004.001.004.48-.143a.294.294 0 0 0-.002-.006l-.479.145Zm-.009-.032.009.032.479-.145-.002-.004.001.003-.487.114Zm-.006-.032.006.032.487-.114v.003-.005l-.493.084Zm0-.002v.002l.493-.084v-.004l-.493.086Zm-.006-.045a.666.666 0 0 0 .005.044l.493-.084v-.008l-.498.048Zm-.003-.041c0 .017.002.032.003.04l.497-.047v-.007l-.5.014Zm.002.024v-.005a.194.194 0 0 1-.002-.019l.5-.015a.29.29 0 0 0-.002-.024l-.002-.01-.494.073Zm-.003-.041.001.03.002.011.495-.072a.243.243 0 0 1 .002.031h-.5Zm.003-.042-.002.012a.292.292 0 0 0-.001.03h.5a.243.243 0 0 1-.002.031l-.495-.073Zm-.002.024.001-.019v-.005l.495.073.002-.01a.29.29 0 0 0 .002-.024l-.5-.014Zm.003-.04a.579.579 0 0 0-.003.04l.5.015v-.007l-.497-.048Zm.005-.045a.55.55 0 0 0-.005.045l.497.048.001-.008-.493-.085Zm0-.002v.003l.493.084v-.003l-.492-.084Zm.007-.032a.441.441 0 0 0-.006.032l.493.084v-.005.002l-.487-.113Zm.009-.032-.009.032.487.114v.003-.005l-.478-.144Zm.001-.004-.001.004.479.144.001-.005-.479-.143Zm.015-.044a.626.626 0 0 0-.015.044l.48.143a.159.159 0 0 1 .002-.007l-.467-.18Zm.001-.003-.001.003.466.18.003-.006-.468-.177Zm.012-.03-.012.03.468.177-.456-.206Zm.016-.03c-.002.003-.01.016-.016.031l.456.206-.003.005.002-.003-.44-.24Zm.001-.003-.001.003.439.239.004-.008-.442-.234Zm.023-.04a.592.592 0 0 0-.023.04l.442.234.004-.006-.423-.268Zm.001-.002a.032.032 0 0 1-.001.003l.423.267.002-.004-.424-.266Zm.018-.027-.018.027.424.266a.29.29 0 0 0 .002-.004l-.001.003-.406-.292Zm.024-.03-.024.03.407.291-.383-.32Zm.003-.003-.003.003.383.322a.174.174 0 0 1 .005-.006l-.386-.319Zm-.007.008.001-.001.005-.006.386.318a.254.254 0 0 0 .01-.014l-.402-.297Zm.041-.047a.368.368 0 0 0-.04.047l.402.297a.107.107 0 0 1-.013.015l-.349-.359Zm.02-.019a.69.69 0 0 0-.026.026l.362.345.004-.005-.34-.366Zm-.018.018.004-.003a.228.228 0 0 1 .013-.014l.341.365a.326.326 0 0 0 .017-.017l.007-.007-.382-.324Zm.029-.03a.26.26 0 0 0-.029.03l.382.324c0-.002-.002.001-.005.005a.213.213 0 0 1-.017.017l-.331-.375Zm3.483-3.07-3.483 3.07.33.376 3.484-3.071-.33-.375Zm.86.049a.614.614 0 0 0-.86-.05l.33.376a.114.114 0 0 1 .16.009l.37-.335Zm-.048.858a.605.605 0 0 0 .049-.858l-.372.335c.04.043.036.11-.008.15l.331.373Zm-2.776 2.448 2.776-2.447-.331-.375-2.776 2.447.331.375Z"
    />
  </Svg>
);
export default Send;