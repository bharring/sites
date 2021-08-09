import '@testing-library/jest-dom';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';

import { cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';

import SitesMap from './SitesMap';

const mockSprings = {
  id: '00000000-0000-0000-0000-000000000000',
  name: 'Bartons Springs Pool',
  address: {
    street: '2201 William Barton Dr',
    locality: 'Austin',
    region: 'TX',
    postalCode: '78746',
    country: 'US',
  },
  position: {
    latitude: 30.2641138,
    longitude: -97.7734661,
    altitude: null,
  },
};
const mockCapitol = {
  id: '11111111-1111-1111-1111-111111111111',
  name: 'Texas Capitol',
  address: {
    street: '1100 Congress Ave',
    locality: 'Austin',
    region: 'TX',
    postalCode: '78701',
    country: 'US',
  },
  position: {
    latitude: 30.2746698,
    longitude: -97.7425445,
    altitude: null,
  },
};

const center = {
  lat: 30.2746698,
  lng: -97.7425445,
};

describe('<SitesMap />', () => {
  afterEach(cleanup);

  xit('matches snapshot', () => {
    console.log(useJsApiLoader);
    const data = { sitesList: { items: [mockSprings, mockCapitol], nextToken: null, scannedCount: null } };

    const tree = renderer.create(<SitesMap data={data} center={center} />);
    expect(tree).toMatchSnapshot();
  });

  xit('matches snapshot empty list', () => {
    const tree = renderer.create(<SitesMap />);
    expect(tree).toMatchSnapshot();
  });
});
