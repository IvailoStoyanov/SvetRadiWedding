import { Dispatch, SetStateAction } from "react";
import { RecordType } from "../Types/types";
import axios from 'axios';

export async function getGuestMatch(
    searchQuery: string,
    setGuestsMatchContext: Dispatch<SetStateAction<RecordType[] | []>>,
    setIsFetching: Dispatch<SetStateAction<boolean>>
) {
    setIsFetching(true);

    await axios.get(`http://localhost:3000/api/guests/guest?searchQuery=${searchQuery}`)
        .then(response => {
            setIsFetching(false);
            setGuestsMatchContext(response.data);
            console.log(response.data);

        })
        .catch(error => {
            console.error('There was a problem with the request:', error);
        });
}

export async function getGroup(
    searchQuery: string,
    setGuestsGroupContext: Dispatch<SetStateAction<RecordType[] | []>>
) {
    await axios.get(`http://localhost:3000/api/guests/group?searchQuery=${searchQuery}`)
        .then(response => {
            const modifiedRecords = response.data.map((guest: RecordType) => {
                delete guest.createdTime;
                return guest;
            })
            setGuestsGroupContext(modifiedRecords);
        })
        .catch(error => {
            console.error('There was a problem with the request:', error);
        });
}

export async function updateGuestGroup(updatedData: RecordType[]) {
    
    const structuredData = {
        "records": updatedData
    }
    
    console.log(structuredData, 'needs to equal the postman body' );
    
    try {
        const response = await axios.patch('http://localhost:3000/api/guests/update', structuredData, {
            headers: {
                'Content-Type': 'application/json',
            },
        });

        return response.data;
    } catch (error) {
        console.error('Error updating guest group:', error);
        throw error;
    }
}

