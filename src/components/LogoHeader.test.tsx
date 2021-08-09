import '@testing-library/jest-dom';

import renderer from 'react-test-renderer';

import LogoHeader from './LogoHeader';

describe('<LogoHeader />', () => {
  test('renders LogoHeader snapshot', () => {
    const tree = renderer.create(<LogoHeader />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
