import icMusic from "../images/ic-music.svg"
import icFashion from "../images/ic-fashion.svg"
import icSports from "../images/ic-sports.svg"
import icCraft from "../images/ic-craft.svg"
import icHealth from "../images/ic-health.svg"
import icFood from "../images/ic-food.svg"
import icEdu from "../images/ic-education.svg"
import icToys from "../images/ic-toys.svg"

const iconMap = {
    music: icMusic,
    fashion: icFashion,
    sports: icSports,
    craft: icCraft,
    health: icHealth,
    food: icFood,
    education: icEdu,
    toys: icToys
}

export default function({type, label}) {
    const icon = iconMap[type];

    return (
        <div className="flex flex-col gap-6 justify-center items-center">
            <img src={icon} alt={type}/>
            <span className="font-lato text-2xl text-black">{label}</span>
        </div>
    )
}



