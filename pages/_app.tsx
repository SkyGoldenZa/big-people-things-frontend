import { useEffect } from 'react';
import { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useAtom } from 'jotai';
import { ThemeProvider } from 'styled-components';

import { isDarkThemeAtom, isThemeLoadingAtom } from 'atoms'
import { lightTheme, darkTheme, GlobalStyles } from 'styles/styles';
import { getLocalStorage } from 'utils/localStorage';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  const localDarkTheme = async () => await getLocalStorage('isDarkTheme');
  const [isDarkTheme, setIsDarkTheme] = useAtom(isDarkThemeAtom);
  const [isThemeLoading, setIsThemeLoading] = useAtom(isThemeLoadingAtom);
  const theme = isDarkTheme ? darkTheme : lightTheme;

  const awaitingLocalDarkTheme = async () => {
    setIsThemeLoading(true);
    await setIsDarkTheme(await localDarkTheme());
    setIsThemeLoading(false);
  }

  useEffect(() => {
    awaitingLocalDarkTheme();
  }, [])

  return (
    <>
      {!isThemeLoading && (
        <ThemeProvider theme={theme}>
          <GlobalStyles />

          <QueryClientProvider client={queryClient}>
            <Component {...pageProps} />
          </QueryClientProvider>
        </ThemeProvider>
      )}
    </>
  );
}

export default MyApp;
