import React, { Component } from 'react'
import Lottie from 'react-lottie';
import { app_develop } from '../../../assets/exports/lottie';


const  LottieAnimation = ({ lottie, height, width }) => {

  
        const defaultOptions = {
            loop: true,
            autoplay: true,
            animationData: lottie,
            rendererSettings: {
                preserveAspectRatio: "xMidYMid slice"
            }
        };

        return (
            <div>
                <Lottie
                    options={defaultOptions}
                    height={height}
                    width={width}
                />
            </div>
        )
    }



export default LottieAnimation