import { useEffect, useState } from "react"
import { AddData, deletePost, Info } from "./DataFile"
import Xdeatils from "./Xdetails";
import Swal from "sweetalert2";


function Xios() {

    const [XData, setData] = useState([])

    const [addData, setAddData] = useState({
        name: "",
        email: "",
    })

    const handleAddData = () => {
        const name = e.target.name
        const value = e.target.value
        setAddData((PreValue) => {
            return {
                ...PreValue,
                [name]: value
            }
        })
    }

    const addDataPost = async () => {
        const res = await AddData(addData);
        if (res.status === 201) {

            setData([...XData, res.data])
            setAddData({ name: "", email: "" })
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

    const handleSubmit = (e) => {
        e.preventDefault()
        addDataPost()
    }

    const GetAllData = async () => {
        const res = await Info();
        setData(res.data)
    }

    useEffect(() => {
        GetAllData();
    }, [])

    //delete section
    const handleDelete = async (id) => {
        try {

            const res = await deletePost(id);
            if (res.status === 200) {
                const DeletePostData = XData.filter(DataValue => {
                    return DataValue.id !== DataValue
                })
                setData(DeletePostData)
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="m-10">
            <p className=" text-2xl text-center text-black">All Axios Comments</p>
            <div className=" flex justify-center ">
                <div className=" flex justify-center mt-10 border-[1px] p-5 w-fit rounded-xl bg-violet-50 ">
                    <form onSubmit={handleSubmit} className=" flex-col md:flex-row lg:flex-row flex items-center gap-3 ">
                        <input
                            required
                            className=" h-[30px] w-[300px] p-2 border-[1px]"
                            value={addData.name}
                            onChange={handleAddData}
                            name="title"
                            placeholder="Add Title"
                            type="text" />
                        <input
                            required
                            className="h-[30px] w-[300px] p-2 border-[1px]"
                            value={addData.email}
                            onChange={handleAddData}
                            name="body"
                            placeholder="Add Body"
                            type="text" />
                        <input className=" bg-blue-900 text-white h-[30px] w-[300px] cursor-pointer " type="submit" value="Add" />
                    </form>
                </div>
            </div>

            <div className=" flex justify-center mt-10 ">
                <div className=" grid md:grid-cols-3 gap-5 ">
                    {
                        XData.map(cmntValue => <Xdeatils key={cmntValue.id} cmntValue={cmntValue} handleDelete={handleDelete}  ></Xdeatils>)
                    }
                </div>
            </div>
        </div>
    )
}

export default Xios
