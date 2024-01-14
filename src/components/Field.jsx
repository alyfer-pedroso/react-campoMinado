import params from "../params";
import Mine from "./Mine";
import Flag from "./Flag";

const styles = {
  field: {
    height: `${params.blockSize}px`,
    width: `${params.blockSize}px`,
    borderWidth: `${params.borderSize}px`,
    borderStyle: "solid",
  },
  regular: {
    backgroundColor: "#999",
    borderLeftColor: "#cccccc",
    borderTopColor: "#CCC",
    borderRightColor: "#333",
    borderBottomColor: "#333",
  },
  opened: {
    backgroundColor: "#999",
    borderColor: "#777",
    alignItems: "center",
    justifyContent: "center",
  },
  label: {
    fontWeight: "bold",
    fontSize: `${params.fontSize}px`,
    color: "#fff",
  },
  exploded: {
    backgroundColor: "red",
    borderColor: "red",
  },
};

const Field = (props) => {
  const { mined, opened, nearMines, exploded, flagged } = props;
  let styleField = [styles.field];
  let color = null;

  if (opened) styleField.push(styles.opened);
  if (exploded) styleField.push(styles.exploded);
  if (flagged) styleField.push(styles.flagged);
  if (!opened && !exploded) styleField.push(styles.regular);

  if (nearMines > 0) {
    if (nearMines == 1) color = "#0400ff";
    if (nearMines == 2) color = "#6aff00";
    if (nearMines > 2 && nearMines < 6) color = "#9c0003";
    if (nearMines >= 6) color = "#00d0ff";
  }
  styles.label = { ...styles.label, color: color };

  styleField = styleField.reduce((objetoAcumulado, objetoAtual) => {
    return { ...objetoAcumulado, ...objetoAtual };
  }, {});

  return (
    <div onClick={props.onOpen} onContextMenu={props.onSelect}>
      <div className={`${!opened ? "cursor" : ""}`} style={styleField}>
        {!mined && opened && nearMines > 0 ? <p style={styles.label}>{nearMines}</p> : false}
        {mined && opened ? <Mine /> : false}
        {flagged && !opened ? <Flag /> : false}
      </div>
    </div>
  );
};

export default Field;
