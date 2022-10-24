import axios, { AxiosResponse } from 'axios';
import getConfig from 'next/config';
import { Album } from '../components/album/interface/album';

enum AlbumPath {
  albums = 'albums',
}

const { publicRuntimeConfig } = getConfig();
const { API_URL } = publicRuntimeConfig;
const axiosAlbum = axios.create({ baseURL: API_URL });

export const getAlbums = async (): Promise<AxiosResponse<Album[], Album[]>> => {
  const result = await axiosAlbum.get<Album[]>(`/${AlbumPath.albums}`);
  return result;
};

export const getAlbum = async (
  id: number
): Promise<AxiosResponse<Album, Album>> => {
  const result = await axiosAlbum.get<Album>(`/${AlbumPath.albums}/${id}`);
  return result;
};
