import Logo from './components/Logo'
import FormGroup from './components/FormGroup'
import './App.sass'

const App = () => {
  return (
    <div className="wrapper">
      <Logo color="#ccc" />
      <FormGroup title="HEX" placeholder="#FFFFFF" name="HEX-input" />
      <FormGroup title="RGB" placeholder="rgb(255, 255, 255)" name="RGB-input" />
      <FormGroup title="HSL" placeholder="hsl(0, 0%, 100%)" name="HSL-input" />
      <FormGroup title="CMYK" placeholder="cmyk(0, 0, 0, 0)" name="CMYK-input" />
    </div>
  )
}

export default App