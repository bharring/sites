import '@testing-library/jest-dom';

import { cleanup, fireEvent, render } from '@testing-library/react';
import React from 'react';
import renderer from 'react-test-renderer';

import Menu from './Menu';

describe('<Menu />', () => {
  afterEach(cleanup);
  test('renders Menu snapshot', () => {
    const tree = renderer.create(<Menu />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('clicking Logout item calls logout()', () => {
    const signOutMock = jest.fn();
    jest.spyOn(React, 'useContext').mockImplementation(() => ({ signOut: signOutMock }));

    const { getByTestId } = render(<Menu />);

    expect(signOutMock).not.toHaveBeenCalled();
    fireEvent.click(getByTestId('button'));
    expect(signOutMock).toHaveBeenCalled();
  });
});
