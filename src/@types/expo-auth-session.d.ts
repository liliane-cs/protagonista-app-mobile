declare module "expo-auth-session" {
  export function startAsync(options: unknown): Promise<unknown>;
  export function makeRedirectUri(options?: unknown): string;
}
