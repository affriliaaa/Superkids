import icExperience from "../images/ben-experience.svg"
import icBackpack from "../images/ben-backpack.svg"
import icEmergencies from "../images/ben-experience.svg"
import icPhysic from "../images/ben-physical-aspect.svg"
import icMental from "../images/ben-mental.svg"
import icSocial from "../images/ben-social-aspect.svg"
import BenefitsItem from "../components/benefitsItem"
import Label from "../components/label"

export default function ItemBenefit() {
    return (
        <section id="itemBenefit" className="bg-a-light-gray px-[125px] py-[142px]">
            <div className="mx-auto max-w-container w-full">
                <div className="flex flex-col gap-[82px] items-start">
                    <div className="flex flex-col gap-4 items-start">
                        <Label labelSize="large" labelVar="blue">Benefits</Label>
                        <div className="grid grid-cols-12 gap-6 justify-center items-center">
                            <h2 className="col-span-5 font-catamaran font-black text-h2 text-a-navy leading-[54px]"><span className="text-a-blue">Why choose us</span> for your happier kids </h2>
                            <p className="col-span-7 font-lato text-base text-a-gray">Look into the eyes of a young child and see the sparkle and wonder. Develop these passions and watch the adult bloom into someone special. At Littledino Center, we work every day to build the foundations for amazing futures.</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-3 gap-8">
                        <BenefitsItem imgBenefit={icExperience} titleBenefit="Experience Teacher" descBenefit="Look into the eyes of a young child and see the sparkle"></BenefitsItem>
                        <BenefitsItem imgBenefit={icBackpack} titleBenefit="Learning and skills" descBenefit="Quality learning outcomes and skills development."></BenefitsItem>
                        <BenefitsItem imgBenefit={icEmergencies} titleBenefit="Emergencies Context" descBenefit="Improved learning and protection for children in"></BenefitsItem>
                        <BenefitsItem imgBenefit={icPhysic} titleBenefit="Physical aspect" descBenefit="A child goes through various physical development"></BenefitsItem>
                        <BenefitsItem imgBenefit={icMental} titleBenefit="Mental aspect" descBenefit="School is the foremost fountain of knowledge "></BenefitsItem>
                        <BenefitsItem imgBenefit={icSocial} titleBenefit="Social aspect" descBenefit="School is the first avenue of socialising for a child"></BenefitsItem>
                        
                    </div>
                </div>
            </div>
        </section>
    )
}