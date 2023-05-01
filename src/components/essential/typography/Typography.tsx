import React from 'react';

import VARIANTS from './variants';

export default function Typography({
	text = '',
	variant = 'body',
	color = 'primary',
	align = 'left',
	transform = 'none',
	underline,
	bold,
}: TypographyProps) {
	const StyledComponent = VARIANTS[
		variant
	] as React.ComponentType<TypographyStyleProps>;
	if (!StyledComponent) {
		throw new Error(`Typography: Invalid variant "${variant}".`);
	}

	const props = {
		color,
		align,
		transform,
		underline,
		bold,
	} as TypographyStyleProps;

	return <StyledComponent {...props}>{text}</StyledComponent>;
}

export const Title = (props: TypographyShortProps) => (
	<Typography {...props} variant='title' />
);
export const Subtle = (props: TypographyShortProps) => (
	<Typography {...props} variant='subtle' />
);
export const Heading = (props: TypographyShortProps) => (
	<Typography {...props} variant='heading' />
);
export const Kicker = (props: TypographyShortProps) => (
	<Typography {...props} variant='kicker' />
);
export const Body = (props: TypographyShortProps) => (
	<Typography {...props} variant='body' />
);
export const Footnote = (props: TypographyShortProps) => (
	<Typography {...props} variant='footnote' />
);
