import { Dispatch, SetStateAction } from "react";
import { RecordType } from "../Types/types";
import axios from 'axios';
import { statusHelper } from '../utils/statusHelper';

const baseURL = process.env.PRODUCTION === 'production' ? 'https://radi-and-svet.netlify.app' : 'http://localhost:3000';

export async function getGuestMatch(
    searchQuery: string,
    setGuestsMatchContext: Dispatch<SetStateAction<RecordType[] | []>>,
    setIsFetching: Dispatch<SetStateAction<boolean>>
) {
    setIsFetching(true);

    await axios.get(`${baseURL}/api/guests/guest?searchQuery=${searchQuery}`)
        .then(response => {
            setIsFetching(false);
            setGuestsMatchContext(response.data);
        })
        .catch(error => {
            console.error('There was a problem with the request:', error);
        });
}

export async function getGroup(
    searchQuery: string,
    setGuestsGroupContext: Dispatch<SetStateAction<RecordType[] | []>>
) {
    await axios.get(`${baseURL}/api/guests/group?searchQuery=${searchQuery}`)
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
        "records": updatedData.map(guest => {
            return {
                ...guest,
                fields: {
                    ...guest.fields,
                    status: statusHelper(guest.fields.status)
                }
            };
        })
    }

    try {
        const response = await axios.patch(`${baseURL}/api/guests/update`, structuredData, {
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

