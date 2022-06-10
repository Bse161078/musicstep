import { Radio } from "antd";
import React, { useState } from "react";
import { RadioButtonStyle } from "./RadioButton.style";

const RadioButton = () => {
  const [value, setValue] = useState(1);

  const onChange = (e: any) => {
    setValue(e.target.value);
  };
  return (
    <RadioButtonStyle>
      <h3 className="heading">
        Please take a moment to let us know why you are leaving:
      </h3>

      <Radio.Group onChange={onChange} value={value}>
        <Radio value={1}>
          <span className="radio-description">The pricing is too high.</span>
        </Radio>
        <Radio value={2}>
          <span className="radio-description">The pricing is confusing.</span>
        </Radio>
        <Radio value={3}>
          <span className="radio-description">
            The product lacks the necessary features.
          </span>
        </Radio>
        <Radio value={4}>
          <span className="radio-description">
            l chose a different solution.
          </span>
        </Radio>
        <Radio value={5}>
          <span className="radio-description">
            I do not recall signing up for MusicPass.
          </span>
        </Radio>
        <Radio value={6}>
          <span className="radio-description">I do not host events.</span>
        </Radio>
        <Radio value={7}>
          <span className="radio-description">
            The product is too difficult to use.
          </span>
        </Radio>
        <Radio value={8}>
          <span className="radio-description">Other (Please explain).</span>
        </Radio>
      </Radio.Group>
    </RadioButtonStyle>
  );
};

export default RadioButton;
