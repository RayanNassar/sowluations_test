import { Articles } from "@/constant/articles";

export const FilterArticles = (keyWord: string) => {
  const data = [...Articles]
    .filter((articles) => {
      return (
        articles.title.toLowerCase().indexOf(keyWord.toLowerCase()) > -1 ||
        articles.des.toLowerCase().indexOf(keyWord.toLowerCase()) > -1
      );
    })
    .map((articles) => ({
      title: articles.title.replaceAll(
        new RegExp(keyWord, "gi"),
        (e) => `<span style="color: red">${e}</span>`,
      ),
      date: articles.date,
      des: articles.des.replaceAll(
        new RegExp(keyWord, "gi"),
        (e) => `<span style="color: red">${e}</span>`,
      ),
    }));

  return data;
};
