import { config } from "@fortawesome/fontawesome-svg-core";

export const validate = (element, formdata = []) => {
  let error = [true, ""];

  if (element.validation.email) {
    const valid = /\S+@\S+\.\S+/.test(element.value);
    const message = `${!valid ? "Must be a valid email" : ""}`;
    error = !valid ? [valid, message] : error;
  }

  if (element.validation.required) {
    const valid = element.value.trim() !== "";
    const message = `${!valid ? "This field is required" : ""}`;
    error = !valid ? [valid, message] : error;
  }
  return error;
};

export const update = (element, formdata, formName) => {
  const newFormdata = {
    ...formdata
  }; // using a new variable to we dont accidently mutate the original data
  console.log(newFormdata);

  const newElement = {
    ...newFormdata[element.id]
  };
  console.log(newElement);

  newElement.value = element.event.target.value;

  if (element.blur) {
    let validData = validate(newElement, formdata);
    newElement.valid = validData[0];
    newElement.validationMessage = validData[1];
  }
  newElement.touched = element.blur;
  newFormdata[element.id] = newElement;

  return newFormdata;
};
