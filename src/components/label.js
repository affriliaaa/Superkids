function Label({children, labelSize = "small", labelVar = "primary"}) {
    const baseLabel = "w-auto rounded-full font-catamaran font-bold text-lg"

    const size = {
        small: "py-2 px-4",
        large: "py-10px px-5"
    }

    const variant = {
        primary: "bg-a-primary text-white",
        blue: "bg-a-blue-10 text-a-blue",
        orange: "bg-a-orange-10 text-a-orange",
        purple: "bg-a-purple-10 text-a-purple",
    } 

    return (
        <div className={`${baseLabel} ${size[labelSize]} ${variant[labelVar]}`}>
            {children}
        </div>
    )
}

export default Label;