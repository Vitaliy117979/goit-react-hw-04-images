import { useState, useEffect } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Loadar } from './Loadar/Loadar';
import { fetchImages } from 'services/apiServices';


export const App = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);

  const [images, setImages] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const [totalImages, setTotalImages] = useState(0);

  useEffect(() => {

    if(!query){
      return
    }

    fetchImages(query, page)
      .then(resp => {
 
        setImages(prevState =>
          page === 1 ? [...resp.hits] : [...prevState, ...resp.hits]
          );
        setTotalImages(resp.totalHits)
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [query, page, totalImages]);

  const handleSubmit = query => {
    setQuery(query);
    setIsLoading(true);
    setPage(1);
  };

  const handleLoadMore = () => {
    setPage(prevState => prevState += 1);

    setIsLoading(true);
  };

  const renderButtonOrLoader = () => {
    return isLoading ? (
      <Loadar />
    ) : (
      !!images.length && !images.length < totalImages && (
        <Button onLoadMore={handleLoadMore} />
      )
    );
  };




  return (
    <>
      <Searchbar onSubmit={handleSubmit} />
      <ImageGallery images={images} />
      <div>{renderButtonOrLoader()}</div>
    </>
  );
};
