

function Xdeatils({ cmntValue }) {

    const { id, name, email } = cmntValue

    return (
        <div>
            <div>
                <div className="card w-96 h-[250px] bg-black text-white card-lg shadow-sm">
                    <div className="card-body">
                        <h2 className="card-title"> {name} </h2>
                        <p> {email} </p>
                    </div>
                    <div className=" flex justify-end gap-5 p-4 ">
                        <button className=" btn bg-green-700 text-white ">EDIT</button>
                        <button className=" btn bg-red-700 text-white ">DELETE</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Xdeatils
