import React from 'react';
import withLayout from '../components/templates/layout/withLayout';

import Typography from '../components/essential/typography/Typography';
import withTheme from '../hocs/withTheme';

export { withLayoutPage as Page };

const FontSection = ({ variant, text }: { variant: string; text: string }) => {
	return (
		<div>
			<h1 className='text-5xl'>{variant}</h1>
			<hr />
			{[
				'primary',
				'secondary',
				'background',
				'foreground',
				'highlight',
				'grey',
				'white',
				'info',
				'success',
				'danger',
				'warning',
			].map((color) => (
				<Typography
					key={`${variant}-${color}`}
					variant={variant}
					text={text}
					color={color}
				/>
			))}
			{['left', 'center', 'right', 'justify'].map((align) => (
				<Typography
					key={`${variant}-${align}`}
					variant={variant}
					text={text}
					align={align}
				/>
			))}
			{['lowercase', 'uppercase'].map((transform) => (
				<Typography
					key={`${variant}-${transform}`}
					variant={variant}
					text={text}
					transform={transform}
				/>
			))}
			<Typography variant={variant} text={text} underline />
		</div>
	);
};

function Page() {
	return (
		<>
			<FontSection
				variant='title'
				text='Seu próximo passo para uma carreira internacional de sucesso'
			/>
			<FontSection
				variant='subtle'
				text='Uma nova jornada na sua carreira'
			/>
			<FontSection
				variant='heading'
				text='Texto sobreposto a um artigo'
			/>
			<FontSection variant='kicker' text='O outro lado da tecnologia' />
			<FontSection
				variant='body'
				text='Grandes porções de textos usariam esta variante.'
			/>
			<FontSection
				variant='footnote'
				text='Uma nota de rodapé seria interessante'
			/>
		</>
	);
}

const withLayoutPage = withTheme(withLayout(Page));
