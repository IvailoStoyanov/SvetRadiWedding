export async function getGuestMatch(searchQuery, setGuestsMatchContext, setIsFetching) {
    setIsFetching(true);
    const response = await fetch(
        `https://api.airtable.com/v0/appE1RdYYTJ8AeK9j/guests?filterByFormula=search(lower("${searchQuery}"),lower(name))`,
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

export async function getGroup(searchQuery, setGuestsGroupContext) {
    const response = await fetch(
        `https://api.airtable.com/v0/appE1RdYYTJ8AeK9j/guests?filterByFormula=search("${searchQuery}", groupId)`,
        {
            headers: {
                Authorization: `Bearer keyZEIj7y1Z2S3ra6`,
            },
        }
    )

    const { records } = await response.json();
    const modifiedRecords = records.map(guest => {
        delete guest.createdTime;
        return guest;
    })
    return setGuestsGroupContext(modifiedRecords);
}

export async function updateGuestGroup(data) {
    await fetch(
        `https://api.airtable.com/v0/appE1RdYYTJ8AeK9j/guests`,
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
