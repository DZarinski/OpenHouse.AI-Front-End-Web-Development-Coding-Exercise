import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import axios from "axios";
import { z } from "zod";

export const Home = z.object({
  id: z.string().uuid(),
  communityId: z.string().uuid(),
  price: z.number(),
  area: z.number(),
  type: z.string(),
});

export type HomeType = z.infer<typeof Home>;

const getHomes = async () => {
  try {
    const { data } = await axios.get<HomeType[]>("/homes.json");
    const parsedData = Home.array().safeParse(data);
    if (!parsedData.success) {
      // Detailed error information
      const errors = parsedData.error.issues.map((issue) => ({
        path: issue.path.join("."),
        message: issue.message,
      }));

      const errorMessage = errors
        .map((error) => `Path: ${error.path}, Message: ${error.message}`)
        .join("\n");

      throw new Error(`Data validation failed: \n${errorMessage}`);
    }
    return parsedData.data;
  } catch (error) {
    console.error("Error fetching homes:", error);
    if (axios.isAxiosError(error)) {
      // Handle Axios-specific error
      throw new Error(error.message);
    }
    // Handle other errors
    throw new Error("An error occurred while fetching homes");
  }
};

export const useFetchHomes = (options?: UseQueryOptions<HomeType[]>) => {
  return useQuery<HomeType[]>({
    queryKey: ["homes"],
    queryFn: getHomes,
    staleTime: 1000 * 60 * 30, // 30 minutes
    gcTime: 1000 * 60 * 60 * 24, // 24 hours
    ...options,
  });
};
