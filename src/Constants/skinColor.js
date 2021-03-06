const skinColor = {
  white: '#ffb69e',
  latin: '#C68642',
  black: '#8D5524',
  randomSkinColor() {
    const items = [this.white, this.latin, this.black];
    return items[Math.floor(Math.random() * items.length)];
  },
};

export { skinColor as default };
