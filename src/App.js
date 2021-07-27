import { useState } from 'react'
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

  return (
    <div className="wrapper" style={{ 'background': state.hex }}>
      <div className="converter">
        <Logo color={ state.hex } />
        <FormGroup
          type="hex"
          placeholder="#FFFFFF"
          value={ state.hex }
          onChange={ e => setState(e) } />
        <FormGroup
          type="rgb"
          placeholder="rgb(255,255,255)"
          value={ state.rgb }
          onChange={ e => setState(e) } />
        <FormGroup
          type="hsl"
          placeholder="hsl(0,0%,100%)"
          value={ state.hsl }
          onChange={ e => setState(e) } />
        <FormGroup
          type="cmyk"
          placeholder="cmyk(0,0,0,0)"
          value={ state.cmyk }
          onChange={ e => setState(e) } />
      </div>
    </div>
  )
}

export default App