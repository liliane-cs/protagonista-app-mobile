declare module "expo-auth-session" {
  export function startAsync(options: any): Promise<any>;
  export function makeRedirectUri(options?: any): string;
}
