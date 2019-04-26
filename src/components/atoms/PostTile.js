import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import moment from 'moment';
import { readableColor, darken } from 'polished';

import appConfig from '../../../config';

const { primaryAccent } = appConfig.theme;

const PostTileWrapper = styled.article`
	position: relative;
	width: 300px;
	padding: 1rem;

	background-color: rgba(0,0,0,0.05);

	h2 {
		color: ${darken(0.2, primaryAccent)};
		margin-top: 0;
		line-height: 1;
	}

	margin: 0 1rem 1rem 0;

	@media(max-width: 600px) {
		margin: 0 0 1rem;
	}
`;

const PostTileLink = styled(Link)`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display: block;
`;

export default function PostTile({
	title, slug, created_at: createdAt, intendedLocale,
}) {
	return (
		<PostTileWrapper>
			<header>
				<h2>
					{title}
				</h2>
				<time className="created" dateTime={createdAt}>
					{moment(createdAt).format('LL')}
				</time>
			</header>
			<PostTileLink
				title={title}
				to={`/${intendedLocale}/posts/${slug}`}
			/>
		</PostTileWrapper>
	);
}