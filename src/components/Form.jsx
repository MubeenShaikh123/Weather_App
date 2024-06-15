export default function Form(props) {
    const debounceSearch = props.debounceSearch;
    return (
        <form className='pt-3 pb-2'>
            <div className="container mx-auto">
                <div className="flex justify-center">
                    <input
                        className="p-2 border border-gray-300 rounded bg-transparent border-b-2 text-2xl focus:outline-none placeholder-whitesmoke"
                        placeholder="Enter City Name"
                        type="text"
                        onChange={(e) => {
                            debounceSearch(e.target.value);
                        }}
                    />
                </div>
            </div>
        </form>

    );
}
