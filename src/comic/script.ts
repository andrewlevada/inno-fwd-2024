import { formatDistanceToNow } from "date-fns";

interface ComicData {
  alt: string;
  day: number;
  img: string;
  link: string;
  month: number;
  news: string;
  num: number;
  safe_title: string;
  title: string;
  transcript: string;
  year: number;
}

const comicContainer = document.querySelector("#comic") as HTMLElement;
const comicImage = comicContainer.querySelector("img") as HTMLImageElement;
const comicTitle = comicContainer.querySelector(".title") as HTMLParagraphElement;
const comicDate= comicContainer.querySelector(".date") as HTMLParagraphElement;

getComicsData().then(data => {
  comicImage.src = data.img;
  comicImage.alt = data.alt;

  comicTitle.textContent = data.safe_title;

  const date = new Date(data.year, data.month - 1, data.day);
  comicDate.textContent = `${formatDistanceToNow(date)} ago`;
});

async function getComicsData() : Promise<ComicData> {
  const idRequestParams = new URLSearchParams({ email: "a.levada@innopolis.university" });
  const idRequestHost = "https://fwd.innopolis.university/api/hw2";

  const comicId = await fetch(`${idRequestHost}?${idRequestParams.toString()}`)
    .then(response => response.text())
    .then(body => Number.parseInt(body));

  const comicRequestParams = new URLSearchParams({ id: comicId.toString() });
  const comicRequestHost = "https://fwd.innopolis.university/api/comic";

  return fetch(`${comicRequestHost}?${comicRequestParams.toString()}`)
    .then(response => response.json() as Promise<ComicData>);
}
