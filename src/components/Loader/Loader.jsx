import "./Loader.css";

export default function Loader({isloading}) {
    return (<div className={"loader "+(isloading?" display":"")}>
        <div>
        </div>
    </div>)
}