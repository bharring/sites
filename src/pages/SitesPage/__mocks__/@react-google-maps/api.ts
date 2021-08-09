const api: jest.Mocked<typeof import('@react-google-maps/api')> = jest.createMockFromModule('@react-google-maps/api');
api.useJsApiLoader.mockReturnValue({ isLoaded: true, loadError: undefined });

export default api;
