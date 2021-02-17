/*
  import 'style.css'
  import 'module.js'
      if any of obove imports are not parse by JEST by default U need to mock it by returning this file
here jest is directed for the modules or files extenssios and returns empty string for imports
*/
// mock the window.machMedia as global object attatched to window no need to expoerted
Object.defineProperty(window, 'matchMedia', {
  value: jest.fn(() => ({
    matches: true,
    addListener: jest.fn(),
    removeListener: jest.fn(),
  })),
});

module.exports = '';
