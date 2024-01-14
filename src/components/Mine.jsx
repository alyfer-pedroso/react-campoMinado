const styles = {
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  coreMine: {
    height: "14px",
    width: "14px",
    borderRadius: "10px",
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  line: {
    position: "absolute",
    height: "3px",
    width: "20px",
    borderRadius: "3px",
    backgroundColor: "black",
  },
};

const Mine = () => {
  return (
    <div style={styles.container}>
      <div style={styles.coreMine} />
      <div style={styles.line} />
      <div style={{ ...styles.line, transform: "rotate(45deg)" }} />
      <div style={{ ...styles.line, transform: "rotate(90deg)" }} />
      <div style={{ ...styles.line, transform: "rotate(135deg)" }} />
    </div>
  );
};

export default Mine;
