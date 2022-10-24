import { useState } from 'react';
import { getAlbumsUseCase, getAlbumUseCase } from '../../use_cases/album';
import { Album } from './interface/album';

export const useAlbumsViewModel = () => {
  const [album, setAlbum] = useState<Album>(null);
  const [albums, setAlbums] = useState<Album[]>([]);

  const getAlbum = async (id: number) => {
    const result = await getAlbumUseCase(id);
    setAlbum(result);
  };

  const getAlbums = async () => {
    const result = await getAlbumsUseCase();
    setAlbums(result);
  };

  return {
    album,
    albums,
    getAlbum,
    getAlbums,
  };
};
