import React from 'react';
import Layout from './Layout';

export default function withLayout(WrappedComponent: React.ComponentType) {
	function hocComponent({ ...props }) {
		return (
			<Layout>
				<WrappedComponent {...props} />
			</Layout>
		);
	}

	return hocComponent;
}
