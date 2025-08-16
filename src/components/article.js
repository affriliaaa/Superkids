function ArticleLabel({children, type}) {
    const baseArtLabel = "px-4 py-1 rounded-full text-white font-catamaran text-sm font-medium"

    const variant = {
        orange: 'bg-a-orange',
        amber: 'bg-a-amber',
        blue: 'bg-a-blue',
        green: 'bg-a-green',
        purple: 'bg-a-purple',
        darkBlue: 'bg-a-dark-blue',
    };

    const bgClass = variant[type] || "bg-a-gray"

    return (
        <div className={`${baseArtLabel} ${bgClass}`}>
            {children}
        </div>
    )


}

function Article({imgArticle, titleArticle, descArticle, labelType, labelText, link}) {
    const baseArticle = "flex flex-col gap-4 justify-start items-start"

    return (
        <article><a  className={baseArticle} href={link}>
            <img src={imgArticle} className="rounded-[20px] w-full h-[160px] object-cover"/>
            <ArticleLabel type={labelType}>{labelText}</ArticleLabel>
            <p className="text-2xl font-catamaran font-semibold text-a-navy">{titleArticle}</p>
            <p className="text-sm font-lato text-a-gray">{descArticle}</p>
        </a></article>
    )
}

export default Article;
