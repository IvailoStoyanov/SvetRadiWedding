import getGuest from "./helpers/getGuest";
import updateGuestGeoup from "./helpers/updateGuestGroup";

exports.handler = async (event) => {
    try {
        const { httpMethod } = event;

        switch (httpMethod) {
            case 'GET':
                return await getGuest(event);
                case 'PATCH':
                return await updateGuestGeoup(event);
            default:
                return {
                    statusCode: 405,
                    body: JSON.stringify({ message: 'Method Not Allowed' }),
                };
        }
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Internal Server Error' }),
        };
    }
}