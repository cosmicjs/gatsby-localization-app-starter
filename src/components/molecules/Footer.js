import React from 'react';
import styled from '@emotion/styled';
import { readableColor, lighten } from 'polished';

import appConfig from '../../../config';

import Container from '../layouts/common/Container';

import LocaleSelector from '../atoms/LocaleSelector';

const { primaryAccent } = appConfig.theme;

export const FooterWrapper = styled.footer`
	padding: 2.5rem 1rem;
	background-color: ${lighten(0.2, primaryAccent)};
	color: ${readableColor(primaryAccent)};
`;

export default function Footer({ locale, children }) {
	return (
		<FooterWrapper>
			<Container>
				<LocaleSelector
					{...locale}
				/>
				{children}
			</Container>
		</FooterWrapper>
	);
}