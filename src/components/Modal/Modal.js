// import { Component } from 'react';

// export class Modal extends Component {
//   componentDidMount() {
//     window.addEventListener('keydown', this.onEscapePress);
//   }

//   componentWillUnmount() {
//     window.removeEventListener('keydown', this.onEscapePress);
//   }

//   onEscapePress = evt => {
//     if (evt.code === 'Escape') {
//       this.props.onClose();
//     }
//   };

//   render() {
//     const { url, onClose } = this.props;

//     return (
//       <div className="Overlay" onClick={onClose}>
//         <div className="Modal">
//           <img src={url} alt="IMG" />
//         </div>
//       </div>
//     );
//   }
// }

import { useEffect } from 'react';

export const Modal = ({ url, onClose }) => {
  useEffect(() => {
    window.addEventListener('keydown', onEscapePress);

    return () => {
      window.removeEventListener('keydown', onEscapePress);
    };
  });

  const onEscapePress = evt => {
    if (evt.code === 'Escape') {
      onClose();
    }
  };

  return (
    <div className="Overlay" onClick={onClose}>
      <div className="Modal">
        <img src={url} alt="IMG" />
      </div>
    </div>
  );
};
