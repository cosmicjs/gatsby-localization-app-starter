import React, { Fragment } from 'react';
import { Global, css } from '@emotion/core';
import { normalize } from 'polished';

const normalizeStyles = normalize();

const globalStyles = css`
	body {
		font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
	}
`;

export default () => (
	<Fragment>
		<Global styles={normalizeStyles} />
		<Global styles={globalStyles} />
	</Fragment>
);
