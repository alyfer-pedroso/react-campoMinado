import { Component } from "react";

import params from "./params";
import MineField from "./components/MineField";
import Header from "./components/Header";

import {
  createMinedBoard,
  cloneBoard,
  openField,
  hasExplosion,
  wonGame,
  showMines,
  invertFlag,
  flagsUsed,
} from "./functions";

import "./App.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = this.createState();
  }

  minesAmount = () => {
    const cols = params.getColumnsAmount();
    const rows = params.getRowsAmount();
    return Math.ceil(cols * rows * params.difficultLevel);
  };

  createState = () => {
    const cols = params.getColumnsAmount();
    const rows = params.getRowsAmount();
    return {
      board: createMinedBoard(rows, cols, this.minesAmount()),
      won: false,
      lost: false,
    };
  };

  onOpenField = (row, column) => {
    const board = cloneBoard(this.state.board);

    if (!this.state.won && !this.state.lost) openField(board, row, column);

    const lost = hasExplosion(board);
    const won = wonGame(board);

    if (lost) {
      showMines(board);
      alert("Perdeeeeu!", "Que buuuurro!");
    }

    if (won) {
      alert("Parabéns", "Você Venceu!");
    }

    this.setState({ board, lost, won });
  };

  onSelectField = (row, column) => {
    const board = cloneBoard(this.state.board);
    invertFlag(board, row, column);
    const won = wonGame(board);

    if (won) {
      alert("Parabéns", "Você Venceu!");
    }

    this.setState({ board, won });
  };

  onLevelSelected = () => {
    if (params.difficultLevel === 0.15) {
      params.difficultLevel = 0.3;
    } else {
      params.difficultLevel = 0.15;
    }
    this.setState(this.createState());
  };

  render() {
    return (
      <div style={styles.container}>
        <Header
          flagsLeft={this.minesAmount() - flagsUsed(this.state.board)}
          onNewGame={() => this.setState(this.createState())}
          onFlagPress={() => this.onLevelSelected()}
        />
        <div style={styles.board}>
          <MineField
            board={this.state.board}
            onOpenField={this.onOpenField}
            onSelectField={this.onSelectField}
          />
        </div>
      </div>
    );
  }
}

const styles = {
  container: {
    height: "100%",
    justifyContent: "flex-end",
  },
  board: {
    alignItems: "center",
    backgroundColor: "#AAA",
  },
};
