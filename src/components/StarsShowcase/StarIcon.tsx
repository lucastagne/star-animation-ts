import React from "react";

type StarIconProps = {
    fillLevel: number,
    fillLevelHovered: number,
    updateFillLevel: (newValue: number) => void,
    updateFillLevelHovered: (newValue: number) => void,
    isHovered: boolean,
    index: number,
    onMouseEnter: () => void,
    onMouseLeave: () => void,
    gotClicked: boolean
}


const StarIcon = ({
                      fillLevel = 0,
                      fillLevelHovered,
                      updateFillLevel,
                      updateFillLevelHovered,
                      isHovered,
                      onMouseEnter,
                      onMouseLeave,
                      index,
                      gotClicked
                  }: StarIconProps) => {
    const onMouseMoveHandler = (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
        const fullWidth = event.currentTarget.getBoundingClientRect().width;
        const offset = event.nativeEvent.offsetX;
        const newFillLevel = offset / fullWidth;
        const roundedFillLevel = Math.round(newFillLevel * 40) / 40;

        updateFillLevelHovered(roundedFillLevel);
    }

    const onClickHandler = (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
        const fullWidth = event.currentTarget.getBoundingClientRect().width;
        const offset = event.nativeEvent.offsetX;
        const newFillLevel = offset / fullWidth;
        const roundedFillLevel = Math.round(newFillLevel * 4) / 4;
        updateFillLevel(roundedFillLevel);
    }

    const ref = React.useRef<SVGSVGElement>(null);

    React.useEffect(() => {
        if (gotClicked && ref.current)
            ref.current.animate([
                {transform: "translateY(0)"},
                {transform: "translateY(-5px)"},
                {transform: "translateY(0)"}
            ], {
                duration: 250,
                iterations: 1,
                delay: index * 50
            })
    }, [gotClicked, index])

    return <svg
        ref={ref}
        className={`cursor-pointer w-1/5 pulse-${index}`}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onClick={onClickHandler}
        onMouseMove={onMouseMoveHandler}
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
            {isHovered && fillLevelHovered > 0 && <rect width={`${isNaN(fillLevelHovered * 100) ? 0 : fillLevelHovered * 100}%`} height="100%" fill="#FDE68A" fillOpacity={0.4}/>}
        </g>
        <use xlinkHref="#star-path" stroke="black" strokeWidth="4px" fill="none"/>
    </svg>

};

export default StarIcon;