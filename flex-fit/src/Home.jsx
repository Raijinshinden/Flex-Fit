import { Carousel } from "./components/Carousel";

import {slides} from "./data/carouselData.json"

export default function Home(){
    return(
            <Carousel data={slides}/>
    )
}