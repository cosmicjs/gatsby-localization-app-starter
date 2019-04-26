import styled from '@emotion/styled';

import appConfig from '../../../../config';

export default styled.div`
	max-width: ${
		({ maxWidth = appConfig.responsive.defaultContainerMaxWidth }) => maxWidth};
	min-height: ${({ minHeight }) => minHeight};
	margin: 0 auto;
	padding: 0 1rem;
`;