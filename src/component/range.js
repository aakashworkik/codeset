import React from "react";
import "./range.scss";

// Acceptance criteria
// Mobile first design
// focus e.g. outline over buttons and input + the rest
// hover - over button
// label above on desktop left from it on mobile
//// flex-direction

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
