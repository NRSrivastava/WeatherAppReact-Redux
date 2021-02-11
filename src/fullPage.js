import React from 'react';
import Row from './weatherRow.js';
import SubSection from './subSection';



function Page (props){
    return(
        <div style={{display:'flex',justifyContent:'center',flexWrap:"nowrap",flexDirection:"column",alignItems:"center"}}>
            <Row/>
            <SubSection/>
        </div>
        
    );
}

export default Page;