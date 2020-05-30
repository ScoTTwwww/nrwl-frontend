import { getGreeting } from '../support/app.po';

describe('ionic', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to ionic!');
  });
});
