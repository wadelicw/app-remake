import agent from "./agent.js";

const getTopApps = async () => {
    const response = await agent.get("/top100");
    return response.data;
}

const getGrossingApps = async () => {
    const response = await agent.get("/top10_grossing");
    return response.data;
}


export default {getTopApps, getGrossingApps};
