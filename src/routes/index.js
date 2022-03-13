export const post = (event) => {
    if (event.request.headers.get("accept") === "application/json") {
        return {
            status: 200,
            body: {
                goto: "/?submitted"
            }
        }
    } else {
        return {
            status: 302,
            headers: {
                location: "/?submitted"
            }
        }
    }

}