import React, { Fragment } from 'react';
import { Global, css } from '@emotion/core';
import { normalize } from 'polished';

const normalizeStyles = normalize();

const globalStyles = css`
	body {
		font-family: 'Open Sans', 'Franklin Gothic Medium', Arial, sans-serif;
	}
`;

export default () => (
	<Fragment>
		<link href="https://fonts.googleapis.com/css?family=Open+Sans:400,400i,700" rel="stylesheet" />
		<Global styles={normalizeStyles} />
		<Global styles={globalStyles} />
	</Fragment>
);
