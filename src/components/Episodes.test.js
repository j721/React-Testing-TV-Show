import React from 'react';
import Episodes from './Episodes';
import App from "./App";

import {render, queryByTestId} from '@testing-library/react';

// test ("renders empty episodes array",()=>{
//     const {queryByTestId} = render (<Episodes episodes ={[]}/>);

//     const document = queryByTestId(/episodes-id/i);
//     expect (document.childNodes).toHaveLength(0)
// });


test ("selected season data will display episodes data", async ()=>{
    const {getByText} = render (<Episodes episodes ={episodesData}/>)
})