import logoImg from "../images/logo-2.svg"
import FooterLink from "../components/footerLink"

export default function Footer() {
    return (
        <section id="footer" className="bg-a-light-gray pb-[59px]">
            <div className="max-w-container w-full mx-auto">
                <div className="flex flex-row gap-[75px] max-w-[270px]">
                    <div className="flex flex-col gap-6 justify-start items-start">
                        <img src={logoImg}/>
                        <p className="text-sm font-lato text-a-gray">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    </div>
                    <div className="flex flex-row flex-wrap justify-between">
                        <li className="flex flex-col gap-2">
                            <FooterLink link="#">Home</FooterLink>
                        </li>
                    </div>
                </div>
            </div>
        </section>
    )
}