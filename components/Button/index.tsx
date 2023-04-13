import { IButton } from './button.interface';

const buttonPrimary =
	'bg-violet-400 hover:shadow m-1 py-2 px-8 rounded transition-shadow text-white font-semibold';

export default function Button({
	onClick = () => console.log('Click'),
	text = 'Primary Button',
}: IButton) {
	return (
		<button onClick={onClick} className={buttonPrimary}>
			{text}
		</button>
	);
}
