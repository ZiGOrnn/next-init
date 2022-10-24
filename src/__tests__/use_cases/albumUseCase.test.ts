import { getAlbumsUseCase, getAlbumUseCase } from '../../use_cases/album';
import albumRes from '../res/albumRes.json';
import albumsRes from '../res/albumsRes.json';
import { albumRepositorySpy, albumsRepositorySpy } from '../spy/repositories';

jest.mock('../../repositories/albumRepository');

describe('Album Use Cases', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('Get Album ID => Should Return Album', async () => {
    // Given
    const response = {
      data: albumRes,
      status: 200,
      statusText: '',
      config: {},
      headers: {},
    };
    albumRepositorySpy.init(response);

    // When
    const result = await getAlbumUseCase(1);

    // Then
    expect(result).toEqual(response.data);
  });

  test('Get Album => Should Return Albums', async () => {
    // Given
    const response = {
      data: albumsRes,
      status: 200,
      statusText: '',
      config: {},
      headers: {},
    };
    albumsRepositorySpy.init(response);

    // When
    const result = await getAlbumsUseCase();

    // Then
    expect(result).toEqual(response.data);
  });
});
