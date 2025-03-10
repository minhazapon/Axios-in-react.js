

function Xdeatils({ cmntValue }) {

    const { id, name, email } = cmntValue

    return (
        <div>
            <div>
                <div className="card w-96 h-[200px] bg-black text-white card-lg shadow-sm">
                    <div className="card-body">
                        <h2 className="card-title"> {name} </h2>
                        <p> {email} </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Xdeatils
