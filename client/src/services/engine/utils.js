export const loadImage = image => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = err => {
      reject(err);
    };
    img.src = image;
  });
};

export const pathArrayToPoints = path => {
  if (typeof path === "string") {
    path = path.match(/([A-z][0-9]+,[0-9]+)/g);
  }

  let p = path
    .filter(p => ["L", "M"].includes(p.slice(0, 1)))
    .map(p => p.slice(1).split(",").map(i => parseInt(i) || 0));
  return p;
};

export const GreenHouseEnum = {
  NONE: 0,
  NOT_FIXED: 1,
  FIXED: 2
};
