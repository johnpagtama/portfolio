import navData from './nav.json';
import { INav } from './nav.interface';
import useScroll from '../../../hooks/useScroll';

export default function Nav() {
	const nav: INav[] = navData;

	return (
		<nav className='fixed flex w-screen top-0 px-10'>
			<a href='#home' className='flex-auto px-3 py-2 text-lg'>
				☣️
			</a>
			{nav.map(({ title, section }) => (
				<a
					key={`nav-${title}`}
					href={section}
					className='flex-none px-3 py-2 text-slate-700 text-lg'>
					{title}
				</a>
			))}
		</nav>
	);
}
