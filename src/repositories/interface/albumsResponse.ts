import { Album } from "../../components/album/interface/album";

export interface AlbumsResponse {
  result: Album[];
  error: boolean;
}
