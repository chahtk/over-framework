export const replaceStyleObject2String = (objStyle: object) => {
  return JSON.stringify(objStyle).slice(1, -1).replaceAll(",", ";").replaceAll('"', "");
};
