import React, { PureComponent } from "react";
import PropTypes from "prop-types";

class Input extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {flag: false};
    this.setRef = this.setRef.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    const { name, onChange } = this.props;
    if(parseInt(e.target.value)>=20){
      this.setState({flag:false});
    }else{
      this.setState({flag:true})
    }
    if (onChange) {
      onChange(name, e.target.value);
    }
  }
  componentDidMount() {
    if (this.props.autoFocus) {
      this.ref.focus();
    }
  }
  componentDidUpdate() {
    if (this.props.autoFocus) {
      this.ref.focus();
    }
  }
  setRef(ref) {
    this.ref = ref;
  }
  render() {
    const { errorMessage, label, name, value, type, onFocus } = this.props;
    return (
      <div className="input-field">
        <input
          id={`input_${name}`}
          className={`validate ${errorMessage && (this.state.flag ? 'incalid':'valid')}`}
          ref={this.setRef}
          onChange={this.handleChange} //input의 내용 변경되면 handleChange()호출
          onFocus={onFocus}
          value={value}
          type={type}
        />
        
        <label className="active" htmlFor={`input_${name}`}>
          {label}
        </label>
        {errorMessage && <span className="helper-text" data-error={errorMessage} data-success="맞는 입력입니다">{errorMessage}</span>}
      </div>
    );
  }
}

Input.propTypes = {
  type: PropTypes.oneOf(["text", "number", "price", "password"]),
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  errorMessage: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  autoFocus: PropTypes.bool,
};

Input.defaultProps = {
  onChange: () => {},
  onFocus: () => {},
  autoFocus: false,
  type: "text",
};

export default Input;
