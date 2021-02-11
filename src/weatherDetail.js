import React from "react";

const DetailTile = (props)=>{

    let date=new Date(props.dt*1000);
    let t=props.temp;
    let i=t.indexOf(".");
    let t1=t.substr(0,i);
    let t2=t.substr(i);

    return(
        <div className="currentWeather" style={{margin:'10px 0px 10px 0px'}}>
            <div style={{float:'left',position:"relative",left:'7%', top:'50%','msTransform': 'translateY(-50%)',transform: 'translateY(-50%)',width:'50%'}}>
                <div style={{margin:'0',fontWeight:'600',fontSize:'1.25rem'}}>
                    Feel Like  {props.feels_like}°</div>
                <div style={{margin:'0',fontWeight:'400',fontSize:'1.125rem', opacity:0.65}}>As of {date.getHours()}:{date.getMinutes()} IST</div>
                <div style={{margin:'0',fontWeight:'500',fontSize:'6rem',textAlign:'left',display:'block',lineHeight:'0.96em'}}>{t1}<span style={{fontSize:"3rem"}}>{t2}°</span></div>
                <div style={{margin:'0',textAlign:'left',fontWeight:'700',fontSize:'1.5rem'}}>{props.main}</div>
                <div style={{margin:'0',fontSize:'1.125rem',lineHeight:'1.142857'}}>Maximum: {props.temp_max}° | Minimum: {props.temp_min}°</div>
            </div>
            <div style={{float:'right',position:"relative",right:'5%',top:'50%','msTransform': 'translateY(-50%)',transform: 'translateY(-50%)'}}>
                <img src={"http://openweathermap.org/img/wn/"+props.icon+"@4x.png"}/>
            </div>
        </div>
    );
}

export default DetailTile;