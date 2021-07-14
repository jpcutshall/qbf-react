import { useState } from 'react';
import Modal from 'react-modal';
import Title from './components/Title';
import Graphic from './components/Graphic';
import Paragraph from './components/Paragraph';
import Download from './components/Download';
import './App.css';

Modal.setAppElement('#root')

function App() {

  const [modalIsOpen, setIsOpen] = useState(false)
  const [emailSubmitted, setIsSubmitted] = useState(false)



  const handleEmailSubmission = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(e.target)
  }

  const handleOpenModal = () => {
    setIsOpen(true)
  }

  const handleCloseModal = () => {
    setIsOpen(false)
  }
  return (
    <div className="App">
      <Modal
        isOpen={modalIsOpen}
        id="modal"
        onRequestClose={handleCloseModal}
      >
          <form onSubmit={handleEmailSubmission} id="email-modal">
              <h2><i>Simply add your email to receive your Free PDF</i></h2>
              <label htmlFor="email">Enter your email</label>
              <input type="email" name="email" id="email" />
              <input type="button" value="Submit" id="submit-btn"/>
          </form>
      </Modal>
      <Title />
      <Graphic />
      <Paragraph />
      <Download handleOpenModal={handleOpenModal}/>
    </div>
  );
}

export default App;
