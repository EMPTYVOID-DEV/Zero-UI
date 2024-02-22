export type variant = {
  files: string[];
  packages?: string[];
  icons?: string[];
  variants?: string[];
};

export type registryType = {
  [component: string]: {
    [otherVariant: string]: variant;
  };
};
