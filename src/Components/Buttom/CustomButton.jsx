import React from "react";
//import "./CustomButtom.css";
import "./CustomButtom.css";
import { Button } from "reactstrap"; // optional — or just use <button>

function CustomButton({ label, color = "primary", onClick, disabled }) {
  return (
    <Button
      color={color}
      onClick={onClick}
      disabled={disabled}
      className="custom-button"
    >
      {label}
    </Button>
  );
}

export default CustomButton;
