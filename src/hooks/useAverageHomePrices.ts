import { useMemo } from "react";
import { useFetchHomes } from "../hooks";

type Accumulator = {
  total: number;
  count: number;
};

type AveragePriceMap = Map<string, number>;

export const useAverageHomePrices = () => {
  const homes = useFetchHomes();

  return useMemo(() => {
    const averagesMap: AveragePriceMap = new Map();

    if (!homes.data) return averagesMap;

    let pricesMap = new Map<string, Accumulator>();

    homes.data.forEach((home) => {
      const { communityId, price } = home;
      let communityData = pricesMap.get(communityId);

      if (!communityData) {
        pricesMap.set(communityId, { total: price, count: 1 });
      } else {
        communityData.total += price;
        communityData.count += 1;
      }
    });

    pricesMap.forEach((value, key) => {
      averagesMap.set(key, value.total / value.count);
    });

    return averagesMap;
  }, [homes.data]);
};
