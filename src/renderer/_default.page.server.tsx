export { render };
// See https://vite-plugin-ssr.com/data-fetching
export const passToClient = ['pageProps', 'urlPathname'];

import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { escapeInject, dangerouslySkipEscape } from 'vite-plugin-ssr';
import { PageShell } from './PageShell';
import { ServerStyleSheet } from 'styled-components';
import type { PageContextServer } from './types';

async function render(pageContext: PageContextServer) {
	const { Page, pageProps } = pageContext;
	// This render() hook only supports SSR, see https://vite-plugin-ssr.com/render-modes for how to modify render() to support SPA
	const sheet = new ServerStyleSheet();
	if (!Page)
		throw new Error(
			'My render() hook expects pageContext.Page to be defined'
		);
	const pageHtml = ReactDOMServer.renderToString(
		sheet.collectStyles(
			<PageShell pageContext={pageContext}>
				<Page {...pageProps} />
			</PageShell>
		)
	);

	// See https://vite-plugin-ssr.com/head
	const { documentProps } = pageContext.exports;
	const title = (documentProps && documentProps.title) || 'Vite SSR app';
	const desc =
		(documentProps && documentProps.description) ||
		'App using Vite + vite-plugin-ssr';

	const documentHtml = escapeInject`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <link href="/dist/styles.css" rel="stylesheet">
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="${desc}" />
        <title>${title}</title>
		<style>${dangerouslySkipEscape(sheet.getStyleTags())}</style>
      </head>
      <body class="h-screen">
        <div id="page-view" class="h-full">${dangerouslySkipEscape(
		pageHtml
	)}</div>
      </body>
    </html>`;

	return {
		documentHtml,
		pageContext: {
			// We can add some `pageContext` here, which is useful if we want to do page redirection https://vite-plugin-ssr.com/page-redirection
		},
	};
}
