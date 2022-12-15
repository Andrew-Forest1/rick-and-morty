import Character from "./Character"

function CharactersList({characters, name}){
    const filteredArray = characters.filter((character) =>{
            if(character.name.includes(name)){
                return character
            }
        }
    )
    const characterArray = characters.map(
        (character) => {
            return <Character id={character.id} url={character.url} name={character.name} image={character.image} status={character.status} species={character.species} type={character.type} gender={character.gender}/>
        }
    )

        
    return(
        <div className="CharactersList">
            <h1>Character List</h1>
            <ul>
                {characterArray}
            </ul>
        </div>
    )
}

export default CharactersList