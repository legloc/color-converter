import Logo from './components/Logo'
import FormGroup from './components/FormGroup'
import './App.sass'

const App = () => {
  return (
    <div className="wrapper">
      <Logo color="#ccc" />
      <FormGroup
        title="HEX"
        placeholder="#FFFFFF"
        mask="#******" />
      <FormGroup
        title="RGB"
        placeholder="rgb(255, 255, 255)"
        mask="rgb(999, 999, 999)" />
      <FormGroup
        title="HSL"
        placeholder="hsl(0, 0%, 100%)"
        mask="hsl(999, 999%, 999%)" />
      <FormGroup
        title="CMYK"
        placeholder="cmyk(0, 0, 0, 0)"
        mask="cmyk(999, 999, 999, 999)" />
    </div>
  )
}

export default App