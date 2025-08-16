import knowledgeImg from "../images/img-knowledge.svg"
import Button from "../components/buttons"
import Label from "../components/label"

export default function Knowledge() {
    return (
        <section id="knowledge" className="bg-white px-8">
            <div className="mx-auto max-w-container w-full py-[75px]">
                <div className="grid grid-cols-2 gap-8">
                    <div className="flex flex-col gap-6 items-start justify-center">
                        <div className="flex flex-col gap-4 items-start justify-center">
                            <Label labelSize="small" labelVar="purple">Knowledge Base</Label>
                            <h2 className="font-catamaran font-black text-h2 text-a-navy leading-[54px]">Why <span className="text-a-purple">Early<br/> Education </span>Matters</h2>
                            <p className="font-lato text-base text-a-gray">of developing these in young children is a combination of free and structured play, in beautiful and engaging preschool learning environments, and a program that constantly develops their minds across multiple areas. We know that children develop at different rates across different areas.</p>
                        </div>
                        <Button buttonVar="purple">Read More</Button>
                    </div>
                    <div className="h-[682px] flex items-center">
                        <img src={knowledgeImg} alt="img about us" className="w-full"/>
                    </div>
                </div>
            </div>
        </section>
    )
}