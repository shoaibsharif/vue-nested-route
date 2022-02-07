import { useQuery } from "vue-query";
import axios from "axios";

export const useSingleProduct = (id) => {
  return useQuery(["product", id], ({ queryKey }) =>
    axios.get(`/products/${queryKey[1]}`).then((res) => res.data)
  );
};
