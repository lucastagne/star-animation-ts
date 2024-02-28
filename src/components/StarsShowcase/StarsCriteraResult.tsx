import StarIconReadonly from "@components/StarsShowcase/StarIconReadonly.tsx";

const StarsCriteraResult = ({ values }: { values: number[] }) => {

    const overAllValue = values.reduce((acc, curr) => acc + curr, 0) / values.length;

    return (
        <div className={"h-full flex flex-col justify-start items-start p-10 w-1/3"}>
            <div className={"flex flex-row justify-start items-center"}>
                <h1 className={"text-6xl"}>Résultat</h1>
                <p className={"ml-5 text-4xl"}>({overAllValue})</p>
            </div>
            <div className={"flex flex-row justify-start items-center"}>
                <StarIconReadonly fillLevel={overAllValue >= 1 ? 1 : overAllValue} index={0}/>
                <StarIconReadonly fillLevel={overAllValue >= 2 ? 1 : overAllValue - 1} index={1}/>
                <StarIconReadonly fillLevel={overAllValue >= 3 ? 1 : overAllValue - 2} index={2}/>
                <StarIconReadonly fillLevel={overAllValue >= 4 ? 1 : overAllValue - 3} index={3}/>
                <StarIconReadonly fillLevel={overAllValue >= 5 ? 1 : overAllValue - 4} index={4}/>
            </div>
        </div>
    );
};

export default StarsCriteraResult;