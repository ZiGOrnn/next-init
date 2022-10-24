import { Album } from '../../../components/album/interface/album';
import * as GetAlbumUseCase from '../../../use_cases/album/getAlbumUseCase';

export const albumUseCaseSpy = {
  init(value: Album) {
    jest.spyOn(GetAlbumUseCase, 'getAlbumUseCase').mockResolvedValue(value);
  },
  destroy() {
    jest.clearAllMocks();
  },
};
