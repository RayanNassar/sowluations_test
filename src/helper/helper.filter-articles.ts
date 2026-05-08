import { Articles } from "@/contant/articles";

export const FilterArticles = (keyWord: string) => {
  const data = [...Articles].filter((articles) => {
    const cond =
      articles.title.toLowerCase().indexOf(keyWord.toLowerCase()) > -1 ||
      articles.des.toLowerCase().indexOf(keyWord.toLowerCase()) > -1;

    if (!cond) return;

    return {
      title: articles.title.replaceAll(
        keyWord,
        `<span style="color: red">${keyWord}</span>`,
      ),
      date: articles.date,
      des: articles.des.replaceAll(
        keyWord,
        `<span style="color: red">${keyWord}</span>`,
      ),
    };
  });

  return data;
};
