function Button({children, buttonVar = "primary", linkBtn}) {
    const baseStyle = "font-lato py-15px px-10 font-semibold rounded-149px text-md"

    const variant = {
        primary: "bg-btn-primary text-white",
        green: "bg-a-green text-white",
        orange: "bg-a-orange text-white",
        purple: "bg-a-purple text-white",
        outlineBlue: "bg-transparent border-solid border border-a-blue text-a-blue" 
    };

    return (
        <a href={linkBtn} className={`${baseStyle} ${variant[buttonVar]}`}>
            {children}
        </a>
    )
}

export default Button;