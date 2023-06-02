// API fetch
export const getPortfolio = async () => {
    try {
        const apiKey: string = process.env.PORTFOLIO_API_ENDPOINT;
        const data = await fetch(apiKey);

        if (!data.ok) {
            throw new Error("Failed to fetch portfolio data");
        }

        const portfolioData = await data.json();
        return portfolioData;
    } catch (error) {
        console.error("Error fetching portfolio data:", error);
        throw error;
    }
};