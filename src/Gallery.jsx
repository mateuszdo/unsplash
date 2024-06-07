import { useGlobalContext } from "./context";
import { useQuery } from "@tanstack/react-query";
import  axios from "axios";


const url = `https://api.unsplash.com/search/photos/?client_id=${import.meta.env.VITE_API_KEY}&per_page=12`
console.log(import.meta.env.VITE_API_KEY);
const Gallery = () => {
  const { searchTerm } = useGlobalContext();
  const response = useQuery({
      queryKey: ['images', searchTerm],
      queryFn: async () => {
        const result = await axios.get(`${url}&query=${searchTerm}`);
        return result.data;
      }
  });
  console.log(response);
  if(response.isLoading) {
    return (
    <section className="image-container">
      <h4>Loading...</h4>
    </section>
    );
  }
  if(response.isError) {
    return (
    <section className="image-container">
      <h4>There was an error</h4>
    </section>
    );
  }
  const results = response.data.results;
  console.log(results);
  if(results.length > 0) {
    return (
      <section className="image-container">
        {results.map((item) => {
          return <img src={item?.urls?.regular} key={item.id} alt={item.alt_description} className="img"></img>
        })}
      </section>
    )
  }
}

export default Gallery;