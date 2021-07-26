import IconCopy from '../icon-copy.svg'

const FormGroup = ({ title, placeholder, name }) => {
  return (
    <div className="form-group">
      <label className="form-label" htmlFor={ name }>{ title }</label>
      <div className="input-group">
        <input className="form-input" id={ name } type="text" placeholder={ placeholder } />
        <button className="input-addon">
          <img className="addon-icon" src={ IconCopy } alt="Copy" />
        </button>
      </div>
    </div>
  )
}

export default FormGroup