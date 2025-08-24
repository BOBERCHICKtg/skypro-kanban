const BaseInput = ({
  tag = "input",
  id,
  name,
  placeholder = "",
  type = "text",
  error = false,
  onChange,
}) => {
  const Component = tag === "textarea" ? StyledTextarea : StyledInput;

  return (
    <Component
      id={id}
      name={name}
      type={type}
      placeholder={placeholder}
      $error={error}
      onChange={onChange}
    />
  );
};

export default BaseInput;
