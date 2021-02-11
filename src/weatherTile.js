import React from "react";
import './Tile.css';
import store from './store.js';



class Tile extends React.Component{
    constructor(props){
        super(props);
        this.logThis= this.logThis.bind(this);
    }
    
    logThis(y) {
        store.dispatch({
            type:'change',
            payload:y
        });
    }


    render(){
        let weekday=new Array(7);
        weekday[0]="Mon";
        weekday[1]="Tue";
        weekday[2]="Wed";
        weekday[3]="Thu";
        weekday[4]="Fri";
        weekday[5]="Sat";
        weekday[6]="Sun";
        let date=new Date(this.props.dt*1000);
        return(
            <div className="weatherTile" style={{backgroundImage:'url(http://openweathermap.org/img/wn/'+this.props.icon+'@4x.png),linear-gradient(#008fe8,#00d7fa)',...this.props.style}} id={this.props.id} onClick={()=>{this.logThis(this.props.id)}}>
                <span >{date.getDate()}-{date.getMonth()}&emsp;{weekday[date.getDay()]}</span>
                <span style={{fontSize:'4rem'}}>{this.props.temp}°</span>
                <span >{this.props.min}° / {this.props.max}°</span>
            </div>
        );
    }
}
  
/* function Tile(props){
    let weekday=new Array(7);
    weekday[0]="Mon";
    weekday[1]="Tue";
    weekday[2]="Wed";
    weekday[3]="Thu";
    weekday[4]="Fri";
    weekday[5]="Sat";
    weekday[6]="Sun";
    return(
        <div className="weatherTile" style={{backgroundImage:'url('+props.imageUrl+'),linear-gradient(#008fe8,#00d7fa)',...props.style}} id={props.id} onClick={()=>{logThis(props.id)}}>
            <span >09-02   {weekday[new Date('2021-02-09').getDay()]}</span>
            <span style={{fontSize:'4rem'}}>12°</span>
            <span >-10° / 13°</span>
        </div>
    );
} */

export default Tile;