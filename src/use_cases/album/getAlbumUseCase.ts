import { Album } from '../../components/album/interface/album';
import { httpStatus } from '../../constant/httpStatus';
import { getAlbum } from '../../repositories/albumRepository';

export const getAlbumUseCase = async (id: number): Promise<Album> => {
  const { status, data } = await getAlbum(id);
  if (status === httpStatus.ok) {
    return data;
  } else {
    return null;
  }
};
