import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import Slider from "react-slick";

class BestSlider extends Component {
    render() {
        const settings = {
            slidesToShow: 3,
            dots: true,
            infinite: true,
            speed: 1000,
            autoplay: true,
            pauseOnHover: false,
            
        };

        return (
            <div className="BestSlide">
              
                <Slider {...settings}>
                    <div>
                        <img src="asset/img/best01.jpg" alt="" />
                        <h3>다시 날씬 츄르[다이어트 영양제]</h3>
                        <p>36.200원</p>
                    </div>
                    <div>
                        <img src="asset/img/best02.jpg" alt="" />
                        <h3>다시 편안 츄르[기관지 영양제]</h3>
                        <p>36.200원</p>
                    </div>
                    <div>
                        <img src="asset/img/best03.jpg" alt="" />
                        <h3>다시 초롱 파우더[눈,눈물 영양제]</h3>
                        <p>36.200원</p>
                    </div>
                    <div>
                        <img src="asset/img/best04.jpg" alt="" />
                        <h3>다시 보송 파우더[피부 영양제]</h3>
                        <p>36.200원</p>
                    </div>
                    <div>
                        <img src="asset/img/best05.jpg" alt="" />
                        <h3>다시 편안 츄르 대용량 세트</h3>
                        <p>128.200원</p>
                    </div>
                    <div>
                        <img src="asset/img/best06.jpg" alt="" />
                        <h3>다시 초롱 파우더 대용량 세트</h3>
                        <p>136.100원</p>
                    </div>
                </Slider>
            </div>
        );
    }
}

export default BestSlider;