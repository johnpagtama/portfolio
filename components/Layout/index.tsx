import Nav from '../Nav';
import Button from '../Button';

export default function Layout() {
	return (
		<>
			<Nav />
			<section
				id='home'
				className='min-h-screen bg-fuchsia-400'>
				Home
			</section>
			<section
				id='projects'
				className='min-h-screen bg-violet-400'>
				Projects
			</section>
			<section
				id='resume'
				className='min-h-screen bg-cyan-400'>
				Resume
			</section>
			<section
				id='contact'
				className='min-h-screen bg-emerald-400'>
				Contact
				<Button text='Test' />
			</section>
		</>
	);
}
