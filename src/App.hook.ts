import { useState } from "react";

const useApp = () => {
    const [starState, setStarState] = useState<boolean[]>([false, false, false, false, false]);
    const [ratingCount, setRatingCount] = useState<number>(0);

    //UI handler functions
    function starClickHandler(index: number) {
        return function () {
            updateRating(index);
        }
    }

    //Business logics
    function updateRating(index: number) {
        setRatingCount(index + 1);
        setStarState(starState.map((_state, i) => {
            return i <= index ? true : false;
        }))
    }

    return {
        starState,
        ratingCount,
        starClickHandler
    };
};

export default useApp;