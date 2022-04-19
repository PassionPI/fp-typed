import { expectArray, expectObject } from "./expect";

export const parseJSONArray = <T extends unknown[]>(input: string): T => {
  try {
    return expectArray(JSON.parse(input));
  } catch {
    return [] as T;
  }
};

export const parseJSONObject = <T extends object>(input: string): T => {
  try {
    return expectObject(JSON.parse(input));
  } catch {
    return {} as T;
  }
};
