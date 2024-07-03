import Image from "next/image";
import { formatDistanceToNow } from "date-fns";
import { useEffect, useState } from "react";

export interface ComicData {
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

export default function Comic() {
    const [comicData, setComicData] = useState<ComicData | null>(null);

    useEffect(() => {
        getComicsData().then(data => setComicData(data));
    });

    return (
        <div className="flex flex-col w-full gap-6">
            <div className="flex flex-col">
                <Image className="w-fit h-auto m-w-full pb-2"
                    src={comicData?.img || "/inno-fwd-2024/comic-placeholder.png"}
                    alt={comicData?.alt || "loading comic..."}
                    width={512} height={256} />

                <p>
                    {comicData?.safe_title || "loading comic..."}
                </p>

                <p className="text-[#0E235899]">
                    {comicData ? formatDate(comicData.year, comicData.month, comicData.day) : ""}
                </p>
            </div>
        </div>
    );
};

async function getComicsData(): Promise<ComicData> {
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

function formatDate(year: number, month: number, day: number) {
    const date = new Date(year, month - 1, day);
    return `${formatDistanceToNow(date)} ago`;
}