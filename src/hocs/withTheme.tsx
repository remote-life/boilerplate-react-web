import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../themes/light';

export default function withTheme(WrappedComponent) {
	function WithTheme({ ...props }) {
		return (
			<ThemeProvider theme={theme}>
				<WrappedComponent {...props} />
			</ThemeProvider>
		);
	}

	return WithTheme;
}
