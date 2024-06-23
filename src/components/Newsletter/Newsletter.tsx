import "./Newsletter.css";

const Newsletter = () => {
    return (
        <>
            <div className="newsletter">
                <div>
                    <h2>REYNA</h2>
                </div>
                <div>
                    <h3>New to Reyna?</h3>
                    <p>Subscribe to our newsletter to get updates on our latest offers!</p>
                    <div className="sendmail">
                        <input type="text" placeholder="Enter Email Address" />
                        <button>SEND</button>
                    </div>
                    <div className="termsWrapper">
                        <div className="terms">
                            <input className="check" type="checkbox" name="" id="" />
                            <p>I agree to Reyna's Privacy and Cookie Policy. You can unsubscribe from newsletters at
                                any time
                            </p>
                        </div>
                        <p className="legal">I accept the Legal Terms</p>
                    </div>
                </div>

                <div>
                    <h3>DOWNLOAD REYNA FREE APP</h3>
                    <p>Get access to exclusive offers!</p>

                </div>

            </div>
        </>
    )
}

export default Newsletter
