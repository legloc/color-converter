import { useState } from 'react'
import convert from 'color-convert'
import Logo from './components/Logo'
import FormGroup from './components/FormGroup'
import './App.sass'

const App = () => {
  const [state, setState] = useState({
    hex: '',
    rgb: '',
    hsl: '',
    cmyk: ''
  })

  const mask = (type, color) => {
    if (type === 'hex') return `${ color[0] !== '#' ? '#' : '' }${ color }`
    if (type === 'rgb') return `rgb(${ color })`
    if (type === 'hsl') return `hsl(${ color[0] },${ color[1] }%,${ color[2] }%)`
    if (type === 'cmyk') return `cmyk(${ color })`
  }

  const parser = (type, color) => {
    if (type !== 'hex')
      return color
        .substring(color.indexOf('(') + 1, color.indexOf(')'))
        .replaceAll(' ', '')
        .replaceAll('%', '')
        .split(',')
        .map(Number)
    else
      return color
  }

  const handleChange = (type, color) => {
    let conversion

    if (type === 'hex') conversion = convert.hex
    if (type === 'rgb') conversion = convert.rgb
    if (type === 'hsl') conversion = convert.hsl
    if (type === 'cmyk') conversion = convert.cmyk

    setState({
      hex: type === 'hex' ? mask('hex', color) : mask('hex', conversion.hex(parser(type, color))),
      rgb: type === 'rgb' ? color : mask('rgb', conversion.rgb(parser(type, color))),
      hsl: type === 'hsl' ? color : mask('hsl', conversion.hsl(parser(type, color))),
      cmyk: type === 'cmyk' ? color : mask('cmyk', conversion.cmyk(parser(type, color)))
    })
  }

  return (
    <div className="wrapper" style={{ 'background': state.hex }}>
      <div className="converter">
        <Logo color={ state.hex } />
        <FormGroup
          title="HEX"
          placeholder="#FFFFFF"
          value={ state.hex }
          onChange={ e => handleChange('hex', e) } />
        <FormGroup
          title="RGB"
          placeholder="rgb(255,255,255)"
          value={ state.rgb }
          onChange={ e => handleChange('rgb', e) } />
        <FormGroup
          title="HSL"
          placeholder="hsl(0,0%,100%)"
          value={ state.hsl }
          onChange={ e => handleChange('hsl', e) } />
        <FormGroup
          title="CMYK"
          placeholder="cmyk(0,0,0,0)"
          value={ state.cmyk }
          onChange={ e => handleChange('cmyk', e) } />
      </div>
    </div>
  )
}

export default App