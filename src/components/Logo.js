import SvgColor from 'react-svg-color'
import LogoIcon from '../logo.svg'

const Logo = ({ color }) => (
  <div className="logo">
    <SvgColor svg={ LogoIcon } width={ 80 } colors={[ color, color, color, color, color, color, color ]} />
    <h1 className="logo-title">Color Converter</h1>
  </div>
)

export default Logo