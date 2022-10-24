import { useAlbumsViewModel } from '../../components/album/albumsViewModel';
import { renderHook, act, waitFor } from '@testing-library/react';
import { albumsUseCaseSpy, albumUseCaseSpy } from '../spy/use_cases';
import albumRes from '../res/albumRes.json';
import albumsRes from '../res/albumsRes.json';

jest.mock('../../use_cases/album/getAlbumUseCase');
jest.mock('../../use_cases/album/getAlbumsUseCase');

const sut = () => {
  return renderHook(() => useAlbumsViewModel());
};

describe('AlbumsViewModel', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('Initial album => Should return null', () => {
    // When
    const { result } = sut();

    // Then
    expect(result.current.album).toBe(null);
  });

  test('GetAlbum => Should return album', async () => {
    // Given
    const { result } = sut();
    albumUseCaseSpy.init(albumRes);

    // When
    act(() => {
      result.current.getAlbum(1);
    });

    // Then
    await waitFor(() => {
      expect(result.current.album).toEqual(albumRes);
    });
  });

  test('Get Albums => Should return albums', async () => {
    // Given
    const { result } = sut();
    albumsUseCaseSpy.init(albumsRes);

    // When
    act(() => {
      result.current.getAlbums();
    });

    // Then
    await waitFor(() => {
      expect(result.current.albums).toEqual(albumsRes);
    });
  });
});
