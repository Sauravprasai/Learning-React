const Hero = () => {
    return(
        <div>
            <main className="hero container">
                <div className="hero-content">
                    <h1>YOUR FEET DESERVE THE BEST</h1>
                    <p>Your feet is the best place where you might need some good stuff to have it on your leg</p>
                </div>

                <div className="hero-btn">
                    <button>Shop Now</button>
                    <button>Category</button>
                </div>

                <div className="shopping">
                    <p>Also Available on</p>

                    <div className="logo">
                        <img src="/Images/amazon.jpeg" alt="amazon" className="amazon"/>
                        <img src="/Images/temu.png" alt="temu" className="temu"/>
                    </div>
                </div>
                <div className="hero-image">
                    <img src="/Images/jordon.png" alt="jordon"/>
                </div>
            </main>
        </div>
    )
}

export default Hero