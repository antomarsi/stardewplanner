export const loadImage = image => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = err => {
      reject(err);
    }
    img.src = image;
  });
};

export const pathArrayToPoints = path => {
  if (typeof path === "string") {
    path = path.match(/([A-Z][0-9]+,[0-9]+)/);
  }
  return path.filter(p => p.slice(0, 1) !== "L").map(p => p.slice(1, -1).split(","));
}
