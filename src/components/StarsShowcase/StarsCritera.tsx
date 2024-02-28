import React from 'react';
import StarIcon from "@components/StarsShowcase/StarIcon.tsx";

type StarProps = {
    value: number,
    setValue: (value: number) => void,
    libelle: string
}

const StarsCritera = ({value, setValue, libelle}: StarProps) => {
    const [criteraValue, setCriteraValue] = React.useState<number>(value)
    const [isHovered, setIsHovered] = React.useState<boolean>(false)
    const [gotClicked, setGotClicked] = React.useState<boolean>(false)
    const [criteraValueHovered, setCriteraValueHovered] = React.useState<number>(0)
    const localUpdate = (newValue: number) => {
        setCriteraValue(newValue)
        setValue(newValue)
        setGotClicked(true)
        setTimeout(() => {
            setGotClicked(false)
        }, 500)
    }

    const localUpdateHovered = (newValue: number) => {
        setCriteraValueHovered(newValue)
    }

    const onMouseEnter = () => {
        setIsHovered(true)
    }

    const onMouseLeave = () => {
        setIsHovered(false)
    }

    return (
        <div className={"w-full h-full flex flex-col justify-start items-start p-10"}>
            <div className={"flex flex-row justify-start items-center"}>
                <h1 className={"text-6xl"}>{libelle}</h1>
                {!isNaN(criteraValue) && criteraValue !== 0 ? <p className={"ml-5 text-4xl"}>({criteraValue})</p> : null}
            </div>
            <div className={"flex flex-row justify-start items-center"}>
                <StarIcon
                    gotClicked={gotClicked}
                    onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}
                    isHovered={isHovered}
                    fillLevelHovered={criteraValueHovered >= 1 ? 1 : criteraValueHovered}
                    updateFillLevelHovered={(newValue) => localUpdateHovered(newValue)}
                    fillLevel={criteraValue >= 1 ? 1 : criteraValue}
                    updateFillLevel={(newValue) => localUpdate(newValue)}
                    index={0}/>
                <StarIcon
                    gotClicked={gotClicked && criteraValue > 1}
                    onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}
                    isHovered={isHovered}
                    fillLevelHovered={criteraValueHovered >= 2 ? 1 : criteraValueHovered - 1}
                    updateFillLevelHovered={(newValue) => localUpdateHovered(newValue + 1)}
                    fillLevel={criteraValue >= 2 ? 1 : criteraValue - 1}
                    updateFillLevel={(newValue) => localUpdate(newValue + 1)}
                    index={1}/>
                <StarIcon
                    gotClicked={gotClicked && criteraValue > 2}
                    onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}
                    isHovered={isHovered}
                    fillLevelHovered={criteraValueHovered >= 3 ? 1 : criteraValueHovered - 2}
                    updateFillLevelHovered={(newValue) => localUpdateHovered(newValue + 2)}
                    fillLevel={criteraValue >= 3 ? 1 : criteraValue - 2}
                    updateFillLevel={(newValue) => localUpdate(newValue + 2)}
                    index={2}/>
                <StarIcon
                    gotClicked={gotClicked && criteraValue > 3}
                    onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}
                    isHovered={isHovered}
                    fillLevelHovered={criteraValueHovered >= 4 ? 1 : criteraValueHovered - 3}
                    updateFillLevelHovered={(newValue) => localUpdateHovered(newValue + 3)}
                    fillLevel={criteraValue >= 4 ? 1 : criteraValue - 3}
                    updateFillLevel={(newValue) => localUpdate(newValue + 3)}
                    index={3}/>
                <StarIcon
                    gotClicked={gotClicked && criteraValue > 4}
                    onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}
                    isHovered={isHovered}
                    fillLevelHovered={criteraValueHovered >= 5 ? 1 : criteraValueHovered - 4}
                    updateFillLevelHovered={(newValue) => localUpdateHovered(newValue + 4)}
                    fillLevel={criteraValue >= 5 ? 1 : criteraValue - 4}
                    updateFillLevel={(newValue) => localUpdate(newValue + 4)}
                    index={4}/>
            </div>
        </div>
    );
};

export default StarsCritera;