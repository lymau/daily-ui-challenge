import '../style/day_1.css'

export default function Day1() {
    return (
        <>
            <div className='row'>
                <div className="column left">
                    <div className="glass">
                        <p className="info">
                            Discover your potential with us
                        </p>
                    </div>
                </div>
                <div className="column right">
                    <div className="form">
                        <div className="title">
                            <h1>Sign Up 👋</h1>
                        </div>

                        <div className="subtitle">
                            <p>Please sign up so you can use our amazing app!</p>
                        </div>

                        <div className="form-input">
                            <label htmlFor="email" className="label">Email</label>
                            <input type="email" id="email" name="email" className="input"/>
                        </div>

                        <div className="form-input">
                            <label htmlFor="password" className="label">Password</label>
                            <input type="password" id="password" name="password" className="input"/>
                        </div>

                        <div className="form-input">
                            <label htmlFor="password_confirmation" className="label">Password</label>
                            <input type="password" id="password_confirmation" name="password_confirmation" className="input"/>
                        </div>
                        
                        <button className='button'>
                            Sign Up
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}