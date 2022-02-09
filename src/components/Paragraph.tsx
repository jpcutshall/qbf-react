interface Props {}

const Paragraph = (props: Props) => {
	return (
		<div id='paragraph'>
			{/* <p>
				&emsp; Publishing a book is a great endeavor. There are a lot of a steps to write, design, produce, and
				market a book. You want to have a <em>professional quality</em> book at the end…no matter the method
				chosen to publish and distribute.
			</p> */}
			<p>
				&emsp; The <i>Quality Book Formula</i> was created to help you be aware of the design, production
				process, and overall timelines. Follow my checklist to create the book of your dreams. From my personal
				experience as a writer and publisher. I can't promise your book will be perfect, that is on you! But it
				will be a quality book created by you!
			</p>
		</div>
	);
};

export default Paragraph;
