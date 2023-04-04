import ElementHandler from '../../helpers/ElementHandler';

// prettier-ignore
const pageElements = {
  'page footer': { selector: () => '.footer-legal', type: 'web' },
  'loading indicator': { selector: () => '.loader-container', type: 'web' },
  'email suggestion prompt': { selector: () => '[data-e2e="email-suggestion-button"]', type: 'labelHTML' },
}

export default class Page extends ElementHandler {
  constructor(elements, baseElement = null) {
    super({ ...elements, ...pageElements }, baseElement);
  }
}
