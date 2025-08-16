import totalCounter from "../images/counter.svg"
import qualifiedCounter from "../images/qualified.svg"
import yearsCounter from "../images/years.svg"
import studentCounter from "../images/student.svg"

export default function Counter() {
    return (
        <section className="bg-transparent px-8 py-8">
            <div className="mx-auto max-w-container w-full">
                <div className="grid grid-cols-4 py-16 px-14 bg-a-navy rounded-3xl">
                    <div className="flex flex-col gap-16 justify-center items-center">
                        <img src={totalCounter}/>
                        <p className="font-catamaran font-semibold text-2xl text-white">Total Groups</p>
                    </div>
                    <div className="flex flex-col gap-16 justify-center items-center">
                        <img src={qualifiedCounter}/>
                        <p className="font-catamaran font-semibold text-2xl text-white">Qualified Teachers</p>
                    </div>
                    <div className="flex flex-col gap-16 justify-center items-center">
                        <img src={yearsCounter}/>
                        <p className="font-catamaran font-semibold text-2xl text-white">Years of Experience</p>
                    </div>
                    <div className="flex flex-col gap-16 justify-center items-center">
                        <img src={studentCounter}/>
                        <p className="font-catamaran font-semibold text-2xl text-white">Students Enrolled</p>
                    </div>
                </div>
            </div>
        </section>
    )
}