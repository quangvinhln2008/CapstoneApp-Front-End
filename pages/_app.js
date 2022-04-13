import React from 'react';
import '../styles/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../components/layouts/Header';
import Container from '../components/layouts/Container';
import Navigation from '../components/layouts/Navigation';

// eslint-disable-next-line react/prop-types
function MyApp({ Component, pageProps }) {
	// eslint-disable-next-line react/react-in-jsx-scope
	// eslint-disable-next-line react/prop-types
	if (Component.getLayout) {
		// eslint-disable-next-line react/prop-types
		return Component.getLayout(<Component {...pageProps} />);
	}
	return (
		<>
			<Header />
			<Container>
				<Navigation></Navigation>
				<Component {...pageProps} />
			</Container>
		</>
	);
}
export default MyApp;
