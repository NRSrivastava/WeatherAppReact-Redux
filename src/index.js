import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Page from './fullPage.js';
import store from './store';
import {Provider} from 'react-redux';


ReactDOM.render(
  <React.StrictMode>
          <div style={{backgroundAttachment: 'fixed', backgroundPosition: '50%', backgroundSize: 'cover',backgroundImage:"linear-gradient(#7686b1,#c291c3,#fcf9f7)"}}>
            <Page/>
          </div>
  </React.StrictMode>,
  document.getElementById('root')
);


function loadError(){
  let temp=document.getElementById("loadImg");
  temp.style.visibility="hidden";
  temp.src="Word Art.png";
  temp.style.height="";
  temp.style.visibility="visible";
}
function getData(){
  const url = "http://api.openweathermap.org/data/2.5/forecast?id=4164143"/*Miami Beach*/+"&appid=cb72786e2727dbee175e6ea37d64780d&units=metric";//Don't use this API key for your project, generate your own at https://developer.nytimes.com
  fetch(new Request(url)).then((response)=>{
        response.json().then((data)=>{
           //console.log(data);

          let today = new Date();
          let len =data.list.length;
          let day_1=[],day_2=[],day_3=[],day_4=[],day_5=[];
          for(let i=0;i<len;i++){
            let lis=data.list[i];

            let date2 = new Date(lis.dt*1000).getDate();
            // let diffTime = Math.abs(date2 - today);
            // let diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24)); 

            // console.log(date2);
            // console.log(today.getDate());
            //console.log(date2==today.getDate());

            function getDay(i){
              let x=new Date(today);
              x.setDate(today.getDate()+i);
              return x.getDate();
            }

            
            if(date2==today.getDate()){
                //console.log(lis);
                day_1.push(lis);
            }
            else if(date2==getDay(1)){
                day_2.push(lis);
            }
            else if(date2==getDay(2)){
                day_3.push(lis);
            }
            else if(date2==getDay(3)){
                day_4.push(lis);
            }
            else if(date2==getDay(4)){
                day_5.push(lis);
            }
          }
          //console.log(day_1);
          let r={1:day_1,2:day_2,3:day_3,4:day_4,5:day_5}
              store.dispatch({
                type:'setData',
                payload:r
              });

           document.getElementById("loader").remove();
           document.getElementsByTagName("body")[0].style.overflow="auto";
        }).catch(loadError);
     }).catch(loadError); 
  }

getData();

store.subscribe(()=>{

//console.log(store.getState().dayData);

});


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
