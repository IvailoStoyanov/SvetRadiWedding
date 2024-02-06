import { createContext, useState } from "react";
import { GuestProviderPropsType, GuestDataProps, RecordType } from "../Types/types";


const GuestsContext = createContext<GuestDataProps | null>(null);

const GuestsProvider = ({ children }: GuestProviderPropsType) => {
    const [guestsMatchContext, setGuestsMatchContext] = useState<RecordType[]>([]);
    const [guestsGroupContext, setGuestsGroupContext] = useState<RecordType[]>([]);
    const [isFetching, setIsFetching] = useState(false);

    const data: GuestDataProps = {
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
