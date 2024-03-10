
import axios from "axios";

export default async (req: Request) => {
    const response = await axios.get(
        `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/accommodations`,
        {
            headers: {
                Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}`,
                'Content-Type': 'application/json'
            },
        }
    )

    return new Response(
        JSON.stringify(response.data.records),
        {
            headers: {
                'content-type': 'application/json'
            }
        }
    );
}