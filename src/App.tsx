import { useState, Suspense, lazy } from 'react';
import './App.css';
import Modal from 'react-modal';
import Title from './components/Title';
import Paragraph from './components/Paragraph';
import Download from './components/Download';
import WhoAmI from './components/WhoAmI';
import Horz from './components/Horz';
import Footer from './components/Footer';
import Loader from './components/Loader';
const Graphic = lazy(() => import('./components/Graphic'));

Modal.setAppElement('#root')

function App() {

  const [modalIsOpen, setIsOpen] = useState(false)
  const [emailSubmitted, setIsSubmitted] = useState(false)
  const [hiddenField, setHiddenField] = useState("")
  const [hiddenGroup, setHiddenGroup] = useState(1)

  const handleHiddenChange = (event: any) => {
    console.log(event)
    setHiddenField(event.target.value)
  }

  const handleEmailSubmission = (e: any) => {
    //e.preventDefault()
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
      <Suspense fallback={<Loader/>}>

        <Modal
          isOpen={modalIsOpen}
          id="modal"
          onRequestClose={handleCloseModal}
        >
          
            <form action="https://brigittecutshall.us11.list-manage.com/subscribe/post?u=7dc72c2e40adfa2d99a20d216&amp;id=44b681c1ed" method="post" id="email-modal" name="subscribe-form" className="validate email-modal" target="_blank" onSubmit={handleEmailSubmission} >

              <button id="close" onClick={handleCloseModal}>Exit</button>
            
              <h2><i>Enter your Email to receive your free copy of the Quality Book Formula Checklist PDF</i></h2>
              
              <label htmlFor="email">Email Address </label>
              <input type="email" placeholder="Enter your Email here" name="EMAIL" className="required email" id="email" />
              
              <div id="mce-responses" className="clear">
                <div className="response" id="mce-error-response" ></div>
                <div className="response" id="mce-success-response" ></div>
              </div>   {/* <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups--> */}

              <div id="hidden" aria-hidden="true">
                <input type="checkbox" name="group[29862][1]" onChange={(e: any) => setHiddenGroup(e.target.value)} value={hiddenGroup} checked/>
                <input type="text" name="b_7dc72c2e40adfa2d99a20d216_44b681c1ed" tabIndex={-1} onChange={handleHiddenChange} value={hiddenField} />
              </div>

              {emailSubmitted ? 
                <small id="confirm-email">Please Confirm your Email address to subscribe!</small> 
                :
                null
              }

              {emailSubmitted ? 
                <a id="download" href="Qualilty-Book-Formula_Checklist.pdf" download>Download</a> 
                :
                null
              }

              <input type="submit" value="Subscribe" name="subscribe" id="submit-btn" className="submit-btn"/>

              <small id="never-share">We will never share your email.</small>
                          
            </form>

        </Modal>
        <Title />
        <Graphic />
        <Paragraph />
        <Download handleOpenModal={handleOpenModal}/>
        <Horz />
        <WhoAmI />
        <Footer />

      </Suspense>
    </div>
  );
}

export default App;
