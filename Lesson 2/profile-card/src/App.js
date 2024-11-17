import ProfileCard from "./ProjectCard";
import AlexaImages from "./images/alexa.png";
import SiriImages from "./images/siri.png";
import CortanaImages from "./images/cortana.png";
import 'bulma/css/bulma.css'

function App(){
    return (
        <div>
            <section class="hero is-primary has-text-centered">
                <div class="hero-body">
                    <p class="title">Personal Digital Assistant</p>
                </div>
            </section>

            <div className="container">
                <section className="section">
                    <div className="columns">
                        <div className="column is-4">
                            <ProfileCard name="Alexa" id="@Alexa31" image={AlexaImages} description="Alexa was created by Amazon and helps you to buy things."/>
                        </div>
                        <div className="column is-4">
                            <ProfileCard name="Cortana" id="@Cortana51" image={CortanaImages} description="Cortana was made by Microsoft. Who knows what it does?"/>
                        </div>
                        <div className="column is-4">
                            <ProfileCard name="Google Assitant" id="@G_Assistant65" image={SiriImages} description="Siri is created by Apple and is also integrated by AI recently."/>
                        </div>
                    </div>

                </section>
            </div>
        </div>
    )
}

export default App;