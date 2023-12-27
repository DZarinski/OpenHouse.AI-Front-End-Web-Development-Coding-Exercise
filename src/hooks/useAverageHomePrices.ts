import { useMemo } from "react";
import { useFetchHomes } from "../hooks";

// Define a type for the price accumulator
type PriceAccumulator = {
  total: number;
  count: number;
};

export const useAverageHomePrices = () => {
  // Fetch home data
  const homeData = useFetchHomes();

  return useMemo(() => {
    // Initialize a map to store average prices per community
    const averagePricesPerCommunity = new Map<string, number>();

    // If there's no home data, return the empty map
    if (!homeData.data) return averagePricesPerCommunity;

    // Initialize a map to store total prices and counts per community
    const communityTotals = new Map<string, PriceAccumulator>();

    // Iterate over the home data
    homeData.data.forEach((home) => {
      const { communityId, price } = home;
      const currentCommunityData = communityTotals.get(communityId);

      // If this is the first home in this community, initialize the accumulator
      if (!currentCommunityData) {
        communityTotals.set(communityId, {
          total: price,
          count: 1,
        });
      } else {
        // Otherwise, update the accumulator
        currentCommunityData.total += price;
        currentCommunityData.count += 1;
      }
    });

    // Calculate the average price for each community
    communityTotals.forEach((value, key) => {
      averagePricesPerCommunity.set(key, value.total / value.count);
    });

    // Return the map of average prices
    return averagePricesPerCommunity;
  }, [homeData.data]);
};
