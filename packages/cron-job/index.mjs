import fetch from 'node-fetch';
import sqlite3 from 'sqlite3';
import cron from 'node-cron';
import { config } from 'dotenv';

config();

const DB_NAME = '../untappd-sveltekit/users_data.db';
const API_ENDPOINT = 'https://api.untappd.com/v4/user/info/';

const setupDatabase = () => {
    const db = new sqlite3.Database(DB_NAME);
    db.run(`
        CREATE TABLE IF NOT EXISTS users_data (
            username TEXT PRIMARY KEY,
            total_beers INTEGER,
            checkins INTEGER,
            badges INTEGER
        )
    `);
    return db;
};

const fetchUserData = async (username) => {
    const url = `${API_ENDPOINT}${username}?client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}`;
    const response = await fetch(url);
    const data = await response.json();

    return {
        total_beers: data.response.user.stats.total_beers,
        checkins: data.response.user.stats.total_checkins,
        badges: data.response.user.stats.total_badges
    };
};

const writeToDatabase = (db, username, total_beers, checkins, badges) => {
    db.run(`
      INSERT OR REPLACE INTO users_data (username, total_beers, checkins, badges)
      VALUES (?, ?, ?, ?)
    `, [username, total_beers, checkins, badges]);
};

const fetchDataAndUpdate = async () => {
    const db = setupDatabase();
    const user_list = process.env.USERS.split(", ");
    console.log(user_list)// Replace with your list of usernames

    for (let user of user_list) {
        const { total_beers, checkins, badges } = await fetchUserData(user);
        writeToDatabase(db, user, total_beers, checkins, badges);
    }

    db.close();
};

fetchDataAndUpdate();

// Set up the 5-minute interval with node-cron
cron.schedule('*/10 * * * *', fetchDataAndUpdate);

console.log("Fetching process started. Data will be updated every 10 minutes...");