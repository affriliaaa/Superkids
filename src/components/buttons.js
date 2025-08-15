function Button({children, buttonVar = "primary"}) {
    const baseStyle = "font-lato py-15px px-10 font-semibold rounded-149px text-white text-md"

    const variant = {
        primary: "bg-btn-primary",
        green: "bg-a-green",
        orange: "bg-a-orange",
        purple: "bg-a-purple"

    };

    return (
        <button className={`${baseStyle} ${variant[buttonVar]}`}>
            {children}
        </button>
    )
}

export default Button;