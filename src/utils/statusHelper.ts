export const statusHelper = (status: string,) => {
    if (status === "Waiting for reply" || status === "Declined") {
        return "Declined"
    }
    return "Accepted"
}