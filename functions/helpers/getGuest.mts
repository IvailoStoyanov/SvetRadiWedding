
import axios from "axios";

export default async (req) => {
    const url = new URL(req.url);
    const searchQuery = url.searchParams.get("searchQuery");
    const target = url.searchParams.get("target");

    const formula = target === 'group' ? `{groupId} = "${searchQuery}"` : `search(lower("${searchQuery}"), lower(name))`;

    const response = await axios.get(
        `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/guests`,
        {
            params: {
                filterByFormula: formula,
            },
            headers: {
                Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}`,
                'Content-Type': 'application/json'
            },
        }
    ).then(record => {
        // console.log('wow', record);
        return new Response(
            JSON.stringify(record.data),
            {
                headers: {
                    'content-type': 'application/json'
                }
            }
        )
        
        // return new Response(
        //     JSON.stringify(response.data),
            // {
            //     headers: {
            //         'content-type': 'application/json'
            //     }
            // }
        // );
    });

    
}