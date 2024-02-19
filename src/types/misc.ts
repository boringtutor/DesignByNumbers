export type ParsedAstType = {
  type: string;
  body: {
    type: string;
    name?: string;
    value?: string;
    arguments?: {
      type: string;
      value: string;
    }[];
  }[];
};
