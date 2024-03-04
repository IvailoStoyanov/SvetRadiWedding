import getGuest from "./helpers/getGuest.mts";
import updateGuestGeoup from "./helpers/updateGuestGroup.mts";

export default async (req: Request, context) => {
    const { method } = req;
    switch (method) {
        case 'GET':
            return await getGuest(req);
        case 'PATCH':
            return await updateGuestGeoup(req);
        default:
            return {
                statusCode: 405,
                body: JSON.stringify({ message: 'Method Not Allowed' }),
            };
    }
}