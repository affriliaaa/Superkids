function BenefitsItem({imgBenefit, titleBenefit, descBenefit}) {
    const baseBenefits = "flex flex-row gap-[22px] p-4 bg-white rounded-3xl transition-shadow duration-300 ease-in-out hover:shadow-[0_40px_24px_rgba(2,8,150,0.03)]"

    const typeBenefit = {
        image: "w-[80px] h-[80px] object-contain",
        title: "font-catamaran text-2xl font-semibold text-a-navy",
        desc: "font-lato text-base font-normal text-a-gray",
    };

    return (
        <div className={baseBenefits}>
            <img src={imgBenefit} alt={titleBenefit} className={typeBenefit.image}></img>
            <div className="flex flex-col gap-1">
                <h4 className={typeBenefit.title}>{titleBenefit}</h4>
                <p className={typeBenefit.desc}>{descBenefit}</p>
            </div>
        </div>
    )
}

export default BenefitsItem;