function generateId() {
  return `${Date.now()}_${Math.floor(Math.random() * 10000)}`;
}

export default generateId;
