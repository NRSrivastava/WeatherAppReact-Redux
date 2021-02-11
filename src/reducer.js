import store from "./store";

export default function reducer(state={day:'1',dayData:{'1':[],'2':[],'3':[],'4':[],'5':[]}},action){
    switch (action.type) {
        case 'change':
            return {...state,day:action.payload};

        case 'setData':
            return {...state,dayData:{...state.dayData,...action.payload}};
        
        /* case 'setData1':
            // console.log(action.payload);
            return {...state,day1:[...state.day1,action.payload]};

        case 'setData2':
            //console.log(action.payload);
            return {...state,day2:[...state.day1,action.payload]};

        case 'setData3':
            //console.log(action.payload);
            return {...state,day3:[...state.day1,action.payload]};

        case 'setData4':
            //console.log(action.payload);
            return {...state,day4:[...state.day1,action.payload]};

        case 'setData5':
            //console.log(action.payload);
            return {...state,day5:[...state.day1,action.payload]}; */

            
        default:
            return state;
    }
}