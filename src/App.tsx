import { useState, Suspense, lazy } from "react";
import "./App.css";
import Modal from "react-modal";
import Title from "./components/Title";
import Paragraph from "./components/Paragraph";
import Download from "./components/Download";
import WhoAmI from "./components/WhoAmI";
import Horz from "./components/Horz";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
const Graphic = lazy(() => import("./components/Graphic"));

Modal.setAppElement("#root");

function App() {
	const [modalIsOpen, setIsOpen] = useState(false);
	const [emailSubmitted, setIsSubmitted] = useState(false);
	const [hiddenField, setHiddenField] = useState("");
	const [hiddenGroup, setHiddenGroup] = useState(1);

	const handleHiddenChange = (event: any) => {
		console.log(event);
		setHiddenField(event.target.value);
	};

	const handleEmailSubmission = (e: any) => {
		//e.preventDefault()
		setIsSubmitted(true);
		console.log(e.target.email.value);
	};

	const handleOpenModal = () => {
		setIsOpen(true);
	};

	const handleCloseModal = () => {
		setIsOpen(false);
	};
	return (
		<div className="App">
			<Suspense fallback={<Loader />}>
				<Modal
					isOpen={modalIsOpen}
					id="modal"
					onRequestClose={handleCloseModal}
				>
					<form
						action="https://brigittecutshall.us11.list-manage.com/subscribe/post?u=7dc72c2e40adfa2d99a20d216&amp;id=44b681c1ed"
						method="post"
						id="email-modal"
						name="subscribe-form"
						className="validate email-modal"
						target="_blank"
						onSubmit={handleEmailSubmission}
					>
						<button id="close" onClick={handleCloseModal}>
							Exit
						</button>
						<h2>
							<i>
								Enter your Email to receive your free copy of
								the Quality Book Formula Checklist PDF
							</i>
						</h2>
						<label htmlFor="email">Email Address </label>
						<input
							type="email"
							placeholder="Enter your Email here"
							name="EMAIL"
							className="required email"
							id="email"
						/>
						<div id="mce-responses" className="clear">
							<div
								className="response"
								id="mce-error-response"
							></div>
							<div
								className="response"
								id="mce-success-response"
							></div>
						</div>{" "}
						{/* <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups--> */}
						<div id="hidden" aria-hidden="true">
							<input
								type="checkbox"
								name="group[29862][1]"
								onChange={(e: any) =>
									setHiddenGroup(e.target.value)
								}
								value={hiddenGroup}
								checked
							/>
							<input
								type="text"
								name="b_7dc72c2e40adfa2d99a20d216_44b681c1ed"
								tabIndex={-1}
								onChange={handleHiddenChange}
								value={hiddenField}
							/>
						</div>
						{emailSubmitted ? (
							<small id="confirm-email">
								Please Confirm your Email address to subscribe!
							</small>
						) : null}
						{emailSubmitted ? (
							<a
								id="download"
								href="Qualilty-Book-Formula_Checklist.pdf"
								download
							>
								Download
							</a>
						) : null}
						<input
							type="submit"
							value="Subscribe"
							name="subscribe"
							id="submit-btn"
							className="submit-btn"
						/>
						<small id="never-share">
							We will never share your email.
						</small>
					</form>
				</Modal>
				<Title />
				<Download handleOpenModal={handleOpenModal} />
				<Graphic />
				<a
					href="https://www.amazon.com/dp/B09LVSD7C5/ref=cm_sw_r_sms_api_glt_H70FJFDHXV4JS4JP91YR"
					target="_blank"
					rel="noreferrer"
				>
					<button className="btn">Buy the eBook</button>
				</a>
				<Paragraph />
				<div className="video">
					<h2>
						Here are some videos to provide more guidance on how to
						professionally publish your book for excellence!
					</h2>
					<iframe
						className="video__iframe"
						src="https://www.youtube-nocookie.com/embed/QadPY7gFpQY"
						title="YouTube video player"
						frameBorder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen
					></iframe>
				</div>
				<Horz />
				<WhoAmI />
				<Footer />
			</Suspense>
		</div>
	);
}

export default App;
