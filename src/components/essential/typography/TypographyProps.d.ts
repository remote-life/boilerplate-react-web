interface TypographyShortProps {
	text: string;
	color?:
		| 'primary'
		| 'secondary'
		| 'background'
		| 'foreground'
		| 'highlight'
		| 'grey'
		| 'white'
		| 'info'
		| 'success'
		| 'danger'
		| 'warning';
	align?: 'left' | 'center' | 'right' | 'justify';
	transform?: 'none' | 'lowercase' | 'uppercase';
	underline?: bool;
	bold?: bool;
	children?: node;
}

interface TypographyProps extends TypographyShortProps {
	variant: 'title' | 'subtle' | 'heading' | 'kicker' | 'body' | 'footnote';
}
