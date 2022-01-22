
const paginate = (followers) => {
  const itemPerPage = 10;
  // сколько на одной странице показывает
  const numberOfPages = Math.ceil(followers.length / itemPerPage);
  // выделяет на еаеой странице мы в данный момент
  // Math.ceil  -  округляем
  const newFollowers = Array.from({length:numberOfPages}, (_, index) =>{
    // Array.from  - создать массив, создаем обьект length:numberOfPages с ключем length:  и значением numberOfPages
    const start = index * itemPerPage;
    return followers.slice(start, start + itemPerPage)
    // slice - извлекает элементы в новый массив
  });
  return newFollowers
};
export default paginate;