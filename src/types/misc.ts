export type ParsedAstType = {
  type: string;
  body: {
    type: string;
    name?: string;
    value?: number;
    arguments?: {
      type: string;
      value: number;
    }[];
  }[];
};
