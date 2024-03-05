
import axios from "axios";

export default async (req) => {
    const url = new URL(req.url);
    const searchQuery = url.searchParams.get("searchQuery");
    const target = url.searchParams.get("target");

    const formula = target === 'group' ? `{groupId} = "${searchQuery}"` : `search(lower("${searchQuery}"), lower(name))`;

    // `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/guests`,
    // Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}`,

    const response = await axios.get(
        `https://api.airtable.com/v0/appDC8tvy2OYcpKd4/guests`,
        {
            params: {
                filterByFormula: formula,
            },
            headers: {
                Authorization: `Bearer patRAa7RoL0jf1tQT.37d57b69418215f15dd37dd4fcdfee80d9825c89983626fde98545d5e71bff85`,
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