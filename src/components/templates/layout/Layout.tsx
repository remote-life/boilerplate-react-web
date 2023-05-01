import React, { ReactNode } from 'react';

import Footer from '../../slices/footer/Footer';

interface LayoutPropTypes {
	children: ReactNode;
}

export default function Layout({ children }: LayoutPropTypes) {
	return (
		<div className='h-full flex mx-auto flex-col'>
			<header className='container flex items-center h-20 fixed top-0 left-0 right-0 mx-auto bg-white'>
				<img
					src='assets/imgs/png/logo.png'
					className='w-52'
					alt='logo'
				/>
			</header>
			<div className='container flex flex-col flex-1 m-auto mt-20'>
				<div className='bg-slate-100 flex-1'>{children}</div>
			</div>
			<Footer />
		</div>
	);
}
