import { MouseEventHandler } from 'react';

export interface IButton {
	onClick?: MouseEventHandler;
	text: string;
}
