import React from "react";
import { CheckboxWithContent } from "..";

import { TaxPayerStep1Style } from "./TaxPayerStep1.style";

const TaxPayerStep1 = () => {
  return (
    <TaxPayerStep1Style>
      <CheckboxWithContent />
      <CheckboxWithContent />
      <CheckboxWithContent />
    </TaxPayerStep1Style>
  );
};

export default TaxPayerStep1;
