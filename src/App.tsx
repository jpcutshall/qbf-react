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

  const handleHiddenChange = () => {
    
  }

  const handleEmailSubmission = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
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
         
          <form action="https://brigittecutshall.us11.list-manage.com/subscribe/post?u=7dc72c2e40adfa2d99a20d216&amp;id=44b681c1ed" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate email-modal" target="_blank" >
            <div id="mc_embed_signup_scroll">
              <h2>Subscribe</h2>
              <div className="mc-field-group">
                <label htmlFor="email">Email Address </label>
                <input type="email" placeholder="Enter your Email here" name="EMAIL" className="required email" id="email" />
              </div>
              <div id="mce-responses" className="clear">
                <div className="response" id="mce-error-response" ></div>
                <div className="response" id="mce-success-response" ></div>
              </div>   {/* <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups--> */}
                <div aria-hidden="true"><input type="text" name="b_7dc72c2e40adfa2d99a20d216_44b681c1ed" tabIndex={-1} value=""/></div>
                <div className="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button btn"/></div>
            </div>
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
