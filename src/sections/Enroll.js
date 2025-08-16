import Button from "../components/buttons";

export default function Enroll() {
    return (
        <section id="enroll" className="bg-a-light-gray px-8 pb-[80px]">
            <div className="max-w-container w-full mx-auto">
                <div className="flex flex-col justify-center items-center gap-8 py-[90px] px-16 bg-a-navy rounded-3xl">
                    <h2 className="text-h2 text-center font-catamaran font-black leading-[54px] text-white">Enroll Your Child Now! <br/>Call Us (302) 555-0107 or</h2>
                    <Button buttonVar="orange">Enroll Online</Button>
                </div>
            </div>
        </section>
    )
}