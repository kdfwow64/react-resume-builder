import React, { Fragment, useState } from 'react';
import UseHackerNewsApi from './UseHackerNewsApi';

const Hook = () => {
	const [query, setQuery] = useState('redux');
	const { data, isLoading, isError, doFetch } = UseHackerNewsApi(
		{
			hits: []
		},
		'http://hn.algolia.com/api/v1/search?query=redux'
	);

	return (
		<Fragment>
			<form
				onSubmit={event => {
					doFetch(`http://hn.algolia.com/api/v1/search?query=${query}`);
					event.preventDefault();
				}}
			>
				<input type='text' value={query} onChange={event => setQuery(event.target.value)} />
				<button type='submit'>Search</button>
			</form>

			{isError && <div>Something went wrong ...</div>}
			{isLoading ? (
				<div>Loading...</div>
			) : (
				<ul>
					{data.hits.map(item => (
						<li key={item.objectID}>
							<a href={item.url}>{item.title}</a>
						</li>
					))}
				</ul>
			)}
		</Fragment>
	);
};

export default Hook;
