import React, { HtmlHTMLAttributes } from 'react';
import Carousel from 'react-slick';
import { useSelector } from 'react-redux';

import { RootState } from '../../redux/store';
import { HomeCategoriesBlock } from '../HomeCategoriesBlock';
import SliderSkeleton from './SliderSkeleton';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const RightArrowStyle = (props: HtmlHTMLAttributes<HTMLButtonElement>) => {
  const { onClick } = props;

  return (
    <button
      aria-label="arrow-right"
      className="carousel__button carousel__button_right"
      onClick={onClick}>
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

const LeftArrowStyle = (props: HtmlHTMLAttributes<HTMLButtonElement>) => {
  const { onClick } = props;

  return (
    <button
      aria-label="arrow-left"
      className="carousel__button carousel__button_left"
      onClick={onClick}>
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
  speed: 450,
  slidesToShow: 4,
  slidesToScroll: 1,
  initialSlide: 0,
  nextArrow: <RightArrowStyle />,
  prevArrow: <LeftArrowStyle />,
  draggable: false,
  infinite: true,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        arrows: false,
        draggable: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 0,
        infinite: true,
        dots: true,
        arrows: false,
        draggable: true,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
        draggable: true,
        dots: true,
      },
    },
  ],
};

const Slider: React.FC = () => {
  const { categories, status } = useSelector((state: RootState) => state.category);

  const categoryItems = categories.map((obj) => <HomeCategoriesBlock key={obj.id} {...obj} />);
  const skeleton = [...Array(4)].map((_, index) => <SliderSkeleton key={index} />);

  return <Carousel {...settings}>{status === 'pending' ? skeleton : categoryItems}</Carousel>;
};

export default Slider;
