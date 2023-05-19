import React from "react";
import "./NewsComponent.css"
import { Carousel } from 'react-responsive-carousel';

const NewsComponent = (props) => {
    console.log(props)
    return (
        <div className="p-5 divNews"> 
            {props.news?.map((data, index) => (
                <div className="news-section">
                    <h1 className="news-title">
                        {data.descr.split(",")[0]}
                    </h1>
                    <Carousel showArrows={false} className="carouselStyleNews" showIndicators={false} showStatus={false}>
                        <img src={data.img.split(":")[0]} className="imagesNews" />
                        <img src={data.img.split(":")[1]} className="imagesNews" />
                    </Carousel>
                    <strong>
                        {data.descr}
                    </strong>
                </div>
            ))}
        </div>
    )

}

export default NewsComponent