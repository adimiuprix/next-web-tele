'use client';

import { useEffect, useMemo } from 'react';
import {
    SDKProvider,
    useLaunchParams,
    useMiniApp,
    useThemeParams,
    useViewport,
    bindMiniAppCSSVars,
    bindThemeParamsCSSVars,
    bindViewportCSSVars,
} from '@telegram-apps/sdk-react';
import { TonConnectUIProvider } from '@tonconnect/ui-react';
import { AppRoot } from '@telegram-apps/telegram-ui';

import { ErrorBoundary } from './ErrorBoundary'
import { ErrorPage } from './ErrorPage';
import { useTelegramMock } from '../hooks/useTelegramMock';
import { useDidMount } from '../hooks/useDidMount';

function App(props) {
    const lp = useLaunchParams();
    const miniApp = useMiniApp();
    const themeParams = useThemeParams();
    const viewport = useViewport();

    // Bind CSS variables to the root element.
    useEffect(() => {
        return bindMiniAppCSSVars(miniApp, themeParams);
    }, [miniApp, themeParams]);

    // Bind CSS variables to the root element.
    useEffect(() => {
        return bindThemeParamsCSSVars(themeParams);
    }, [themeParams]);

    // Bind CSS variables to the root element.
    useEffect(() => {
        return viewport && bindViewportCSSVars(viewport);
    }, [viewport]);

    return (
        <AppRoot
            appearance={miniApp.isDark ? 'dark' : 'light'}
            platform={['macos', 'ios'].includes(lp.platform) ? 'ios' : 'base'}
        >
            {props.children}
        </AppRoot>
    );
}

function RootInner({ children }) {
    // Mock Telegram environment in development mode if needed.
    if (process.env.NODE_ENV === 'development') {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        useTelegramMock();
    }

    const debug = useLaunchParams().startParam === 'debug';
    const manifestUrl = useMemo(() => {
        return new URL('tonconnect-manifest.json', window.location.href).toString();
    }, []);

    // Enable debug mode to see all the methods sent and events received.
    useEffect(() => {
        if (debug) {
            import('eruda').then(eruda => eruda.default.init());
        }
    }, [debug]);

    return (
        <SDKProvider acceptCustomStyles debug={debug}>
            <TonConnectUIProvider manifestUrl={manifestUrl}>
                <App>{children}</App>
            </TonConnectUIProvider>
        </SDKProvider>
    );
}

export function Wrapper(props) {
    // Unfortunately, Telegram Mini Apps does not allow us to use all features of the Server Side
    // Rendering. That's why we are showing loader on the server side.
    const didMount = useDidMount();

    return didMount ? (
        <ErrorBoundary fallback={ErrorPage}>
            <RootInner {...props} />
        </ErrorBoundary>
    ) : <div className="root__loading">Loading</div>;
}