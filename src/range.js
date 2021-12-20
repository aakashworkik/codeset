import React from "react";

const RangeRenderer = ({
  config: { required, min, max },
  fieldId,
  field,
  increment,
  decrement
}) => (
  <div className="generic-range-stepper">
    <i
      onClick={decrement}
      className="lineicon-thin-0152_minus_delete_remove generic-range-stepper__icon"
    />
    hi
    <input
      type="number"
      min={min}
      max={max}
      required={required}
      className="generic-range-stepper__input"
      id={fieldId}
      {...field}
    />
    <i
      onClick={increment}
      className="lineicon-thin-0151_plus_add_new generic-range-stepper__icon"
    />
  </div>
);
export default RangeRenderer;
