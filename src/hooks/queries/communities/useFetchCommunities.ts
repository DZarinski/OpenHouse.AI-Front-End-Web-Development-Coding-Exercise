import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import axios from "axios";
import { z } from "zod";

export const Community = z.object({
  id: z.string().uuid(),
  name: z.string(),
  imgUrl: z.string(),
  group: z.string(),
});

export type CommunityType = z.infer<typeof Community>;

const getCommunities = async () => {
  try {
    const { data } = await axios.get<CommunityType[]>("/communities.json");
    const parsedData = Community.array().safeParse(data);
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
    console.error("Error fetching communities:", error);
    if (axios.isAxiosError(error)) {
      // Handle Axios-specific error
      throw new Error(error.message);
    }
    // Handle other errors
    throw new Error("An error occurred while fetching communities");
  }
};

export const useFetchCommunities = (
  options?: UseQueryOptions<CommunityType[]>
) => {
  return useQuery<CommunityType[]>({
    queryKey: ["communities"],
    queryFn: getCommunities,
    staleTime: 1000 * 60 * 30, // 30 minutes
    gcTime: 1000 * 60 * 60 * 24, // 24 hours
    ...options,
  });
};
