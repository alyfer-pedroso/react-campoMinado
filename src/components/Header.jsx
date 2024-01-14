import Flag from "./Flag";
const Header = (props) => {
  return (
    <div style={styles.container}>
      <div style={styles.flagContainer}>
        <div style={styles.flagButton} onClick={props.onFlagPress}>
          <Flag bigger />
        </div>
        <p style={styles.flagsLeft}>= {props.flagsLeft}</p>
      </div>
      <div style={styles.button} onClick={props.onNewGame}>
        <p style={styles.buttonLabel}>Novo Jogo</p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#09aaf3",
    alignItems: "center",
    justifyContent: "space-around",
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  flagContainer: {
    flexDirection: "row",
  },
  flagButton: {
    // marginTop: 10,
    width: 60,
    height: 50,
    borderRadius: 20,
    backgroundColor: "#5ac7f9",
    paddingLeft: "1.2rem",
    cursor: "pointer",
  },
  flagsLeft: {
    fontSize: 30,
    fontWeight: "bold",
    paddingTop: 5,
    marginLeft: 20,
  },
  button: {
    marginTop: "1rem",
    backgroundColor: "lightblue",
    padding: 5,
    borderRadius: 15,
    paddingHorizontal: 20,
    paddingVertical: 5,
    cursor: "pointer",
  },
  buttonLabel: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
  },
};

export default Header;
