import React from "react";
import StarsCritera from "@components/StarsShowcase/StarsCritera.tsx";
import StarsCriteraResult from "@components/StarsShowcase/StarsCriteraResult.tsx";

const StarsShowcase = () => {
    const [ starValues, setValues ] = React.useState<number[]>([])

    const setStarValue = (index: number, value: number) => {
        const newStarValues = [...starValues]
        newStarValues[index] = value
        setValues(newStarValues)
    }

    /*check if length === 4 and if every value is set*/
    const showResult = starValues.length === 4 && starValues.every(value => typeof value !== undefined)

    console.log(starValues, typeof starValues[0])

    return (
        <div className={"w-full h-full flex flex-col"}>
            <div className={"h-full w-full flex items-center"}>
                <div className={"h-full w-1/3"}>
                    <StarsCritera value={starValues[0]} setValue={(value) => setStarValue(0, value)} libelle={"Design"} />
                </div>
                <div className={"h-full w-1/3"}>
                    <StarsCritera value={starValues[1]} setValue={(value) => setStarValue(1, value)} libelle={"Fonctionnalité"} />
                </div>
            </div>
            <div className={"h-full w-full flex items-center"}>
                <div className={"h-full w-1/3"}>
                    <StarsCritera value={starValues[2]} setValue={(value) => setStarValue(2, value)} libelle={"Animation"} />
                </div>
                <div className={"h-full w-1/3"}>
                    <StarsCritera value={starValues[3]} setValue={(value) => setStarValue(3, value)} libelle={"Feeling Global"} />
                </div>
            </div>
            <div className={"h-full w-full flex justify-center items-center"}>
                {
                    showResult ? (
                        <StarsCriteraResult values={starValues} />
                    ) : null
                }
            </div>
        </div>
    );
};

export default StarsShowcase;