import React from 'react';
import DetailTile from './weatherDetail.js';
import "./subSection.css";
import store from './store';



class SubSection extends React.Component{
    constructor(props){
        super(props);
        this.state={detailTiles:[]};
    }

    //detailTiles=[];
    componentDidMount(){
        store.subscribe(()=>{
            let d=store.getState().day.replace(/\D/g, "");
            let array=store.getState().dayData[d];
            let aa=[];
            array.forEach(a=>{
                aa.push(<DetailTile dt={a.dt} temp={a.main.temp.toString()} feels_like={parseInt(a.main.feels_like)} temp_min={parseInt(a.main.temp_min)} temp_max={parseInt(a.main.temp_max)} main={a.weather.main} icon={a.weather[0].icon}/>);
            });
            console.log(aa);
            this.setState({detailTiles:aa});
            
        });
    }
    render(){
        return(
            <div className="subSection">
                {this.state.detailTiles}
            </div>
        );
    }

}

// const SubSection=(props)=>{ 
//     function logThis(y) {
//         console.log(y);
//       }
//     return(
//         
//     );
// } 

export default SubSection;