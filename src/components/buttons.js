function Button({children, buttonVar = "primary", linkBtn}) {
    const baseStyle = "font-lato py-15px px-10 font-semibold rounded-149px text-white text-md"

    const variant = {
        primary: "bg-btn-primary",
        green: "bg-a-green",
        orange: "bg-a-orange",
        purple: "bg-a-purple"

    };

    return (
        <a href={linkBtn} className={`${baseStyle} ${variant[buttonVar]}`}>
            {children}
        </a>
    )
}

export default Button;