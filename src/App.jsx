import { useState } from "react";
import "./app.scss";

function App() {
  const [isModal, setIsModal] = useState(false);

  const onClickModal = () => {
    setIsModal((prev) => !prev);
  };


  return (
    <div className="modal">
      <button onClick={onClickModal} className="modal-btn">🪄Открыть</button>
        <div className={`modal-content animated ${isModal ? 'show' : ''}`}>
          <span onClick={onClickModal} className="modal-close">X</span>
          <img
          className="modal-image"
            src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExbmJ3MHI4cDBpZjk4c2Y0MWFva25iZHNoM3ZsYzhtZXc3YmVkM2tqZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/QAsBwSjx9zVKoGp9nr/giphy.gif" // можешь заменить на любой gif с Киану
            alt="Keanu Reeves"
          />
      </div>
    </div>
  );
}

export default App;
