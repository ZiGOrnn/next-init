import { Album } from '../../../components/album/interface/album';
import * as GetAlbumsUseCase from '../../../use_cases/album/getAlbumsUseCase';

export const albumsUseCaseSpy = {
  init(value: Album[]) {
    jest.spyOn(GetAlbumsUseCase, 'getAlbumsUseCase').mockResolvedValue(value);
  },
  destroy() {
    jest.clearAllMocks();
  },
};
