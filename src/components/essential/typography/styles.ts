import styled, { css, StyledProps } from 'styled-components';

import { ALIGN, COLORS, TRANSFORMS } from './options';

const themeOrColor = (value, theme) =>
	COLORS[value] ? COLORS[value](theme.palette) : value;

const propsBasedStyle = ({
	color,
	align = 'left',
	transform = 'none',
	theme,
	underline,
}: StyledProps<TypographyProps>) => css`
	color: ${color && themeOrColor(color, theme)};

	text-align: ${ALIGN[align]};
	text-decoration: ${underline && 'underline'};
	text-transform: ${TRANSFORMS[transform]};
`;

export const bodyStyle = () => css`
	font-family: 'Mangueira';
`;

const fontStyle = (bold: boolean) => css`
	font-family: ${(!bold && '"Mangueira"') || '"Mangueira-Bold"'};
`;

export const title = styled.h1.attrs(() => ({
	className: 'text-6xl',
}))<StyledProps<TypographyProps>>`
	font-family: 'Mangueira';
	font-weight: 700;
	line-height: 1.28;

	${(props) => propsBasedStyle(props)}
`;

export const subtle = styled.h2.attrs(() => ({
	className: 'text-5xl',
}))<StyledProps<TypographyProps>>`
	font-family: 'Mangueira';
	line-height: 1.25;

	${({ bold }) => fontStyle(bold)}
	${(props) => propsBasedStyle(props)}
`;

export const heading = styled.h3.attrs(() => ({
	className: 'text-2xl',
}))<StyledProps<TypographyProps>>`
	font-family: 'Mangueira';
	line-height: 1.54;

	${({ bold }) => fontStyle(bold)}
	${(props) => propsBasedStyle(props)}
`;

export const kicker = styled.h4.attrs(() => ({
	className: 'text-xl',
}))<StyledProps<TypographyProps>>`
	font-family: 'Mangueira';

	${(props) => propsBasedStyle(props)}
`;

export const body = styled.span.attrs(() => ({
	className: 'text-base',
}))<StyledProps<TypographyProps>>`
	${() => bodyStyle()}
	${({ bold }) => fontStyle(bold)}
    ${(props) => propsBasedStyle(props)}
`;

export const footnote = styled.span.attrs(() => ({
	className: 'text-sm',
}))<StyledProps<TypographyProps>>`
	font-family: 'Mangueira';

	${(props) => propsBasedStyle(props)}
`;
