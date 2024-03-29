import { ReactNode, Dispatch, SetStateAction } from "react";

export interface GuestProviderPropsType {
    children: ReactNode;
}

export interface AccommodationType {
    id: string,
    createdTime?: string,
    fields: {
        name: string,
        status: string
    }
}

export interface RecordType {
    id: string,
    createdTime?: string,
    fields: {
        alergies: string,
        accommodation: string,
        groupId: string,
        groupName: string,
        menu: string,
        name: string,
        status: string,
        transport: string,
    }
}

export interface GuestDataProps {
    guestsMatchContext: RecordType[] | [],
    setGuestsMatchContext: Dispatch<SetStateAction<RecordType[] | []>>,
    guestsGroupContext: RecordType[] | [],
    setGuestsGroupContext: Dispatch<SetStateAction<RecordType[] | []>>,
    isFetching: boolean,
    setIsFetching: Dispatch<SetStateAction<boolean>>,
}