function FooterLink({link = "#", children}) {

    return (
        <a className="text-sm text-a-gray font-lato" href={link}>{children}</a>
    )
}

export default FooterLink;