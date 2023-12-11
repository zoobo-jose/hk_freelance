import "./Signup.css";
import * as Icon from 'react-bootstrap-icons';
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Sector, SubSector } from "../../helper/sector"
import { ChangeEvent } from "react";
import { useContext } from 'react';
import { Context } from "../../helper/context/context";

export default function Signup() {

    const navigate = useNavigate();
    const { setClient, sectors, subsectorsOf } = useContext(Context);

    const [user, setUser] = useState({
        name: "",
        sector: 0,
        agree: false
    });
    const [currentSector, setCurrentSector] = useState({});
    const [currentSubSectors, setCurrentSubSectors] = useState([]);
    const [currentSubSector, setCurrentSubSector] = useState({});
    const [errorMessage, setErrorMessage] = useState("");
    useEffect(() => {
        if(sectors.length>0){
            setCurrentSector(sectors[0]);
            const subsectors = subsectorsOf(sectors[0]);
            const subsector = subsectors[0];
            setCurrentSubSectors(subsectors);
            setCurrentSubSector(subsector);
            setUser(values => ({ ...values, sector: subsector._id }))
        }
    },[]);
    const handleChange = (event: ChangeEvent) => {
        const name = event.target.name;
        let value = event.target.value;
        if (name == "agree") {
            value = event.target.checked;
        }
        setUser(values => ({ ...values, [name]: value }))
    }

    const setSector = (sector: Sector) => {
        setCurrentSector(sector);
        const subSectors = subsectorsOf(sector);
        setCurrentSubSectors(subSectors);
        setCurrentSubSector(subSectors[0]);
        setUser({ ...user, sector: subSectors[0]._id })
    }

    const setSubSector = (sub: SubSector) => {
        setCurrentSubSector(sub);
        setUser({ ...user, sector: sub._id })
    }

    const verify = () => {
        if (user.name.length <= 0) {
            setErrorMessage("Please enter your name")
            return false;
        } else
            if (!user.agree) {
                setErrorMessage("Please agree to terms");
                return false;
            }
        return true;
    }
    const submit = () => {
        if (verify()) {
            // save data
            setClient(user);
            navigate("/account");
        }
    }
    return <div className="signup">
        <div className="img">
            <img src="https://img.freepik.com/premium-photo/abstract-curved-brush-stroke-background_124507-11165.jpg" alt="" />
        </div>
        <div className="form" >
            <h3>New User ?</h3>
            <p>
                Please enter your name and pick the Sectors you are currently involved in.
            </p>
            <div className="input">
                <span className="name">
                    <Icon.Person className="icon" />
                    name
                </span>
                <input type="text" name="name" placeholder="name" value={user.name}
                    onChange={handleChange} />
            </div>
            <div className="input">
                <div className="sub-input">
                    <span className="name">
                        <Icon.Building className="icon" />
                        Sectors
                    </span>
                    <div className="selects">
                        <span className="selected">
                            {currentSector.name}
                        </span>
                        <div className="options">
                            {sectors.map((sector, index) =>
                                <span key={"sector" + index} onClick={() => { setSector(sector) }}>
                                    {sector.name}
                                </span>
                            )}
                        </div>
                    </div>
                </div>

                <div className="sub-input">
                    <span className="name">
                        sub Sector
                    </span>
                    <div className="selects">
                        <span className="selected">
                            {currentSubSector.name}
                        </span>
                        <div className="options">
                            {currentSubSectors.map((subSector, index) =>
                                <span key={"subSector" + index} onClick={() => { setSubSector(subSector) }}>
                                    {subSector.name}
                                </span>)}
                        </div>
                    </div>
                </div>
            </div>
            <div className="input agree">
                <input type="checkbox" name="agree" className="checkbox" checked={user.agree}
                    onChange={handleChange} />
                <span className="name">
                    Agree to terms
                </span>
            </div>

            <button onClick={() => { submit() }}>
                save
            </button>
            <p className={"error " + ((errorMessage.length > 0) ? "display" : "")}>
                <Icon.ExclamationTriangleFill className="icon" />
                {errorMessage}
            </p>
        </div>
    </div>
}