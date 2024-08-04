import { FOOTER } from "@/constants"
// import { FacebookIcon, InstagramIcon, LinkedinIcon, TwitterIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import { FaSquareFacebook } from "react-icons/fa6";


const Footer = () => {
    return (
        <div className="bg-black text-white py-20">
            <div className="container mx-auto">
                <div className="flex flex-wrap border-b border-neutral-700">
                    <div className="w-full sm:w-1/2 lg:w-6/12 p-4">
                        {/* <h2>
                            Zia Associates
                        </h2> */}
                        <div className="flex">
                            <Image
                                className='mr-8'
                                src="/ZiaEs.png"
                                width={50}
                                height={50}
                                alt='Logo'
                            />
                            <div className="text-white text-sm tracking-tighter"> Zia Associates</div>
                        </div>
                        <p className="py-8 lg:max-w-sm text-sm">
                            {FOOTER.description}
                        </p>

                        <div className="flex flex-wrap my-10 gap-4">
                            <Link
                                target="_blank"
                                href={
                                    "https://www.linkedin.com/in/zia-associates-06074a320/"
                                }
                                className="text-gray-200"
                            >
                                <FaLinkedin className="hover:text-[#0077B5] text-3xl duration-300" />
                            </Link>
                            <Link
                                target="_blank"
                                href={"https://www.facebook.com/profile.php?id=100082250011933"}
                                className="text-gray-200"
                            >
                                <FaSquareFacebook className="hover:text-[#316FF6] text-3xl duration-300" />
                            </Link>
                            <Link
                                target="_blank"
                                href={"https://www.tiktok.com/@zia.associates"}
                                className="text-gray-200"
                            >
                                <AiFillTikTok className="hover:text-[#2b3137] text-3xl duration-300" />
                            </Link>
                            <Link
                                target="_blank"
                                href={"https://www.instagram.com/zia_associates04/"}
                                className="text-gray-200"
                            >
                                <RiInstagramFill className="hover:text-[#ee2a7b] text-3xl duration-300" />
                            </Link>
                        </div>
                    </div>

                    {FOOTER.categories.map((category, index) => (
                        <div key={index} className="w-full sm:w-1/2 lg:w-2/12 p-4">

                            <h3 className="font-semibold uppercase text-neutral-200 pb-4">
                                {category.name}
                            </h3>

                            <ul>
                                {category.links.map((link, index) => (
                                    <li
                                        key={index} className="my-4">
                                        <Link
                                            href={link.url}
                                            className="text-neutral-200 hover:text-neutral-400 text-sm">
                                            {link.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>

                        </div>
                    ))}
                </div>
                <p className="p-4 text-center text-sm text-neutral-500 justify-center">
                    {FOOTER.copyright}
                </p>
            </div>
        </div>
    )
}

export default Footer
