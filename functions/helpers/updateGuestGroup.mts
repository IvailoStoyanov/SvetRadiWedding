
import axios from "axios";

export default async (req) => {
    const body = await req.json();

    const response = await axios.patch(
        `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/guests`,
        body,
        {
            headers: {
                Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}`,
                'Content-Type': 'application/json',
            }
        }
    );

    return new Response(
        JSON.stringify(response.data),
        {
            headers: {
                'content-type': 'application/json'
            }
        }
    );
}