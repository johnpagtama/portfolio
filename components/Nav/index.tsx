import useSWR from 'swr';
import { INav } from './nav.interface';

export default function Nav() {
	const {
		data: nav,
		error,
		isLoading,
	} = useSWR('/api/nav', (url: string) =>
		fetch(url).then((res: Response) => res.json())
	);

	if (error) return <div>Navbar failed to load</div>;

	if (isLoading) return <div>Loading...</div>;

	let navBar = 'fixed flex w-screen top-0 px-10';
	let navLogo = 'flex-auto px-3 py-2 text-lg';
	let navLinks = 'flex-none px-3 py-2 text-slate-700 text-lg';

	return (
		<nav className={navBar}>
			<a href='#home' className={navLogo}>
				☣️
			</a>
			{nav.map(({ title, section }: INav) => (
				<a
					key={`nav-${title}`}
					href={section}
					className={navLinks}>
					{title}
				</a>
			))}
		</nav>
	);
}
