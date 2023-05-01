import React from 'react';
import { StyledContainerDiv, StyledBottomDiv } from './styles';

export default function Footer() {
	return (
		<StyledContainerDiv>
			<div className='h-96 flex flex-col'>
				<div className='flex-1 flex flex-row items-center justify-center'>
					<div className='flex m-24'>
						<img
							src='assets/imgs/png/logo-greyscale.png'
							className='w-52'
							alt='logo'
						/>
					</div>
					<div className='flex'>
						<span className='text-white'>Outros Contents</span>
					</div>
				</div>
				<StyledBottomDiv className='h-20 flex items-center justify-center'>
					<span className='text-white'>
						RemoteLife@Copyright 2022
					</span>
				</StyledBottomDiv>
			</div>
		</StyledContainerDiv>
	);
}
