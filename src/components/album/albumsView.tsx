import React, { useEffect } from 'react';
import { useAlbumsViewModel } from './albumsViewModel';
import { useI18nLocale } from '../../providers';
import styles from './albums.module.scss';

const AlbumsView = () => {
  const { lang } = useI18nLocale();
  const viewModel = useAlbumsViewModel();

  useEffect(() => {
    viewModel.getAlbums();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <h2>{lang.albumsView}</h2>
      {viewModel.album && (
        <div className={`${styles.album} ${styles.borderBottom}`}>
          <p>
            {viewModel.album.id} {viewModel.album.title}
          </p>
          <p className={styles.album}>User ID: {viewModel.album.userId}</p>
        </div>
      )}
      {viewModel.albums.map((album, idx) => (
        <div
          className={`${styles.pointer} ${styles.borderBottom}`}
          key={idx}
          onClick={() => viewModel.getAlbum(album.id)}
        >
          <p>{album.title}</p>
          <p>{album.userId}</p>
        </div>
      ))}
    </div>
  );
};

export default AlbumsView;
