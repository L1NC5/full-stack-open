const NotificationMessage = ({ message, variant = "default" }) => {
  const variantColor = {
    default: "green",
    error: "red",
  };

  if (!message) {
    return null;
  }

  return (
    <span
      style={{
        display: "block",
        padding: "0.5rem",
        border: "2px solid",
        borderRadius: "0.25rem",
        backgroundColor: "lightgray",
        color: variantColor[variant],
        borderColor: variantColor[variant],
      }}
    >
      {message}
    </span>
  );
};

export default NotificationMessage;
