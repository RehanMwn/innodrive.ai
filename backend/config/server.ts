type EnvFn = {
  (key: string, fallback?: string): string | undefined;
  int: (key: string, fallback?: number) => number;
  array: (key: string, fallback?: []) => [] | string[];
};

export default ({ env }: { env: EnvFn }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
});
