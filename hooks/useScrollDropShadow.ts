import { useState, useEffect } from 'react';

const useScrollDropShadow = () => {
	// Checks position of scrollbar
	const [scrollDropShadowState, setScrollDropShadowState] = useState(0);

	useEffect(() => {
		const boxShadow = {
			boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
		};

		const boxShadowNone = {
			boxShadow: 'none',
		};

		// Applies box-shadow when scrolling down
		const handleScrollDropShadow = () =>
			setScrollDropShadowState(
				Math.floor(window.scrollY) === 0
					? +boxShadowNone
					: +boxShadow
			);

		window.addEventListener('scroll', handleScrollDropShadow);
	}, []);

	return scrollDropShadowState;
};

export default useScrollDropShadow;
