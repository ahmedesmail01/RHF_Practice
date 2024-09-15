import { Option } from "@/types/options";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export function useStates() {
  return useQuery({
    queryKey: ["states"],
    queryFn: () =>
      axios
        .get<Option[]>("http://localhost:8080/states")
        .then((res) => res.data),
  });
}
