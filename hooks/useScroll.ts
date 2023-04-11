import { useState, useEffect } from 'react';

const useScroll = () => {
	// Checks position of scrollbar
	const [scrollState, setScrollState] = useState(0);

	useEffect(() => {
		const boxShadow = {
			boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
		};

		const boxShadowNone = {
			boxShadow: 'none',
		};

		// Applies box-shadow when scrolling down
		const handleScroll = () =>
			setScrollState(
				Math.floor(window.scrollY) === 0
					? +boxShadowNone
					: +boxShadow
			);

		window.addEventListener('scroll', handleScroll);
	}, []);

	return scrollState;
};

export default useScroll;
