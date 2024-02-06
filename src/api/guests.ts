import { Dispatch, SetStateAction } from "react";
import { RecordType } from "../Types/types";

export async function getGuestMatch(
    searchQuery: string,
    setGuestsMatchContext: Dispatch<SetStateAction<RecordType[] | []>>,
    setIsFetching: Dispatch<SetStateAction<boolean>>) {
    setIsFetching(true);
    const response = await fetch(
        `https://api.airtable.com/v0/appDC8tvy2OYcpKd4/guests?filterByFormula=search(lower("${searchQuery}"),lower(name))`,
        {
            headers: {
                Authorization: `Bearer keyZEIj7y1Z2S3ra6`,
            },
        }
    )

    const { records } = await response.json();
    setIsFetching(false);
    return setGuestsMatchContext(records);
}

export async function getGroup(
    searchQuery: string,
    setGuestsGroupContext: Dispatch<SetStateAction<RecordType[] | []>>
) {
    const response = await fetch(
        `https://api.airtable.com/v0/appDC8tvy2OYcpKd4/guests?filterByFormula=search("${searchQuery}", groupId)`,
        {
            headers: {
                Authorization: `Bearer keyZEIj7y1Z2S3ra6`,
            },
        }
    )

    const { records } = await response.json();
    const modifiedRecords = records.map((guest: RecordType) => {
        delete guest.createdTime;
        return guest;
    })
    return setGuestsGroupContext(modifiedRecords);
}

export async function updateGuestGroup(data: RecordType[]) {
    await fetch(
        `https://api.airtable.com/v0/appDC8tvy2OYcpKd4/guests`,
        {
            method: "PATCH",
            body: JSON.stringify({
                "records": data
            }),
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer keyZEIj7y1Z2S3ra6`,
            },
        }
    )
        .then((res) => res.json())
        .catch((error) => {
            console.error("Error:", error);
        })
}

// Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}`,
