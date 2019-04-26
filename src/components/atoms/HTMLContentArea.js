import React from 'react';
import styled from '@emotion/styled';
import renderHTML from 'htmr';

// default styles for static html fetched from cosmic js
import { readableColor, darken } from 'polished';

import appConfig from '../../../config';

const { primaryAccent } = appConfig.theme;

// This is where HTML content stylings would go
const HTMLContentAreaWrapper =  styled.div`
	margin: 2rem 0 2rem;
	line-height: 1.3;

	h1 { font-size: 1.7rem }
	h2 { font-size: 1.5rem }
	h3 { font-size: 1.2rem }
	h4 { font-size: 1.15rem }
	h5 { font-size: 1.06rem }

	h1, h2, h3, h4, h5 {
		color: ${darken(0.2, primaryAccent)};
	}

	b, strong {
		font-weight: 600;
	}

	i, em {
		font-style: italic;
	}

	blockquote {
		opacity: 0.6;
	}

	img {
		display: block;
		margin: 0 auto;
	}
`;

export default function HTMLContentArea({ children, ...rest }) {
	return (
		<HTMLContentAreaWrapper {...rest}>
			{renderHTML(children)}
		</HTMLContentAreaWrapper>
	);
}