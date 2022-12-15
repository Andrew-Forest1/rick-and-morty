function SearchForm({name, setName}){

    return(
        <div className='Search'>
            <form>
                <input type="text" value={name} onChange={(e) => setName(e.target.vaule)}/>
            </form>
        </div>
    )
}

export default SearchForm