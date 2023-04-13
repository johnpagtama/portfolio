import { NextApiRequest, NextApiResponse } from 'next';
import path from 'path';
import { promises as fs } from 'fs';
import { INav } from '../../../components/Nav/nav.interface';

export default async function getNavData(
	req: NextApiRequest,
	res: NextApiResponse<INav[]>
) {
	const navDirectory: string = path.join(process.cwd(), 'json/nav');

	const navContents: INav[] = JSON.parse(
		await fs.readFile(`${navDirectory}/nav.json`, 'utf-8')
	);

	res.status(200).json(navContents);
}
