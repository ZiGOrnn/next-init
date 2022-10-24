import { AxiosResponse } from 'axios';
import { Album } from '../../../components/album/interface/album';
import * as AlbumRepository from '../../../repositories/albumRepository';

export const albumRepositorySpy = {
  init(value: AxiosResponse<Album, Album>) {
    jest.spyOn(AlbumRepository, 'getAlbum').mockResolvedValue(value);
  },
  destroy() {
    jest.clearAllMocks();
  },
};

export const albumsRepositorySpy = {
  init(value: AxiosResponse<Album[], Album[]>) {
    jest.spyOn(AlbumRepository, 'getAlbums').mockResolvedValue(value);
  },
  destroy() {
    jest.clearAllMocks();
  },
};
