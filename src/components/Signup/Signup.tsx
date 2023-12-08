import "./Signup.css";
import * as Icon from 'react-bootstrap-icons';

export default function Signup() {
    return <div className="signup">
        <div className="img">
            <img src="https://img.freepik.com/premium-photo/abstract-curved-brush-stroke-background_124507-11165.jpg" alt="" />
        </div>
        <form action="">
            <h3>New User ?</h3>
            <p>
                Please enter your name and pick the Sectors you are currently involved in.
            </p>
            <div className="input">
                <span className="name">
                    <Icon.Person className="icon" />
                    name
                </span>
                <input type="text" />
            </div>
            <div className="input">
                <span className="name">
                    <Icon.Building className="icon" />
                    Sectors
                </span>
                <div className="selects">
                    <span className="selected">
                        sub-sector
                    </span>
                    <div className="options">
                        <span >
                            sub-sector
                        </span>
                        <span >
                            sub-sector
                        </span>
                        <span >
                            sub-sector
                        </span>
                    </div>
                </div>
                <span className="name">
                    sub-sector
                </span>
                <div className="selects">
                    <span className="selected">
                        sub-sector
                    </span>
                    <div className="options">
                        <span >
                            sub-sector
                        </span>
                        <span >
                            sub-sector
                        </span>
                        <span >
                            sub-sector
                        </span>
                    </div>
                </div>
            </div>
            <div className="input agree">
                <input type="checkbox" className="checkbox" />
                <span className="name">
                    Agree to terms
                </span>
            </div>
            <button>
                save
            </button>
        </form>
    </div>
}