export const getOmitObj = (initialObj, omitKey: string) => {
  const newObj = Object.keys(initialObj)
    .filter((key) => key !== omitKey)
    .reduce((res, key) => {
      res[key] = initialObj[key];
      return res;
    }, {});

  return newObj || initialObj;
};
