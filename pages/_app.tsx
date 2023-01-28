import "@/styles/globals.css";
import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import Head from "next/head";

// custom page layout type definitions
export type NextPageLayout<P = {}, IP = P> = NextPage<P, IP> & {
	getLayout?: (page: ReactElement) => ReactNode
}
type AppPropsLayout = AppProps & {
	Component: NextPageLayout
}

export default function App({ Component, pageProps }: AppPropsLayout) {
	// custom page layout if available
	const page_layout   = Component.getLayout ?? ((page) => page);
	const page_fallback = {
		page_name:        (pageProps.page_name        !== undefined ? pageProps.page_name        : "Error"),
		page_description: (pageProps.page_description !== undefined ? pageProps.page_description : ""),
	};
	return <>
		<Head>
			<meta charSet="utf-8" />
			<meta name="viewport" content="width=device-width, initial-scale=1" />

			<title>{`${page_fallback.page_name} • RuntimeCloud`}</title>

			<meta property="og:title"       content={`${page_fallback.page_name } • RuntimeCloud`} />
			<meta property="og:image"       content="https://runtimecloud.com/android-chrome-192x192.png"/>
			<meta property="og:description" content={page_fallback.page_description} />
			<meta name="description"        content={page_fallback.page_description} />
			<meta name="theme-color"        content="#007ACC" />

			<link rel="icon"             href="/favicon.ico"   crossOrigin="use-credentials"/>
			<link rel="apple-touch-icon" href="/logo192.png"   crossOrigin="use-credentials"/>
			<link rel="manifest"         href="/manifest.json" crossOrigin="use-credentials"/>
		</Head>
		{page_layout(<Component {...pageProps} />)}
	</>;
}
