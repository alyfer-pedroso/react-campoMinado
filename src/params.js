const params = {
  blockSize: 30,
  borderSize: 5,
  fontSize: 15,
  headerRatio: 0.15,
  difficultLevel: 0.1,
  getColumnsAmount() {
    const width = screen.width / 1.35;
    return Math.floor(width / this.blockSize);
  },
  getRowsAmount() {
    const totalHeight = screen.height / 1.5;
    const boardHeight = totalHeight * (1 - this.headerRatio);
    return Math.floor(boardHeight / this.blockSize);
  },
};
export default params;
