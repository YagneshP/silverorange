import { Router, Request, Response } from 'express';
import axios from 'axios';
export const repos = Router();
const localData = require('../../data/repos.json');

repos.get('/', async (_, res) => {
  try {
    const response = await axios(
      'https://api.github.com/users/silverorange/repos'
    );
    const githubRepos = [...response.data, ...localData];
    const unforkedRepos = githubRepos.filter((repo) => repo.fork === false);
    res.header('Cache-Control', 'no-store');

    res.status(200);

    // return repos which are not forked
    res.json(unforkedRepos);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: 'error.message' });
  }
});
