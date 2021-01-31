const Alert = ({ message }) => {
  if (!message.trim()) {
    return null;
  }
  return (
    <div className="alert alert-warning alert-dismissible fade show" role="alert">
      {message}
    </div>
  );
};

export default Alert;
