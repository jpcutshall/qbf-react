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
  const [hiddenField, setHiddenField] = useState("")

  const handleHiddenChange = (event: any) => {
    console.log(event)
    setHiddenField(event.target.value)
  }

  const handleEmailSubmission = (e: any) => {
    e.preventDefault()
    setIsSubmitted(true)
    console.log(e.target.email.value)
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
         
          <form action="https://brigittecutshall.us11.list-manage.com/subscribe/post?u=7dc72c2e40adfa2d99a20d216&amp;id=44b681c1ed" method="post" id="email-modal" name="subscribe-form" className="validate email-modal" target="_blank" onSubmit={handleEmailSubmission} >
           
            <h2><i>Enter your Email to receive your free copy of the Quality Book Formula Checklist</i></h2>
            
            <label htmlFor="email">Email Address </label>
            <input type="email" placeholder="Enter your Email here" name="EMAIL" className="required email" id="email" />
            
            <div id="mce-responses" className="clear">
              <div className="response" id="mce-error-response" ></div>
              <div className="response" id="mce-success-response" ></div>
            </div>   {/* <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups--> */}

            <div id="hidden" aria-hidden="true">
              <input type="text" name="b_7dc72c2e40adfa2d99a20d216_44b681c1ed" tabIndex={-1} onChange={handleHiddenChange} value={hiddenField} />
            </div>

            <input type="submit" value="Subscribe" name="subscribe" id="submit-btn" className="submit-btn"/>
           
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
