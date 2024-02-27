import { AmazonHeader } from '../header/header.jsx';
import { AmazonBox } from '../Box/box.jsx';
import { AmazonFooter } from '../Footer/footer.jsx'
import { AmazonBar } from '../Sidebar/sidebar.jsx'
import React from 'react';


export const Body = ()  => {

   return(
    <>
        <AmazonHeader></AmazonHeader>
        <AmazonBox></AmazonBox>
        <AmazonFooter></AmazonFooter>

    </>
   )
}
