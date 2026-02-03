// __mocks__/axios.js
const mockAxios = {
  create: jest.fn(() => mockAxios),

  interceptors: {
    request: { use: jest.fn() },
    response: { use: jest.fn() }
  },

  get: jest.fn(),
  post: jest.fn(),
  put: jest.fn(),
  delete: jest.fn(),
};

module.exports = mockAxios;
