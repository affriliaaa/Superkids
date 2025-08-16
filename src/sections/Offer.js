import OfferItem from "../components/offerItem"
import bottomArrow from "../images/ic-dropdown.svg"

export default function Offer() {
    return (
        <section id="offer" className="relative h-[216px] bg-a-light-gray">
            <div className="max-w-container w-full mx-auto">
                <div className="absolute top-[-80px] py-10 px-[69px] rounded-3xl bg-white gap-[21px] shadow-[0_25px_15px_rgba(2, 8, 150, 0.3)]">
                    <div className="flex flex-col gap-8">
                        <h3 className="font-catamaran font-black text-a-navy text-h3">What we offer</h3>
                        <div className="flex flex-row flex-wrap items-center justify-center gap-[70px]">
                            <OfferItem label="Music" type="music"></OfferItem>
                            <OfferItem label="Fashion" type="fashion"></OfferItem>
                            <OfferItem label="Sports" type="sports"></OfferItem>
                            <OfferItem label="Craft" type="craft"></OfferItem>
                            <OfferItem label="Health" type="health"></OfferItem>
                            <OfferItem label="Food" type="food"></OfferItem>
                            <OfferItem label="Education" type="education"></OfferItem>
                            <OfferItem label="Toys" type="toys"></OfferItem>
                        </div>
                        <a href="#" className="w-auto mx-auto"><img src={bottomArrow}/></a>
                    </div>
                </div>
            </div>
        </section>
    )
}