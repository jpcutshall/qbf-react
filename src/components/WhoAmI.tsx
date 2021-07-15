
interface Props {
    
}

const WhoAmI = (props: Props) => {
    return (
        <div id="about">
            <figure id="about-img">
                <img src="BCHeadshot.jpg" alt="Brigitte Cutshall wearing a shirt that says The Book Was Better" />
                <figcaption id="img-text">Brigitte Cutshall</figcaption>
            </figure>
            <div id="about-text">
                <h2><i>Who am I?</i></h2>
                <p>
                    Hi there! My name is Brigitte and I’m a Media Solutions & Production Expert, Author, and Founder of Gemini Media.
                </p>
                <p>
                    For the past 25+ years, I’ve been helping content creators with production solutions in the business of books.
                </p>
            </div>
        </div>
    )
}

export default WhoAmI
