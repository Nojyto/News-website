import axios from "axios";
import { useEffect, useState } from "react";

const APIKEY = "5db79ebed0164ce1842ecf8ce8e5ece4";

function timeSince(pastDate: string) {
    let seconds = Math.floor(
        (new Date().getTime() - new Date(pastDate).getTime()) / 1000
    );

    let interval = seconds / 31536000;
    if (interval > 1) return Math.floor(interval) + " years";

    interval = seconds / 2592000;
    if (interval > 1) return Math.floor(interval) + " months";

    interval = seconds / 86400;
    if (interval > 1) return Math.floor(interval) + " days";

    interval = seconds / 3600;
    if (interval > 1) return Math.floor(interval) + " hours";

    interval = seconds / 60;
    if (interval > 1) return Math.floor(interval) + " minuts";

    return Math.floor(seconds) + " seconds";
}

const NewsCard = (data: any) => {
    let { description, publishedAt, source, title, url, urlToImage } =
        data.data;

    return (
        <a
            href={url}
            target="_blank"
            rel="noreferrer"
            className="w-full text-left align-left bg-primary"
        >
            <img
                src={urlToImage}
                alt={title}
                className="h-1/2 w-full object-cover mb-2"
            ></img>
            <p className="text-s text-accent mx-4 my-1 font-semibold">
                {timeSince(publishedAt)} ago - {source.name}
            </p>
            <h3 className="text-xl text-white mx-4 font-bold">{title}</h3>
            <p className="text-s text-white px-6 my-4 font-light break-all">
                {description}
            </p>
        </a>
    );
};

export default function MainLayout() {
    const [data, setData]: any = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("general");
    const [selectedCountry, setSelectedCountry] = useState("");

    useEffect(() => {
		axios.get(`https://newsapi.org/v2/top-headlines?category=${selectedCategory}${selectedCountry}&apiKey=${APIKEY}`)
			 .then((rsp)  => {setData(rsp.data)})
			 .catch((err) => {console.error(err)})
	}, [selectedCountry, selectedCategory])

    function handleCategoryChange(ev: any) {
        setSelectedCategory(ev.target.value);
    }

    function handleCountryChange(ev: any) {
        if (ev.target.value === "") setSelectedCountry("");
        else setSelectedCountry(`&country=${ev.target.value}`);
    }

    return (
        <main>
            <select
                className="h-10 min-w-screen top-20 fixed z-50 bg-accent flex w-2/3 opacity-95 font-bold"
                name="category-list"
                id="category-list"
                onChange={handleCategoryChange}
            >
                <option value="">All categories</option>
                <option value="business">Business</option>
                <option value="entertainment">Entertainment</option>
                <option value="health">Health</option>
                <option value="science">Science</option>
                <option value="sports">Sports</option>
                <option value="technology">Technology</option>
            </select>
            <select
                className="h-10 min-w-screen top-20 fixed z-50 bg-accent flex w-1/3 left-2/3 opacity-95 font-bold"
                name="category-list"
                id="category-list"
                onChange={handleCountryChange}
            >
                <option value="">Any country</option>
                <option value="us">USA</option>
                <option value="ru">Russia</option>
                <option value="jp">Japan</option>
                <option value="lt">Lithuania</option>
            </select>
            <section className="mt-24 z-0 w-full flex flex-col items-center justify-center align-middle">
                {data.articles?.map((el: any, indx: number) => (
                    <NewsCard data={el} key={indx} />
                ))}
            </section>
        </main>
    );
}
