import { useQuery } from "@tanstack/react-query";

const API_KEY = import.meta.env.VITE_CAT_API_KEY;

export default function useCatsImages(limit = 5) {
  return useQuery({
    queryKey: ["cats-images"],
    queryFn: async () => {
      const res = await fetch(
        `https://api.thecatapi.com/v1/images/search?limit=${limit}`,
        {
          headers: {
            "x-api-key": API_KEY,
          },
        }
      );
      if (!res.ok) throw new Error("Failed to load cat images");
      const data = await res.json();
      return (data as { url: string }[]).map((item) => item.url); // garder juste les urls
    },
    staleTime: 1000 * 60, //une minute
  });
}
