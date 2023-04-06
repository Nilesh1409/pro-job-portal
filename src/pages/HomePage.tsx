/* eslint-disable */
import React, { FC } from "react";
import CategoryItems from "../components/category/CategoryItems";
import HowItWorks from "../components/HowItWorks";
import BaseLayout from "../components/BaseLayout";
import Carousel from 'react-material-ui-carousel';
import { Paper, Button } from '@mui/material'
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import TopPartner from "../components/top-partner/TopPartner";

const HomePage: FC = () => {

    // var items = [
    //     {
    //         name: "Random Name #1",
    //         description: "Probably the most random thing you have ever seen!",
    //         image: "https://upload.wikimedia.org/wikipedia/commons/9/93/Justdial_logo.png",
    //     },
    //     {
    //         name: "Random Name #2",
    //         description: "Hello World!",
    //         image: "https://images.hindustantimes.com/img/2022/11/04/1600x900/reliance_retail_1667536455615_1667536477665_1667536477665.JPG",
    //     },
    //     {
    //         name: "Random Name #2",
    //         description: "Hello World!",
    //         image: "https://logos-world.net/wp-content/uploads/2022/01/Anytime-Fitness-New-Logo.png",
    //     },
    //     {
    //         name: "Random Name #2",
    //         description: "Hello World!",
    //         image: "https://images.hindustantimes.com/img/2022/11/04/1600x900/reliance_retail_1667536455615_1667536477665_1667536477665.JPG",
    //     }
    // ]

    
//     function Item(props: any)
// {
//     return (
//         <Paper>
//             <img style={{'width': '200px'}} src={props.item.image} />
//             <h2>{props.item.name}</h2>
//             <p>{props.item.description}</p>

//             <Button className="CheckButton">
//                 Check it out!
//             </Button>
//         </Paper>
//     )
// }

    return (
        <BaseLayout title={'Home'}>
            <CategoryItems/>
            <TopPartner/>

            <HowItWorks/>
        </BaseLayout>
    );
};

export default HomePage;
