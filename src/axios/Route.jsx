import { useState } from "react"
import { AllData, DeletePost } from "./AxApi"
import { useEffect } from "react"
import Details from "./Details"

function Route() {

    const [dataZ, setData] = useState([])

    const [addData, setAddData] = useState({

        title: "",
        body: ""

    })

    const GetPostData = async () => {
        const res = await AllData()
        setData(res.data)
    }

    useEffect(() => {
        GetPostData()
    }, [])

    const handleDelete = async (id) => {
        try {
            const res = await DeletePost(id)
            if (res.status === 200) {

                const newPostData = dataZ.filter((curData) => {
                    return curData.id !== id
                })
                setData(newPostData)
            }
        } catch (error) {
            console.log(res.error)
        }
    }

    return (
        <>
            <div>
                <div className="m-20">
                    <p className="text-center text-5xl font-bold text-black">Axios Data</p>
                    <div className=" flex justify-center ">
                        <div className=" flex justify-center mt-10 border-[1px] p-5 w-fit rounded-xl bg-violet-50 ">
                            <form className=" flex-col md:flex-row lg:flex-row flex items-center gap-3 ">
                                <input
                                    required
                                    className=" h-[30px] w-[300px] p-2 border-[1px]"
                                    name="title"
                                    placeholder="Add Title"
                                    type="text" />
                                <input
                                    required
                                    className="h-[30px] w-[300px] p-2 border-[1px]"
                                    name="body"
                                    placeholder="Add Body"
                                    type="text" />
                                <input className=" bg-blue-900 text-white h-[30px] w-[300px] cursor-pointer " type="submit" value="Add" />
                            </form>
                        </div>
                    </div>
                    <div className=" flex justify-center mt-10 ">
                        <div className=" grid  md:grid-cols-3 gap-5 ">
                            {
                                dataZ.map(information => <Details key={information.id}
                                    information={information}
                                    handleDelete={handleDelete}
                                ></Details>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Route
