
import axios from "axios";
import formattedReturn from "./formattedReturn";

export default async (event) => {
    try {
        const { body } = event;

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

        return formattedReturn(200, response.data);
    } catch (error) {
        console.error('Error updating guest group:', error);
         return formattedReturn(500, { error: 'Failed to update guest group' });
    }
}