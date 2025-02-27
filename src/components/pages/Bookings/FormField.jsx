const FormField = ({ children, label, htmlFor, hasError, errorMessage }) => {
  return (
    <div className="form-field">
      <label htmlFor={htmlFor}>{label}</label>
      {children}
      {hasError && <p data-testid="error-message">{errorMessage}</p>}
    </div>
  );
};

export default FormField;
