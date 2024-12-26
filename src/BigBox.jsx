import OneBox from "./OneBox"
import "./BigBox.css"
export default function BigBox({colors}){
const boxes =[];
for(let i = 0; i<25; i++){
    boxes.push(<OneBox colors={colors}/>);
}
    return <div className="BigBox">{boxes}</div>
}