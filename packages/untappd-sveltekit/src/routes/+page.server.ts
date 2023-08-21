import type { UserData } from '$lib/types';
import sqlite3 from 'sqlite3';

const DB_NAME = '../../db_data/users_data.db';

export async function load(): Promise<{ users: UserData[] }> {
	const db = new sqlite3.Database(DB_NAME);
	return new Promise((resolve, reject) => {
		db.all('SELECT * FROM users_data', (err, rows: UserData[]) => {
			db.close();
			if (err) {
				reject({ status: 500, body: 'Database error' });
			} else {
				resolve({
					users: rows
				});
			}
		});
	});
}
