/**
 * This file has been claimed for ownership from @keycloakify/login-ui version 250004.8.0.
 * To relinquish ownership and restore this file to its original content, run the following command:
 * 
 * $ npx keycloakify own --path "login/styleLevelCustomization.tsx" --revert
 */

import type { ReactNode } from "react";
import type { ClassKey } from "@keycloakify/login-ui/useKcClsx";

type Classes = { [key in ClassKey]?: string };

type StyleLevelCustomization = {
    doUseDefaultCss: boolean;
    classes?: Classes;
    loadCustomStylesheet?: () => void;
    Provider?: (props: { children: ReactNode }) => ReactNode;
};

export function useStyleLevelCustomization(): StyleLevelCustomization {
    return {
        doUseDefaultCss: true,
        Provider: ({ children }) => (
            <>
                <style>{`
                    :root {
                        --lanka-orange: #f97316;
                        --lanka-orange-dark: #c2410c;
                        --lanka-cream: #fffaf5;
                        --lanka-ink: #1c1917;
                        --lanka-muted: #78716c;
                        --lanka-border: #e7e5e4;
                        --lanka-ring: rgba(249, 115, 22, 0.22);
                    }

                    html,
                    body {
                        min-height: 100%;
                    }

                    body {
                        margin: 0;
                        background:
                            radial-gradient(circle at 8% 0%, rgba(249, 115, 22, 0.13), transparent 30rem),
                            var(--lanka-cream);
                        color: var(--lanka-ink);
                        font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
                    }

                    .login-pf-page {
                        align-items: stretch;
                        background: white;
                        border: 1px solid rgba(231, 229, 228, 0.85);
                        border-radius: 28px;
                        box-shadow: 0 24px 70px rgba(68, 35, 16, 0.13);
                        display: flex;
                        margin: 3rem auto;
                        max-width: 1050px;
                        min-height: 560px;
                        overflow: hidden;
                        width: calc(100% - 3rem);
                    }

                    #kc-header {
                        align-items: flex-start;
                        background:
                            linear-gradient(145deg, rgba(255, 255, 255, 0.12), transparent 58%),
                            var(--lanka-orange);
                        border-radius: 28px 0 0 28px;
                        box-sizing: border-box;
                        color: white;
                        display: flex;
                        flex: 0 1 40%;
                        flex-direction: column;
                        justify-content: center;
                        min-height: 560px;
                        overflow: hidden;
                        padding: 3.5rem;
                        position: relative;
                    }

                    #kc-header::before,
                    #kc-header::after {
                        border: 1px solid rgba(255, 255, 255, 0.28);
                        border-radius: 50%;
                        content: "";
                        position: absolute;
                    }

                    #kc-header::before {
                        height: 19rem;
                        right: -7rem;
                        top: -5rem;
                        width: 19rem;
                    }

                    #kc-header::after {
                        bottom: -9rem;
                        height: 24rem;
                        left: -11rem;
                        width: 24rem;
                    }

                    .lankaspot-logo-frame {
                        align-items: center;
                        background: white;
                        border-radius: 18px;
                        display: flex;
                        height: 112px;
                        justify-content: center;
                        margin-bottom: 2.5rem;
                        padding: 0.65rem;
                        position: relative;
                        width: 150px;
                        z-index: 1;
                    }

                    .lankaspot-logo {
                        display: block;
                        height: auto;
                        max-height: 100%;
                        max-width: 100%;
                        object-fit: contain;
                        width: 100%;
                    }

                    #kc-header-wrapper {
                        font-size: clamp(2rem, 4vw, 3.25rem);
                        font-weight: 800;
                        letter-spacing: -0.06em;
                        line-height: 1.05;
                        max-width: 12ch;
                        position: relative;
                        text-align: left;
                        z-index: 1;
                    }

                    .lankaspot-tagline {
                        color: rgba(255, 255, 255, 0.84);
                        font-size: 0.95rem;
                        line-height: 1.6;
                        margin: 1rem 0 0;
                        max-width: 25ch;
                        position: relative;
                        z-index: 1;
                    }

                    .card-pf {
                        box-sizing: border-box;
                        flex: 1 1 60%;
                        max-width: none;
                        padding: 3.5rem clamp(2rem, 6vw, 5.5rem);
                    }

                    .login-pf-header {
                        border: 0;
                        padding: 0 0 1.75rem;
                    }

                    #kc-page-title {
                        color: var(--lanka-ink);
                        font-size: clamp(1.65rem, 3vw, 2.2rem);
                        font-weight: 750;
                        letter-spacing: -0.04em;
                        margin: 0;
                    }

                    .form-group {
                        margin-bottom: 1.25rem;
                    }

                    .pf-c-form__label,
                    label {
                        color: var(--lanka-ink);
                        font-size: 0.875rem;
                        font-weight: 650;
                        margin-bottom: 0.45rem;
                    }

                    .pf-c-form-control,
                    input[type="text"],
                    input[type="password"],
                    input[type="email"],
                    textarea,
                    select {
                        background: white;
                        border: 1px solid var(--lanka-border);
                        border-radius: 12px;
                        box-sizing: border-box;
                        color: var(--lanka-ink);
                        min-height: 3rem;
                        padding: 0.75rem 0.9rem;
                        transition: border-color 160ms ease, box-shadow 160ms ease;
                        width: 100%;
                    }

                    .pf-c-form-control:focus,
                    input:focus,
                    textarea:focus,
                    select:focus {
                        border-color: var(--lanka-orange);
                        box-shadow: 0 0 0 3px var(--lanka-ring);
                        outline: none;
                    }

                    #kc-form-options {
                        color: var(--lanka-muted);
                    }

                    .checkbox label {
                        align-items: center;
                        display: inline-flex;
                        gap: 0.5rem;
                    }

                    input[type="checkbox"] {
                        accent-color: var(--lanka-orange);
                        height: 1rem;
                        width: 1rem;
                    }

                    a {
                        color: var(--lanka-orange-dark);
                        font-weight: 650;
                    }

                    a:hover {
                        color: var(--lanka-orange);
                    }

                    input[type="submit"],
                    button[type="submit"],
                    #kc-login {
                        background: var(--lanka-orange);
                        border: 0;
                        border-radius: 12px;
                        box-shadow: 0 8px 18px rgba(249, 115, 22, 0.24);
                        color: white;
                        cursor: pointer;
                        font-weight: 750;
                        min-height: 3rem;
                        transition: background 160ms ease, transform 160ms ease, box-shadow 160ms ease;
                    }

                    input[type="submit"]:hover,
                    button[type="submit"]:hover,
                    #kc-login:hover {
                        background: var(--lanka-orange-dark);
                        box-shadow: 0 10px 22px rgba(194, 65, 12, 0.28);
                        transform: translateY(-1px);
                    }

                    .pf-c-alert {
                        border-radius: 12px;
                        margin-bottom: 1.5rem;
                    }

                    .login-pf-signup {
                        background: #fffaf6;
                        border: 1px solid var(--lanka-border);
                        border-radius: 14px;
                        margin-top: 2rem;
                        padding: 1rem 1.25rem;
                    }

                    .kc-social-item,
                    .pf-c-button,
                    button {
                        border-radius: 10px;
                    }

                    .kc-social-item {
                        border: 1px solid var(--lanka-border);
                        color: var(--lanka-ink);
                        transition: background 160ms ease, border-color 160ms ease;
                    }

                    .kc-social-item:hover {
                        background: #fffaf6;
                        border-color: var(--lanka-orange);
                    }

                    @media (max-width: 700px) {
                        .login-pf-page {
                            border-radius: 22px;
                            flex-direction: column;
                            margin: 1rem auto;
                            min-height: 0;
                            width: calc(100% - 2rem);
                        }

                        #kc-header {
                            border-radius: 22px 22px 0 0;
                            min-height: 190px;
                            padding: 2rem 1.5rem;
                        }

                        .lankaspot-logo-frame {
                            height: 72px;
                            margin-bottom: 1.25rem;
                            width: 112px;
                        }

                        #kc-header-wrapper {
                            font-size: 2rem;
                        }

                        .card-pf {
                            padding: 2rem 1.5rem 2.5rem;
                        }
                    }
                `}</style>
                {children}
            </>
        )
    };
}
