const axios = require('axios');

const guestsController = {
    getGuestMatch: async (req, res) => {
        try {
            const { searchQuery } = req.query;

            const response = await axios.get(
                `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/guests`,
                {
                    params: {
                        filterByFormula: `search(lower("${searchQuery}"), lower(name))`,
                    },
                    headers: {
                        Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}`,
                        'Content-Type': 'application/json'
                    },
                }
            );

            return res.json(response.data.records);
        } catch (error) {
            console.error('Error fetching guests:', error);
            res.status(500).json({ error: 'Failed to fetch guests' });
        }
    },
    getGuestGroup: async (req, res) => {
        try {
            const { searchQuery } = req.query;

            const response = await axios.get(
                `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/guests`,
                {
                    params: {
                        filterByFormula: `{groupId} = "${searchQuery}"`,
                    },
                    headers: {
                        Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}`,
                        'Content-Type': 'application/json'
                    },
                }
            );
            return res.json(response.data.records);
        } catch (error) {
            console.error('Error fetching group:', error);
            res.status(500).json({ error: 'Failed to fetch group' });
        }
    },
    updateGuestGroup: async (req, res) => {
        try {
            const updatedData = req.body;

            const response = await axios.patch(
                `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/guests`,
                updatedData,
                {
                    headers: {
                        Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}`,
                        'Content-Type': 'application/json',
                    }
                }
            );
            return res.json(response.data);
        } catch (error) {
            console.error('Error updating guest group:', error);
            res.status(500).json({ error: 'Failed to update guest group' });
        }
    }
};

module.exports = guestsController;
