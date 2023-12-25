export default function Form(props) {
    const setSearch= props.setSearch
    return (
        <form className='pt-3 pb-2 '>
            <div className="container">
                <div className="d-flex justify-content-center ">
                    <input className="searchInput" placeholder="Enter City Name" type="text" onChange={(e) => {
                            setSearch(e.target.value)
                        }} />
                </div>
            </div>
        </form>
    )
}
