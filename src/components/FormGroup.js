import convert from 'color-convert'
import copy from 'copy-to-clipboard'
import IconCopy from '../icon-copy.svg'

const FormGroup = ({ type, placeholder, value, onChange }) => {
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

    onChange({
      hex: type === 'hex' ? mask('hex', color) : mask('hex', conversion.hex(parser(type, color))),
      rgb: type === 'rgb' ? color : mask('rgb', conversion.rgb(parser(type, color))),
      hsl: type === 'hsl' ? color : mask('hsl', conversion.hsl(parser(type, color))),
      cmyk: type === 'cmyk' ? color : mask('cmyk', conversion.cmyk(parser(type, color)))
    })
  }

  return (
    <div className="form-group">
      <label className="form-label" htmlFor={ `${ type }-input` }>{ type.toUpperCase() }</label>
      <div className="input-group">
        <input
          className="form-input"
          id={ `${ type }-input` }
          type="text"
          placeholder={ placeholder }
          value={ value }
          onChange={ e => handleChange(type, e.target.value) } />
        <button className="input-addon" onClick={ () => copy(value) }>
          <img className="addon-icon" src={ IconCopy } alt="Copy" />
        </button>
      </div>
    </div>
  )
}

export default FormGroup