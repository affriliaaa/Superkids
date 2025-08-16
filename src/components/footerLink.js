function FooterLink({link = "#", children}) {

    return (
        <a className="text-sm font-lato" href={link}>{children}</a>
    )
}

export default FooterLink;