import React from "react";

import { FormWrapperStyle } from "./FormWrapper.style";

type FormWrapperProps = {
  children?: any;
  leftImage?: string;
  topHeading?: string;
  formHeading?: string;
};

const FormWrapper = (props: FormWrapperProps) => {
  const { children, leftImage, topHeading, formHeading } = props;

  return (
    <FormWrapperStyle>
      {leftImage && (
        <section className="left-side">
          <img className="side-image" src={leftImage} alt="side visual" />
        </section>
      )}

      <section className="right-side">
        {topHeading && <h1 className="top-heading">{topHeading}</h1>}
        <article className="form-wrapper">
          {formHeading && <h3 className="form-heading">{formHeading}</h3>}

          {children}
        </article>
      </section>
    </FormWrapperStyle>
  );
};

export default FormWrapper;