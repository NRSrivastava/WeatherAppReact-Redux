import React, { useState } from 'react';
import Tile from './weatherTile.js';
import store from './store';

function Row(props) {
    const [a,setA]=useState([]);
    let t1,t2,t3,t4,t5;
    store.subscribe(()=>{
        t1=store.getState().dayData[1][0];
        t2=store.getState().dayData[2][0];
        t3=store.getState().dayData[3][0];
        t4=store.getState().dayData[4][0];
        t5=store.getState().dayData[5][0];
        setA([
        <Tile id="tile1" dt={t1.dt} temp={parseInt(t1.main.temp)} max={parseInt(t1.main.temp_max)} min={parseInt(t1.main.temp_min)} icon={t1.weather[0].icon}/>,
        <Tile id="tile2" dt={t2.dt} temp={parseInt(t2.main.temp)} max={parseInt(t2.main.temp_max)} min={parseInt(t2.main.temp_min)} icon={t2.weather[0].icon}/>,
        <Tile id="tile3" dt={t3.dt} temp={parseInt(t3.main.temp)} max={parseInt(t3.main.temp_max)} min={parseInt(t3.main.temp_min)} icon={t3.weather[0].icon}/>,
        <Tile id="tile4" dt={t4.dt} temp={parseInt(t4.main.temp)} max={parseInt(t4.main.temp_max)} min={parseInt(t4.main.temp_min)} icon={t4.weather[0].icon}/>,
        <Tile id="tile5" dt={t5.dt} temp={parseInt(t5.main.temp)} max={parseInt(t5.main.temp_max)} min={parseInt(t5.main.temp_min)} icon={t5.weather[0].icon}/>]);
    });
    return(
        // <div style={{boxSizing:'border-box',width:'100%',display:'flex',justifyContent:'center',flexWrap:"wrap"}}>
            <div style={{display:'flex',justifyContent:'space-around',flexWrap:"wrap",margin:'15px 0px 15px 0px'}}>
                {a}
            </div>
        // </div>
    );
}

export default Row