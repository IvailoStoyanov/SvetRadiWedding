export default (statusCode: number, body: {}) => {
    return {
        statusCode,
        body: JSON.stringify(body),
    };
};