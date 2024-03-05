// TO DO: write a test with axios to check for a normal request with the ENV Variables.
// Then build on top of the requests
// Test out the patch as well


import axios from "axios";

export default async (req) => {
    const response = await axios.get(
        `https://api.airtable.com/v0/appDC8tvy2OYcpKd4/guests`,
        {
            headers: {
                Authorization: `Bearer patRAa7RoL0jf1tQT.37d57b69418215f15dd37dd4fcdfee80d9825c89983626fde98545d5e71bff85`,
                'Content-Type': 'application/json'
            },
        }
    );

    console.log(response.data);
    

    return new Response(
        JSON.stringify(response.data),
        {
            headers: {
                'content-type': 'application/json'
            }
        }
    );
};