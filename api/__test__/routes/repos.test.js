jest.mock('axios');
const app = require('../../src/app');
const axios = require('axios');
const localData = require('../../data/repos.json');
const request = require('supertest');

describe('GET /repos', () => {
  describe('with valid tags and path return posts', () => {
    test('retun posts with status 200', async () => {
      axios.get.mockResolvedValue(localData);
      const response = await request(app).get('/repos');
      expect(response.status).toBe(200);
      expect(response.headers['content-type']).toEqual(
        expect.stringContaining('json')
      );
      // expect(response.body).toEqual({ posts: postData.data.posts });
    });
  });
});
