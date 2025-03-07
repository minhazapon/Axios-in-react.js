import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"

function Axios() {

    const [cycle, setCycle] = useState([])

    useEffect(() => {

        axios.get('https://raw.githubusercontent.com/minhazapon/Axios-in-react.js/refs/heads/main/public/axios.json')
            .then(res => {
                setCycle(res.data)

            })
            .catch((error) => {
                console.log(error)
            })

    }, [])


    return (
        <>
            <div>
                <div className=" m-16  ">
                    <div className=" flex justify-center ">
                        <p className=" border-[1px] w-fit p-5 rounded-xl bg-blue-100 text-center text-5xl font-bold">Axios Cycle Store</p>
                    </div>
                    <div className="flex justify-center mt-10">
                        <div className=" grid  md:grid-cols-3 gap-5 ">
                            {
                                cycle.map(cycleData => <ul key={cycleData.id}>

                                    <div>
                                        <div className=" border-[1px] card bg-base-100 h-[400px] w-96 shadow-sm">
                                            <figure>
                                                <img
                                                    className=" h-[300px] "
                                                    src={cycleData.image}
                                                    alt="Shoes" />
                                            </figure>
                                            <div className="card-body bg-black text-white">
                                                <h2 className="card-title">{cycleData.name}</h2>
                                                <p>{cycleData.details}</p>
                                                <div className="card-actions justify-end">
                                                    <button className="btn bg-black text-white">Buy Now</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </ul>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Axios
