function SearchForm({name, handleChange}){

    return(
        <div className='Search'>
            <form>
                <input type="text" value={name} onChange={(e) => {handleChange(e.target.value)}}/>
            </form>
        </div>
    )
}

export default SearchForm