import InputMask from 'react-input-mask'
import IconCopy from '../icon-copy.svg'

const FormGroup = ({ title, placeholder, mask }) => {
  return (
    <div className="form-group">
      <label className="form-label" htmlFor={ `${ title }-input` }>{ title }</label>
      <div className="input-group">
        <InputMask
          className="form-input"
          id={ `${ title }-input` }
          type="text"
          mask={ mask }
          placeholder={ placeholder }/>
        <button className="input-addon">
          <img className="addon-icon" src={ IconCopy } alt="Copy" />
        </button>
      </div>
    </div>
  )
}

export default FormGroup