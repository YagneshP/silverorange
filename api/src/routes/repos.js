import { Router, Request, Response } from 'express';
import axios from 'axios';
export const repos = Router();
const localData = require('../../data/repos.json');

repos.get('/', async (_, res) => {
  try {
    const response = await axios(
      'https://api.github.com/users/silverorange/repos'
    );
    const githubRepos = response.data;

    res.header('Cache-Control', 'no-store');

    res.status(200);

    // TODO: See README.md Task (A). Return repo data here. You’ve got this!
    res.json(repos.data);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: 'error.message' });
  }
});
