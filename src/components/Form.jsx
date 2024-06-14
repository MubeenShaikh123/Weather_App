export default function Form(props) {
    const debounceSearch= props.debounceSearch
    return (
        <form className='pt-3 pb-2 '>
            <div className="container">
                <div className="d-flex justify-content-center ">
                    <input className="searchInput" placeholder="Enter City Name" type="text" onChange={(e) => {
                            debounceSearch(e.target.value)
                        }} />
                </div>
            </div>
        </form>
    )
}
