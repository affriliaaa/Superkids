import Button from "../components/buttons"
import Label from "../components/label"
import aboutImg from "../images/img-about.svg"

export default function AboutUs() {
    return (
        <section id="aboutUs" className="bg-a-light-gray px-8">
            <div className="mx-auto max-w-container w-full py-[75px]">
                <div className="grid grid-cols-2 gap-8">
                    <div className="relative flex h-[682px] items-center">
                        <img src={aboutImg} alt="img about us" className="w-[738px] max-w-[738px] absolute left-0 top-0"/>
                    </div>
                    <div className="flex flex-col gap-6 items-start justify-center">
                        <div className="flex flex-col gap-4 items-start justify-center">
                            <Label labelSize="small" labelVar="orange">About us</Label>
                            <h2 className="font-catamaran font-black text-h2 text-a-navy leading-[54px]">Hey ! Here is A little <br/>about <span className="text-a-orange">Our Storries</span></h2>
                            <p className="font-lato text-base text-a-gray">We are excited and pleased to introduce you to the wonderful, passionate and committed educators who are working at Skole Learning Centre. Please take a moment to meet “Our Family!” We invited each of them to describe why they love working with children</p>
                        </div>
                        <Button buttonVar="orange">Read More</Button>
                    </div>
                </div>
            </div>
        </section>
    )
}