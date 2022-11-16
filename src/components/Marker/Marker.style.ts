import styled from "styled-components";

export const MarkerStyle = styled.div`
.pin {
    width:56px;
    height: 52px;
    background-image:url('https://musicpassonline.com:3000/images/location.png')
}
.pin:after {
    width:56px;
    height: 40px;

    background-image:url('https://musicpassonline.com:3000/images/location.png')
}

.bounce {
    animation-name: bounce;
    animation-fill-mode: both;
    animation-duration: 1s;
}


@keyframes pulsate {
    0% {
        transform: scale(0.1, 0.1);
        opacity: 0;
    }

    50% {
        opacity: 1;
    }

    100% {
        transform: scale(1.2, 1.2);
        opacity: 0;
    }
}

@keyframes bounce {
    0% {
        opacity: 0;
        transform: translateY(-2000px) 
    }

    60% {
        opacity: 1;
        transform: translateY(30px) 
    }

    80% {
        transform: translateY(-10px) 
    }

    100% {
        transform: translateY(0) 
    }
} 
`;
