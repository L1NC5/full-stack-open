const NotificationMessage = ({ message }) => {
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
        color: "green",
        borderColor: "green",
      }}
    >
      {message}
    </span>
  );
};

export default NotificationMessage;
