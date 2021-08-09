import '@testing-library/jest-dom';

import renderer from 'react-test-renderer';

import { Site } from '../../models/server/schema';
import SiteListItem from './SiteListItem';

describe('<SiteListItem />', () => {
  test('renders snapshot full address', () => {
    const site: Site = {
      name: 'Site Name',
      address: {
        street: 'street',
        locality: 'locality',
        region: 'region',
        postalCode: 'postalCode',
      },
    };
    const tree = renderer.create(<SiteListItem site={site} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('renders snapshot missing address', () => {
    const site: Site = { name: 'Site Name' };
    const tree = renderer.create(<SiteListItem site={site} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('renders snapshot missing properties', () => {
    const site: Site = {};
    const tree = renderer.create(<SiteListItem site={site} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
