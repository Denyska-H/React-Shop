import React from 'react';
import Carousel from 'react-slick';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import HomeCategoriesBlock from './HomeCategoriesBlock';

const RightArrowStyle = (props: React.HtmlHTMLAttributes<HTMLButtonElement>) => {
  const { onClick } = props;

  return (
    <button className="carousel__button carousel__button_right" onClick={onClick}>
      <svg
        width="14"
        height="24"
        viewBox="0 0 14 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M8.88186 12.1334L0.0666504 3.31817L2.58477 0.800049L13.9181 12.1334L2.58477 23.4667L0.0666504 20.9486L8.88186 12.1334Z"
          fill="white"
        />
      </svg>
    </button>
  );
};

const LeftArrowStyle = (props: React.HtmlHTMLAttributes<HTMLButtonElement>) => {
  const { onClick } = props;

  return (
    <button className="carousel__button carousel__button_left" onClick={onClick}>
      <svg
        width="14"
        height="24"
        viewBox="0 0 14 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M8.88186 12.1334L0.0666504 3.31817L2.58477 0.800049L13.9181 12.1334L2.58477 23.4667L0.0666504 20.9486L8.88186 12.1334Z"
          fill="white"
        />
      </svg>
    </button>
  );
};

const settings = {
  dots: false,
  infinite: true,
  speed: 450,
  slidesToShow: 4,
  slidesToScroll: 1,
  initialSlide: 0,
  nextArrow: <RightArrowStyle />,
  prevArrow: <LeftArrowStyle />,
  draggable: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 0,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Slider: React.FC = () => {
  const { categories } = useSelector((state: RootState) => state.category);

  const categoryItems = categories.map((obj) => <HomeCategoriesBlock key={obj.id} {...obj} />);

  return <Carousel {...settings}>{categoryItems}</Carousel>;
};

export default Slider;
