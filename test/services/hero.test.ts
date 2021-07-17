import app from '../../src/app';

describe('\'hero\' service', () => {
  it('registered the service', () => {
    const service = app.service('hero');
    expect(service).toBeTruthy();
  });
});
