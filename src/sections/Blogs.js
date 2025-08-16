import Article from "../components/article"
import Label from "../components/label"
import blogMusic from "../images/blog-music.svg"
import blogFashion from "../images/blog-fashion.svg"
import blogMartial from "../images/blog-martial-art.svg"
import blogSports from "../images/blog-sport.svg"
import blogCraft from "../images/blog-craft.svg"
import blogHealth from "../images/blog-health.svg"
import blogFood from "../images/blog-food.svg"
import blogEducation from "../images/blog-education.svg"


export default function Blogs() {
    return (
        <section className="bg-a-gray px-8">
            <div className="max-w-container w-full mx-auto">
                <div className="flex flex-col gap-[82px]">
                    <div className="flex flex-col gap-4 justify-center items-center">
                        <Label labelVar="purple" labelSize="small">Blog</Label>
                        <h2 className="font-catamaran font-black text-h2 text-a-navy leading-[54px]">Our Latest <span className="text-a-purple">Articles</span></h2>
                    </div>
                    <div className="grid grid-cols-4 gap-8">
                        <Article
                            imgArticle={blogMusic}
                            titleArticle="The effect of honey on human health"
                            descArticle="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim."
                            labelType="orange"
                            labelText="Music"
                            link="#"
                        >
                        </Article>
                        <Article
                            imgArticle={blogFashion}
                            titleArticle="5 Surprising Benefits of Honey Milk"
                            descArticle="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim."
                            labelType="amber"
                            labelText="Fashion"
                            link="#"
                        >
                        </Article>
                        <Article
                            imgArticle={blogMartial}
                            titleArticle="9 Surprising Benefits of Honey Milk"
                            descArticle="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim."
                            labelType="blue"
                            labelText="Martial Arts"
                            link="#"
                        >
                        </Article>
                        <Article
                            imgArticle={blogSports}
                            titleArticle="Health Benefits of Honey and Milk"
                            descArticle="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim."
                            labelType="green"
                            labelText="Sports"
                            link="#"
                        >
                        </Article>
                        <Article
                            imgArticle={blogCraft}
                            titleArticle="The effect of honey on human health"
                            descArticle="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim."
                            labelType="orange"
                            labelText="Craft"
                            link="#"
                        >
                        </Article>
                        <Article
                            imgArticle={blogHealth}
                            titleArticle="5 Surprising Benefits of Honey Milk"
                            descArticle="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim."
                            labelType="blue"
                            labelText="Health"
                            link="#"
                        >
                        </Article>
                        <Article
                            imgArticle={blogFood}
                            titleArticle="9 Surprising Benefits of Honey Milk"
                            descArticle="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim."
                            labelType="darkBlue"
                            labelText="Food"
                            link="#"
                        >
                        </Article>
                        <Article
                            imgArticle={blogEducation}
                            titleArticle="Health Benefits of Honey and Milk"
                            descArticle="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim."
                            labelType="darkBlue"
                            labelText="Education"
                            link="#"
                        >
                        </Article>
                    </div>
                </div>
            </div>
        </section>
    )
}