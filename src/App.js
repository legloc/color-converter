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

  const maskTo = (format, value) => {
    if (format === 'hex') return `${ value[0] !== '#' ? '#' : '' }${ value }`
    if (format === 'rgb') return `rgb(${ value })`
    if (format === 'hsl') return `hsl(${ value[0] },${ value[1] }%,${ value[2] }%)`
    if (format === 'cmyk') return `cmyk(${ value })`
  }

  const handleHEXchange = e => {
    setState({
      hex: maskTo('hex', e),
      rgb: maskTo('rgb', convert.hex.rgb(e)),
      hsl: maskTo('hsl', convert.hex.hsl(e)),
      cmyk: maskTo('cmyk', convert.hex.cmyk(e))
    })
  }

  const handleRGBchange = e => {
    let substring = e.substring(e.indexOf('(') + 1, e.indexOf(')'))
    let value = substring.replaceAll(' ', '').split(',')
    
    setState({
      hex: maskTo('hex', convert.rgb.hex(value)),
      rgb: e,
      hsl: maskTo('hsl', convert.rgb.hsl(value)),
      cmyk: maskTo('cmyk', convert.rgb.cmyk(value))
    })
  }

  const handleHSLchange = e => {
    let substring = e.substring(e.indexOf('(') + 1, e.indexOf(')')).replaceAll('%', '')
    let value = substring.split(', ')

    setState({
      hex: maskTo('hex', convert.hsl.hex(value)),
      rgb: maskTo('rgb', convert.hsl.rgb(value)),
      hsl: e,
      cmyk: maskTo('cmyk', convert.hsl.cmyk(value))
    })
  }

  const handleCMYKchange = e => {
    let substring = e.substring(e.indexOf('(') + 1, e.indexOf(')'))
    let value = substring.split(', ')

    setState({
      hex: maskTo('hex', convert.cmyk.hex(value)),
      rgb: maskTo('rgb', convert.cmyk.rgb(value)),
      hsl: maskTo('hsl', convert.cmyk.hsl(value)),
      cmyk: e
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
          onChange={ e => handleHEXchange(e) } />
        <FormGroup
          title="RGB"
          placeholder="rgb(255,255,255)"
          value={ state.rgb }
          onChange={ e => handleRGBchange(e) } />
        <FormGroup
          title="HSL"
          placeholder="hsl(0,0%,100%)"
          value={ state.hsl }
          onChange={ e => handleHSLchange(e) } />
        <FormGroup
          title="CMYK"
          placeholder="cmyk(0,0,0,0)"
          value={ state.cmyk }
          onChange={ e => handleCMYKchange(e) } />
      </div>
    </div>
  )
}

export default App