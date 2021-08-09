import '@testing-library/jest-dom';

import { cleanup, fireEvent, render } from '@testing-library/react';
import renderer from 'react-test-renderer';

import { SitesHeader } from './SitesHeader';

describe('<SitesHeader />', () => {
  afterEach(cleanup);

  test('matches snapshot', () => {
    const toggleView = jest.fn();
    const icon = 'icon';
    const title = 'Page Title';
    const tree = renderer.create(<SitesHeader title={title} icon={icon} toggleView={toggleView} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('renders page title', () => {
    const toggleView = jest.fn();
    const icon = 'icon';
    const title = 'Page Title';
    const { queryByText } = render(<SitesHeader title={title} icon={icon} toggleView={toggleView} />);

    expect(queryByText('Page Title')).toBeTruthy();
  });

  test('calls toggle', () => {
    const toggleView = jest.fn();
    const icon = 'icon';
    const title = 'Page Title';
    const { getByTestId } = render(<SitesHeader title={title} icon={icon} toggleView={toggleView} />);

    expect(toggleView).not.toHaveBeenCalled();
    fireEvent.click(getByTestId('button'));
    expect(toggleView).toHaveBeenCalled();
  });
});
