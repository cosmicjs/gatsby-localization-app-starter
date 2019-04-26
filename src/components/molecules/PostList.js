import React from 'react';
import styled from '@emotion/styled';

import PostTile from '../atoms/PostTile';

const PostListContainer = styled.section`
	display: flex;
`;

export default function PostList({ posts, locale, ...rest }) {
	return (
		<PostListContainer {...rest}>
			{posts.map(({ node: postNode }) => (
				<PostTile
					key={postNode.slug}
					intendedLocale={locale.intendedLocale}
					{...postNode}
				/>
			))}
		</PostListContainer>
	);
}