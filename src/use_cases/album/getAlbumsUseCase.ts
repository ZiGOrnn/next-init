import { Album } from '../../components/album/interface/album';
import { httpStatus } from '../../constant/httpStatus';
import { getAlbums } from '../../repositories/albumRepository';

export const getAlbumsUseCase = async (): Promise<Album[]> => {
  const { status, data } = await getAlbums();
  if (status === httpStatus.ok) {
    return data;
  } else {
    return [];
  }
};
