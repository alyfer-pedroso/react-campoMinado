import Field from "./Field";

const MineField = (props) => {
  const rows = props.board.map((row, r) => {
    const columns = row.map((field, c) => {
      return (
        <Field
          {...field}
          key={c}
          onOpen={() => props.onOpenField(r, c)}
          onSelect={() => props.onSelectField(r, c)}
        />
      );
    });
    return (
      <div key={r} style={{ flexDirection: "row" }}>
        {columns}
      </div>
    );
  });
  return <div style={styles.container}>{rows}</div>;
};

export default MineField;

const styles = {
  container: {
    // flexDirection: "row",
    backgroundColor: "#EEE",
  },
};
