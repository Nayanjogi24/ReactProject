import React from "react";
import "./TextInput.css";
import { Input, Label, FormGroup, FormFeedback } from "reactstrap";

function CustomInput({
  id,
  label,
  type = "text",
  value,
  onChange,
  placeholder,
  error,
  touched,
  required = false,
}) {
  return (
    <FormGroup className="custom-input-group">
      {label && (
        <Label for={id} className="custom-input-label">
          {label} {required && <span className="required">*</span>}
        </Label>
      )}

      <Input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        invalid={touched && !!error} // shows red border if error
        className="custom-input"
      />

      {/* Error Message */}
      {touched && error && <FormFeedback>{error}</FormFeedback>}
    </FormGroup>
  );
}

export default CustomInput;
