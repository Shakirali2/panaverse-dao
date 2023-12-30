"use client"


import Wrapper from "@/components/shared/Wrapper"
import QuarterBox from "../shared/QuarterBox"
import Image from "next/image"
// Images
import Web3Img from "@/app/assets/images/Web3Img.png"
import AiImg from "@/app/assets/images/AiImg.png"
import { useState } from "react"

export const programsData = [
    {
        slug: "wmd",
        header: "Web 3.0 (Blockchain) and Metaverse Specialization",
        desctiption: "This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet by specializing in building worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D metaverse client experiences.",
        image: Web3Img,
        quarters : [
            {
                header: "Quarter IV",
            description: "AC-351: Ambient Computing with Voice Assistants and Matter Devices",
            number: 4
            },
            {
                header: "Quarter V",
            description: "AC-351: Ambient Computing with Voice Assistants and Matter Devices",
            number: 5
            },
        ]
    },
    {
        slug: "ai",
        header: "Artificial Intelligence (AI) and Deep Learning Specialization",
        desctiption: "This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet by specializing in building worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D metaverse client experiences.",
        image: AiImg,
        quarters : [
            {
                header: "Quarter IV",
            description: "AC-351: Ambient Computing with Voice Assistants and Matter Devices",
            number: 4
            },
            {
                header: "Quarter V",
            description: "AC-351: Ambient Computing with Voice Assistants and Matter Devices",
            number: 5
            }
        ]
    },
    {
        header: "Artificial Intelligence (AI) and Deep Learning Specialization",
        desctiption: "This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet by specializing in building worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D metaverse client experiences.",
        image: AiImg,
        quarters : [
            {
                header: "Quarter IV",
            description: "AC-351: Ambient Computing with Voice Assistants and Matter Devices",
            number: 4
            },
            {
                header: "Quarter V",
            description: "AC-351: Ambient Computing with Voice Assistants and Matter Devices",
            number: 5
            }
        ]
    },
    {
        header: "Artificial Intelligence (AI) and Deep Learning Specialization",
        desctiption: "This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet by specializing in building worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D metaverse client experiences.",
        image: AiImg,
        quarters : [
            {
                header: "Quarter IV",
            description: "AC-351: Ambient Computing with Voice Assistants and Matter Devices",
            number: 4
            },
            {
                header: "Quarter V",
            description: "AC-351: Ambient Computing with Voice Assistants and Matter Devices",
            number: 5
            }
        ]
    },
    {
        header: "Artificial Intelligence (AI) and Deep Learning Specialization",
        desctiption: "This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet by specializing in building worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D metaverse client experiences.",
        image: AiImg,
        quarters : [
            {
                header: "Quarter IV",
            description: "AC-351: Ambient Computing with Voice Assistants and Matter Devices",
            number: 4
            },
            {
                header: "Quarter V",
            description: "AC-351: Ambient Computing with Voice Assistants and Matter Devices",
            number: 5
            }
        ]
    },
    {
        header: "Artificial Intelligence (AI) and Deep Learning Specialization",
        desctiption: "This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet by specializing in building worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D metaverse client experiences.",
        image: AiImg,
        quarters : [
            {
                header: "Quarter IV",
            description: "AC-351: Ambient Computing with Voice Assistants and Matter Devices",
            number: 4
            },
            {
                header: "Quarter V",
            description: "AC-351: Ambient Computing with Voice Assistants and Matter Devices",
            number: 5
            }
        ]
    },
    {
        header: "Artificial Intelligence (AI) and Deep Learning Specialization",
        desctiption: "This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet by specializing in building worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D metaverse client experiences.",
        image: AiImg,
        quarters : [
            {
                header: "Quarter IV",
            description: "AC-351: Ambient Computing with Voice Assistants and Matter Devices",
            number: 4
            },
            {
                header: "Quarter V",
            description: "AC-351: Ambient Computing with Voice Assistants and Matter Devices",
            number: 5
            }
        ]
    },
    {
        header: "Artificial Intelligence (AI) and Deep Learning Specialization",
        desctiption: "This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet by specializing in building worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D metaverse client experiences.",
        image: AiImg,
        quarters : [
            {
                header: "Quarter IV",
            description: "AC-351: Ambient Computing with Voice Assistants and Matter Devices",
            number: 4
            },
            {
                header: "Quarter V",
            description: "AC-351: Ambient Computing with Voice Assistants and Matter Devices",
            number: 5
            }
        ]
    },
]
const SpecializedTracks = () => {
    
    const [selectedItem, setSelectedItem]  = useState("wmd")
    const selectedItemData = programsData.find((item) => item.slug === selectedItem)
    

  return (
    <section>
        <Wrapper>
            {/* Header */}
            <div>
                <h4 className="text-5xl font-bold">Specialized Tracks:</h4>
                <p className="mt-2 text-slate-600 max-w-screen-sm">After completing the first three quarters the participants will select one or more specializations consisting of two courses each: </p>
            </div>
            <div className="mt-10 flex flex-col-reverse lg:flex-row gap-x-6 gap-y-8">
                {/*  Content Left */}
                <div className="shadow-xl sticky top-28 self-start basis-8/12 rounded-xl border border-slate-200 py-8 px-8">
                <h4 className="text-primary text-lg font-medium">Specialized Program</h4>
                <h3 className="text-2xl font-bold">{selectedItemData?.header}</h3>
                <p className="text-lg text-slate-600 mt-2">{selectedItemData?.desctiption}</p>
                <button className="text-primary text-xl mt-4 underline flex gap-x-2 items-end">Learn More
                <svg className="mb-1.5" width="10" height="13" viewBox="0 0 8 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.00006 10.0368L6.06801 5.57117L1.09503 0.999994" stroke="#00616C" stroke-width="2"/></svg>

                </button>
                <div className="flex flex-col md:flex-row gap-4 mt-8">
                    {
                        selectedItemData?.quarters.map((item) => (
                            <QuarterBox
                            key={item.number}
                                description={item.description}
                                header={item.header}
                                number={item.number}
                                haveBorder={false} 
                            /> 

                        ))
                    }
                </div>
                </div>

                 {/* Content Right */}
                 <div className="px-4 space-y-4 py-6 basis-4/12 bg-slate-100 flex-1">
                    {
                        programsData.map((item, i) => ( 
                        <div onClick={() => setSelectedItem(item.slug)} key={item.slug} className="flex gap-x-4 items-center cursor-pointer">
                        <div className="flex-shrink-0">
                            {/* <div className="w-20 h-16 rounded bg-red-300"></div> */}
                            <Image src={item.image} alt={item.header} className="object-cover rounded"/>
                            </div>
                            <div>
                                <h4 className="text-primary font-medium">Specialized Program</h4>
                                <h3 className="text-xl font-semibold">Web 3.0 (Blockchain) and Metaverse Specialization</h3>
                            </div>
                        </div>
                        ))
                    }
                 </div>
            </div>
        </Wrapper>
    </section>
  )
}

export default SpecializedTracks



