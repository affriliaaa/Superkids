import TestimoniCard from "../components/testiItem";
import Label from "../components/label";

export default function Testimonial() {
    return (
        <section className="bg-a-light-gray px-8">
            <div className="max-w-[1193px] w-full mx-auto py-[125px]">
                <div className="flex flex-col gap-[82px]">
                    <div className="flex flex-col gap-4 justify-center items-center">
                        <Label labelSize="small" labelVar="orange">Testimonial</Label>
                        <h2 className="font-catamaran text-h2 font-black leading-[54px] text-a-navy">What’s parent <span className="text-a-orange">Say About Us</span></h2>
                    </div>
                    <div className="grid grid-cols-3 gap-[34px]">
                        <TestimoniCard 
                            testiVar="orange" 
                            profileName="Ronald Richards" 
                            profileDesc="Mom of 2 kids"
                            testiText="Vestibulum eu quam nec neque pellentesque efficitur id eget nisl. Proin porta est convallis lacus blandit pretium sed non enim."
                        >
                        </TestimoniCard>
                        <TestimoniCard 
                            testiVar="blue" 
                            profileName="Wade Warren" 
                            profileDesc="Dad of 4 kids"
                            testiText="Vestibulum eu quam nec neque pellentesque efficitur id eget nisl. Proin porta est convallis lacus blandit pretium sed non enim."
                        >
                        </TestimoniCard>
                        <TestimoniCard 
                            testiVar="yellow" 
                            profileName="Arlene McCoy" 
                            profileDesc="Mom of 1 kids"
                            testiText="Vestibulum eu quam nec neque pellentesque efficitur id eget nisl. Proin porta est convallis lacus blandit pretium sed non enim."
                        >
                        </TestimoniCard>
                    </div>
                </div>
            </div>
        </section>
    )
}