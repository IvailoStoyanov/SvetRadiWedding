import { createContext, useState } from "react";

const GuestsContext = createContext();

const GuestsProvider = ({ children }) => {
    const [guestsMatchContext, setGuestsMatchContext] = useState([]);
    const [guestsGroupContext, setGuestsGroupContext] = useState([]);
    const [isFetching, setIsFetching] = useState(false);

    const data = {
        guestsMatchContext,
        setGuestsMatchContext,
        guestsGroupContext,
        setGuestsGroupContext,
        isFetching,
        setIsFetching,
    };

    return (
        <GuestsContext.Provider value={data}>
            {children}
        </GuestsContext.Provider>
    );
};

export { GuestsContext, GuestsProvider };
