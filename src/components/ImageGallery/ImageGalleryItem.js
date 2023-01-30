import { useState } from 'react';
import { Modal } from 'components/Modal/Modal';

export const ImageGalleryItem = ({image: {webformatURL, tags, largeImageURL} }) => {

const [isModalOpen, setIsModalOpen] = useState(false)


 const handleToggleModal = () => {

  setIsModalOpen(prevState => (!prevState))
  console.log(webformatURL)
  };


    return (
      <>
        <li className="ImageGalleryItem">
          <img
            className="ImageGalleryItem-image"
            src={webformatURL}
            alt={tags}
            onClick={handleToggleModal}
          />
        </li>
        {isModalOpen && (
          <Modal url={largeImageURL} onClose={handleToggleModal} />
        )}
      </>
    );
  
}
