import { TParamType } from "./types";

export function getParamsType(requestParams: TParamType) {
  // Switch statement
  switch (requestParams) {
    case "array_of_objects":
      return "array of objects";
    case "array_of_strings":
      return "array of strings";
    case "none":
      return "This method does not accept any parameters.";
    default:
      return requestParams;
  }
}
