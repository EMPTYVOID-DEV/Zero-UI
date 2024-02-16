export type variant = {
  files: string[];
  packages?: string[];
  icons?: string[];
};

export type registryType = {
  [component: string]: {
    [otherVariant: string]: variant;
  };
};
