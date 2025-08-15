import icMusic from "../images/ic-music.svg"
import icFashion from "../images/ic-fashion.svg"
import icSports from "../images/ic-sports.svg"
import icCraft from "../images/ic-craft.svg"
import icHealth from "../images/ic-health.svg"
import icFood from "../images/ic-food.svg"
import icEdu from "../images/ic-education.svg"
import icToys from "../images/ic-toys.svg"


export default function Offer() {
    return (
        <section className="bg-transparent relative">
            <div className="max-w-container w-full mx-auto">
                <div className="absolute top-[-80px] py-10 px-[69px] rounded-3xl bg-white justify-between shadow-[0_40px_24px_rgba(2, 8, 150, 0.1)]">
                    <div className="flex flex-col gap-8">
                        <h2 className="font-catamaran font-black text-a-navy text-h2">What we offer</h2>
                        <div className="flex flex-row flex-wrap items-center justify-center gap-[74px]">
                            <div className="flex flex-col gap-6 justify-center items-center">
                                <img src={icMusic}></img>
                                <p className="font-catamaran text-2xl">Music</p>
                            </div>
                            <div className="flex flex-col gap-6 justify-center items-center">
                                <img src={icFashion}></img>
                                <p className="font-catamaran text-2xl">Fashion</p>
                            </div>
                            <div className="flex flex-col gap-6 justify-center items-center">
                                <img src={icSports}></img>
                                <p className="font-catamaran text-2xl">Sport</p>
                            </div>
                            <div className="flex flex-col gap-6 justify-center items-center">
                                <img src={icCraft}></img>
                                <p className="font-catamaran text-2xl">Craft</p>
                            </div>
                            <div className="flex flex-col gap-6 justify-center items-center">
                                <img src={icHealth}></img>
                                <p className="font-catamaran text-2xl">Health</p>
                            </div>
                            <div className="flex flex-col gap-6 justify-center items-center">
                                <img src={icFood}></img>
                                <p className="font-catamaran text-2xl">Food</p>
                            </div>
                            <div className="flex flex-col gap-6 justify-center items-center">
                                <img src={icEdu}></img>
                                <p className="font-catamaran text-2xl">Education</p>
                            </div>
                            <div className="flex flex-col gap-6 justify-center items-center">
                                <img src={icToys}></img>
                                <p className="font-catamaran text-2xl">Toys</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}