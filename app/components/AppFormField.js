import React from "react";
import { useFormikContext } from "formik";

import AppTextInput from "./AppTextInput";
import ErrorMessage from "./ErrorMessage";

const AppFormField = ({ name, width, ...otherProps }) => {
  const {
    setFieldValue,
    setFieldTouched,
    errors,
    touched,
    values,
  } = useFormikContext();

  return (
    <>
      <AppTextInput
        {...otherProps}
        onChangeText={(text) => setFieldValue(name, text)}
        onBlur={() => {
          setFieldTouched(name);
        }}
        width={width}
        value={values[name]}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default AppFormField;
