import { useEffect, useState } from "react";
import Button from "../components/buttons";
import Label from "../components/label";
import heroImg from "../images/hero-header.svg"

export default function Hero() {
    const [fadeIn, setFadeIn] = useState(false);

    useEffect(() => {
        setFadeIn(true);
    }, []);

    return (
        <section className="pb-170px px-8 bg-a-purple">
            <div className="max-w-hero-container w-full mx-auto">
                <div className="grid grid-cols-2 gap-8">
                    <div className="flex flex-col gap-6 items-start justify-center">
                        <div className="flex flex-col gap-4 items-start">
                            <Label labelSize="large" labelVar="primary">Welcome to Superkids</Label>
                            <h1 className="font-mazzard text-white text-h1 leading-[55px]">Be a Super <br/>parents for your superkids</h1>
                            <p className="font-lato text-white text-xl font-normal">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam</p>
                        </div>
                        <Button buttonVar="green">Enroll My Child</Button>
                    </div>
                    <div className={`transition-opacity duration-1000 ease-in ${fadeIn ? 'opacity-100' : 'opacity-0'}`}>
                        <img src={heroImg} className="h-[608px]"></img>
                    </div>
                </div>
            </div>
        </section>
    )
}