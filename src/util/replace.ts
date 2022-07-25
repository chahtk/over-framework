export const replaceStyle = (objStyle: object) => {
  return JSON.stringify(objStyle).slice(1, -1).replaceAll(",", ";").replaceAll('"', "");
};
