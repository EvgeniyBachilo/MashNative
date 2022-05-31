import React from "react";
import { useFormikContext } from "formik";

import ImageInputList from "./ImageInputList";
import ErrorMessage from "./ErrorMessage";

const FormImagePicker = ({ name }) => {
  const { setFieldValue, values, errors, touched } = useFormikContext();


  const handleAdd = (image) => {
    setFieldValue(name, [...values[name], image]);
  };
  const handleRemove = (image) => {
    setFieldValue(
      name,
      values[name].filter((item) => item !== image)
    );
  };

  return (
    <>
      <ImageInputList
        uris={values[name]}
        onAddImage={handleAdd}
        onRemoveImage={handleRemove}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default FormImagePicker;
