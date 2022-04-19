export const expectArray = <T extends unknown[]>(value: T): T => {
  return (Array.isArray(value) ? value : []) as T;
};

export const expectObject = <T extends object>(value: T): T => {
  if (typeof value != "object" || value == null) {
    return {} as T;
  }
  return value;
};
