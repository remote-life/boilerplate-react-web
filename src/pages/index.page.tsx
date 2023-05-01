import React from 'react';
import {
	Body,
	Footnote,
	Heading,
	Kicker,
	Subtle,
	Title,
} from '../components/essential/typography/Typography';
import withLayout from '../components/templates/layout/withLayout';
import withTheme from '../hocs/withTheme';

export { withLayoutPage as Page };

function Page() {
	return (
		<div className='w-96'>
			<Title text='Seu próximo passo para uma carreira internacional de sucesso' />
			<Subtle text='Uma nova jornada na sua carreira' />
			<Heading text='Texto sobreposto a um artigo' />
			<Kicker text='O outro lado da tecnologia' />
			<Body text='Grandes porções de textos usariam esta variante.' />
			<br />
			<Footnote text='Uma nota de rodapé seria interessante' />
		</div>
	);
}

const withLayoutPage = withTheme(withLayout(Page));
