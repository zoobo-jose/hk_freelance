import "./Update.css";
import * as Icon from 'react-bootstrap-icons';
import { useContext, useEffect, useState } from 'react';
import { Context } from "../../helper/context/context";
import { Sectors, Sector, SubSector} from "../../helper/sector";

export default function Update() {
    const { client } = useContext(Context);
    const [user, setUser] = useState({
        name:"",
        sector:0,
        agree:false
    });
    const [currentSector, setCurrentSector] = useState({});
    const [currentSubSectors, setCurrentSubSectors] = useState([]);
    const [currentSubSector,setCurrentSubSector]= useState({});
    const [errorMessage, setErrorMessage] = useState("");

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
        setUser({ ...user, sector: subSectors[0]._id })
    }

    const setSubSector = (sub: SubSector) => {
        setCurrentSubSector(sub);
        setUser({ ...user, sector: sub._id })
    }

    useEffect(() => {
        const subSector=getSubSector(client.sector);
        console.log(subSector);
        const sector=getSector(subSector.type);
        console.log(sector);
        setSubSector(subSector);
        setCurrentSector(sector);
        setCurrentSubSectors(subsectorsOf(sector));
        setUser(client);
    }, [])
    return (<div className="update">
        <div className="header">
            <img src="https://img.freepik.com/free-photo/vibrant-colors-swirling-futuristic-underwater-chaos-generated-by-ai_188544-9692.jpg?size=626&ext=jpg&ga=GA1.1.1222169770.1701993600&semt=sph" alt="" />
        </div>
        <div className="body">
            <div className="section1">
                <Icon.Person className="icon" />
                <span className="name">{user.name}</span>
            </div>
            <div className="section2">
                <h3>Profile</h3>
                <div className="data">
                    <span className="name">
                        <Icon.Person className="icon" />
                        Name
                    </span>
                    <input type="text" className="value" name="name" placeholder="name" value={user.name}
                        onChange={handleChange} />
                </div>
                <div className="data">
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
                                {Sectors.map((sector, index) =>
                                    <span key={"sector2" + index} onClick={() => { setSector(sector) }}>
                                        {sector.name}
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="sub-input">
                        <span className="name">
                            <Icon.BuildingGear className="icon" />
                            sub-sector
                        </span>
                        <div className="selects">
                            <span className="selected">
                                {currentSubSector.name}
                            </span>
                            <div className="options">
                                {currentSubSectors.map((subSector, index) =>
                                    <span key={"subSector2" + index} onClick={() => { setSubSector(subSector) }}>
                                        {subSector.name}
                                    </span>)}
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