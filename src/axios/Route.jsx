import { useState } from "react"
import { AllData, AllPosts, DeletePost } from "./AxApi"
import { useEffect } from "react"
import Details from "./Details"
import Swal from "sweetalert2"

function Route() {

    const [dataZ, setData] = useState([])
    const [addData, setAddData] = useState({
        title: "",
        body: ""
    })
    const [update, setUpdateApi] = useState({})

    const handleAddData = (e) => {
        const name = e.target.name
        const value = e.target.value
        setAddData((preValue) => {
            return {
                ...preValue,
                [name]: value
            }
        })
    }

    const addPostdata = async () => {
        const res = await AllPosts(addData)
        if (res.status === 201) {
            setData([...dataZ, res.data])
            setAddData({ title: "", body: "" })
        }

        if (res) {
            Swal.fire({
                title: 'Added Done!',
                text: 'Do you want to continue',
                icon: 'success',
                confirmButtonText: 'Cool'
            })
        }
    }

    const handleAddSubmit = (e) => {
        e.preventDefault()
        addPostdata()
    }

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

    //update
    const handleUpdate = (curData) => {
        setUpdateApi(curData)
    }

    return (
        <>
            <div>
                <div className="m-20">
                    <p className="text-center text-5xl font-bold text-black">Axios Data</p>
                    <div className=" flex justify-center ">
                        <div className=" flex justify-center mt-10 border-[1px] p-5 w-fit rounded-xl bg-violet-50 ">
                            <form onSubmit={handleAddSubmit} className=" flex-col md:flex-row lg:flex-row flex items-center gap-3 ">
                                <input
                                    required
                                    className=" h-[30px] w-[300px] p-2 border-[1px]"
                                    value={addData.title}
                                    onChange={handleAddData}
                                    name="title"
                                    placeholder="Add Title"
                                    type="text" />
                                <input
                                    required
                                    className="h-[30px] w-[300px] p-2 border-[1px]"
                                    value={addData.body}
                                    onChange={handleAddData}
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
                                    handleUpdate={handleUpdate}
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
