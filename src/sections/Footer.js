import logoImg from "../images/logo-2.svg"
import FooterLink from "../components/footerLink"

export default function Footer() {
    return (
        <section id="footer" className="bg-a-light-gray pb-[59px] px-8">
            <div className="max-w-container w-full mx-auto">
                <div className="flex flex-row gap-[75px]">
                    <div className="flex flex-col gap-6 justify-start items-start max-w-[270px]">
                        <img src={logoImg}/>
                        <p className="text-sm font-lato text-a-gray">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    </div>
                    <div className="flex flex-row flex-wrap justify-between w-full">
                        <li className="flex flex-col gap-2 w-auto">
                            <h4 className="text-[22px] font-catamaran font-semibold text-a-navy">Home</h4>
                            <FooterLink link="#hero">Home</FooterLink>
                            <FooterLink link="#">Service</FooterLink>
                            <FooterLink link="#blogs">Blog</FooterLink>
                            <FooterLink link="#offer">Offer</FooterLink>
                            <FooterLink link="#">Pricing</FooterLink>
                        </li>
                        <li className="flex flex-col gap-2 w-auto">
                            <h4 className="text-[22px] font-catamaran font-semibold text-a-navy">Service</h4>
                            <FooterLink link="">Homecare</FooterLink>
                            <FooterLink link="">Kidszone</FooterLink>
                            <FooterLink link="">Kidsplay</FooterLink>
                        </li>
                        <li className="flex flex-col gap-2 w-auto">
                            <h4 className="text-[22px] font-catamaran font-semibold text-a-navy">About</h4>
                            <FooterLink link="#">Company</FooterLink>
                            <FooterLink link="#">Legal</FooterLink>
                            <FooterLink link="#">Terms And Conditions</FooterLink>
                        </li>
                        <li className="flex flex-col gap-2 w-auto">
                            <h4 className="text-[22px] font-catamaran font-semibold text-a-navy">Social media</h4>
                            <FooterLink link="">Facebook</FooterLink>
                            <FooterLink link="">Twitter</FooterLink>
                            <FooterLink link="">YouTube</FooterLink>
                            <FooterLink link="">Instagram</FooterLink>
                            <FooterLink link="">LinkedIn</FooterLink>
                        </li>
                    </div>
                </div>
            </div>
        </section>
    )
}