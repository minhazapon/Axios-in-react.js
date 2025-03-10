

function Xdeatils({ XData }) {

    const { id, name, email } = XData

    return (
        <div>
            <div>
                <div className="card w-96 bg-base-100 card-lg shadow-sm">
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
