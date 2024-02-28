type StarIconReadonlyProps = {
    fillLevel: number,
    index: number,
}


const StarIconReadonly = ({
                      fillLevel = 0,
                      index,

                  }: StarIconReadonlyProps) => {

    return <svg
        className={`cursor-pointer w-1/5 pulse-${index}`}
        xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 100">
        <defs>
            <path id="star-path"
                  d="M50 10L66.5 37.8L98.4 42.3L74.9 67.3L78.4 98.4L50 83.7L21.6 98.4L25.1 67.3L1.6 42.3L33.5 37.8L50 10Z"/>
            <clipPath id="star-clip">
                <use xlinkHref="#star-path"/>
            </clipPath>
        </defs>

        <g clipPath="url(#star-clip)">
            <rect width={`${!isNaN(fillLevel * 100) && fillLevel > 0 ? fillLevel * 100 : 0}%`} height="100%" fill="#FBBF24"/>
            <rect x={`${!isNaN(fillLevel * 100) && fillLevel > 0 ? fillLevel * 100 : 0}%`} width={`${!isNaN(fillLevel * 100) && fillLevel > 0 ? fillLevel * 100 : 0}%`} height="100%" fill="none"/>
        </g>
        <use xlinkHref="#star-path" stroke="black" strokeWidth="4px" fill="none"/>
    </svg>

};

export default StarIconReadonly;