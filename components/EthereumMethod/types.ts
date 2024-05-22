export type TParamType =
  | "string"
  | "number"
  | "integer"
  | "boolean"
  | "array"
  | "object"
  | "array_of_objects"
  | "array_of_strings"
  | "none";

export type CodeSnippetObject = {
  language: "js" | "shell" | "node" | "go" | "python" | "rust";
  code: () => string;
};
