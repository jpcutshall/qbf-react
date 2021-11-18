interface Props {}

const Graphic = (props: Props) => {
	return (
		<a
			id="img"
			href="https://www.amazon.com/dp/B09LVSD7C5/ref=cm_sw_r_sms_api_glt_H70FJFDHXV4JS4JP91YR"
			target="_blank"
			rel="noreferrer"
		>
			<img
				alt="Front cover of the Quality Book Formula"
				src="qbf-front.jpg"
				id="book-img"
			/>
		</a>
	);
};

export default Graphic;
