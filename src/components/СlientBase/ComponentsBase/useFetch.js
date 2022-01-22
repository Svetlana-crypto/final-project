import {useEffect, useState} from "react";
import paginate from "./utils";
const url = 'https://api.github.com/users/john-smilga/followers?per_page=100';

export const useFetch = () =>{
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  // преобразовываем через useFetch json формат в обычный обьект.

  const getProducts = async () => {
    const response = await fetch(url);
    //async ,  await что бы работало все ассинхронно.
    const data = await response.json();
    setData(paginate(data));
    //  setData-обловляет данные
    setLoading(false)
    // преобразуется в функцию,он должен пропадать.
  };
  useEffect(() =>{
    getProducts()
  },[]);
  return {loading, data}
};
export default useFetch;