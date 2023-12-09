import "./Update.css";
import * as Icon from 'react-bootstrap-icons';
export default function Update() {
    return (<div className="update">
        <div className="header">
            <img src="https://img.freepik.com/free-photo/vibrant-colors-swirling-futuristic-underwater-chaos-generated-by-ai_188544-9692.jpg?size=626&ext=jpg&ga=GA1.1.1222169770.1701993600&semt=sph" alt="" />
        </div>
        <div className="body">
            <div className="section1">
                <Icon.Person className="icon"/>
                <span className="name"> name user</span>
            </div>
            <div className="section2">
                <h3>Profile</h3>
                <div className="data">
                    <span className="name">
                        <Icon.Person className="icon"/>
                        name
                    </span>
                    <input type="text" className="value" />
                </div>
                <div className="data">
                    <div className="sub-input">
                        <span className="name">
                            <Icon.Building className="icon"/>
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
                    </div>
                    <div className="sub-input">
                        <span className="name">
                        <Icon.BuildingGear className="icon"/>
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
                </div>
                <button>
                    update 
                </button>
            </div>
        </div>
    </div>)
}