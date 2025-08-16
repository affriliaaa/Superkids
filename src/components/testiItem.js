import quoteImg from "../images/quote.svg"
import orangeQuote from "../images/vec-orange.svg"
import blueQuote from "../images/vec-blue.svg"
import yellowQuote from "../images/vec-yellow.svg"
import orangeProfile from "../images/testimonial.svg"
import blueProfile from "../images/testimonial.svg"
import yellowProfile from "../images/testimonial.svg"

function TestimoniCard({testiVar = "orange", testiText, profileName, profileDesc}) {
    const baseTesti = "p-8 rounded-3xl"

    const variant = {
        orange: {bg: 'bg-a-orange', quote: orangeQuote, img: orangeProfile},
        blue: {bg: 'bg-a-blue', quote: blueQuote, img: blueProfile},
        yellow: {bg: 'bg-a-yellow', quote: yellowQuote, img: yellowProfile},
    };

    return (
        <div className="flex flex-col gap-[50px]">
            <div className="relative">
                <div className={`${baseTesti} ${variant[testiVar].bg}`}>

                    <p className="font-catamaran text-xl leading-[34px] text-white">{testiText}</p>

                    <img className="absolute top-[-49px] left-[20.5px]" src={quoteImg}/>
                    <img src={variant[testiVar].quote} alt="quote" className="w-[40px] h-[43px] absolute bottom-[-32px] left-[20.5px]"/>
            
                </div>
            </div>
            <div className="flex flex-row gap-[26px] justify-center items-center">
                <img src={variant[testiVar].img} alt="profile" className="w-[70px] h-[70px]"/>
                <div className="relative flex flex-col gap-1">
                    
                    <p className="font-catamaran text-2xl font-semibold text-a-navy">{profileName}</p>
                    <p className="font-lato text-base text-a-gray">{profileDesc}</p>
                </div>
            </div>
        </div>
    )
}

export default TestimoniCard;
