import { useFetch } from "../../hooks/useFetch"

interface SwapipersonProps {
    id: number;
}

interface Person{
    name: string;
}


export function Swapiperson({ id }: SwapipersonProps) {
    const { data, status } =useFetch(`https://swapi.dev/api/people/${id}`)
    
    console.log("rendering swapi person");

    let ComponentToRender;

    switch (status) {
        case "pending":
            ComponentToRender =()=> <div>Loading...</div>
            break;
        case 'loaded': {
            const person = data as Person;
            ComponentToRender = () => <div>{person.name}</div> 
            break;
        }
        case "error": {
            ComponentToRender = () => <div>{`${ data as string }`}</div> 
            break;
        }

    }
    return (
        <div >
            <ComponentToRender/>
    </div>
    );
    }
