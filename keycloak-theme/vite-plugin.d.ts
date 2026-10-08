declare module "keycloakify/vite-plugin" {
    import type { Plugin } from "vite";

    export function keycloakify(options: {
        accountThemeImplementation?: "none" | "default";
    }): Plugin;
}
