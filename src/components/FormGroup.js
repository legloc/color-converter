import IconCopy from '../icon-copy.svg'

const FormGroup = ({ title, placeholder, value, onChange }) => {
  return (
    <div className="form-group">
      <label className="form-label" htmlFor={ `${ title }-input` }>{ title }</label>
      <div className="input-group">
        <input
          className="form-input"
          id={ `${ title }-input` }
          type="text"
          placeholder={ placeholder }
          value={ value }
          onChange={ e => onChange(e.target.value) } />
        <button className="input-addon">
          <img className="addon-icon" src={ IconCopy } alt="Copy" />
        </button>
      </div>
    </div>
  )
}

export default FormGroup