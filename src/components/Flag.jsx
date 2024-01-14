const Flag = (props) => {
  return (
    <div style={styles.container}>
      <div style={styles.containerFlag}>
        <div style={{ ...styles.flagpole, ...(props.bigger ? styles.flagpoleBigger : {}) }} />
        <div style={{ ...styles.flag, ...(props.bigger ? styles.flagBigger : {}) }} />
        <div style={{ ...styles.base1, ...(props.bigger ? styles.base1Bigger : {}) }} />
        <div style={{ ...styles.base2, ...(props.bigger ? styles.base2Bigger : {}) }} />
      </div>
    </div>
  );
};

const styles = {
  container: {
    marginTop: "3px",
    marginLeft: "7px",
  },
  containerFlag: {
    marginTop: "2px",
    position: "relative",
    transform: "scale(1.4)",
  },
  flagpole: {
    position: "absolute",
    height: "14px",
    width: "2px",
    backgroundColor: "#222",
    marginLeft: "9px",
  },
  flag: {
    position: "absolute",
    height: "5px",
    width: "6px",
    backgroundColor: "#f22",
    marginLeft: "3px",
  },
  base1: {
    position: "absolute",
    height: "2px",
    width: "6px",
    backgroundColor: "#222",
    marginLeft: "7px",
    marginTop: "10px",
  },
  base2: {
    position: "absolute",
    height: "2px",
    width: "10px",
    backgroundColor: "#222",
    marginLeft: "5px",
    marginTop: "12px",
  },
  flagpoleBigger: {
    height: "28px",
    width: "4px",
    marginLeft: "16px",
  },
  flagBigger: {
    height: "10px",
    width: "14px",
    marginLeft: "3px",
  },
  base1Bigger: {
    height: "4px",
    width: "12px",
    marginTop: "20px",
    marginLeft: "12px",
  },
  base2Bigger: {
    height: "4px",
    width: "20px",
    marginTop: "24px",
    marginLeft: "8px",
  },
};

export default Flag;
