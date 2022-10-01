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

export const NewsCard = (data: any) => {
    let { description, publishedAt, source, title, url, urlToImage } =
        data.data;

    return (
        <a
            href={url}
            target="_blank"
            rel="noreferrer"
            className="w-full text-left align-left bg-primary mt-4"
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