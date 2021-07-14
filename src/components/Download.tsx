

interface Props {
    handleOpenModal: () => void
}

const Download = ({ handleOpenModal }: Props) => {
    return (
        <button id="btn" onClick={handleOpenModal}>
            Download Your Free PDF
        </button>
    )
}

export default Download
