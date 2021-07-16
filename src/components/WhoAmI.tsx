
interface Props {
    
}

const WhoAmI = (props: Props) => {
    return (
        <div id="about">
            <figure id="about-img">
                <img width="150" height="150" src="BCHeadshot.jpg" alt="Brigitte Cutshall wearing a shirt that says The Book Was Better" />
                <figcaption id="img-text">Brigitte Cutshall</figcaption>
            </figure>
            <div id="about-text">

                <h2><i>
                    <a href="https://www.linkedin.com/in/brigittecutshall/" target="_blank" rel="noreferrer">
                        Who am I?
                </a></i></h2>

                <p>
                    Hi there! My name is Brigitte and I’m a Media Solutions & Production Expert, Author, and Founder of <a href="http://www.geminimediainc.com/" target="_blank" rel="noreferrer">Gemini Media</a>.
                </p>
                <p>
                    For the past 25+ years, I’ve been helping content creators with production solutions in the business of books.
                </p>
            </div>
        </div>
    )
}

export default WhoAmI
