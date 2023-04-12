import useSWR from 'swr';
import { INav } from '../../api/nav/nav.interface';
import useScroll from '../../../hooks/useScroll';

export default function Nav() {
	const { data: nav, error } = useSWR('/api/nav/getNav', (url: string) =>
		fetch(url).then((r) => r.json())
	);

	if (error) return <div>Navbar failed to load</div>;

	if (!nav) return <div>Loading...</div>;

	return (
		<nav className='fixed flex w-screen top-0 px-10'>
			<a href='#home' className='flex-auto px-3 py-2 text-lg'>
				☣️
			</a>
			{nav.map(({ title, section }: INav) => (
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
