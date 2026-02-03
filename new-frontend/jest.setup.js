// jest.setup.js

// Node.js TextEncoder / TextDecoder for jsdom
const { TextEncoder, TextDecoder } = require('util');

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

// Mock localStorage
Object.defineProperty(window, 'localStorage', {
  value: {
    getItem: jest.fn(),
    setItem: jest.fn(),
    removeItem: jest.fn(),
    clear: jest.fn()
  },
  writable: true
});

// Mock Next.js Image
jest.mock("next/image", () => {
  const React = require("react");
  return {
    __esModule: true,
    default: (props) => React.createElement("img", props),
  };
});
