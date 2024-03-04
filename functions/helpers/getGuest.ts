
import axios from "axios";
import formattedReturn from "./formattedReturn";

export default async (event) => {
    try {
        const { searchQuery, target } = event.queryStringParameters;
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
        );

        return formattedReturn(200, response.data.records)
    } catch (error) {
        console.error('Error fetching guests:', error);
        return formattedReturn(500, { error: 'Failed to fetch guests' });
    }
}