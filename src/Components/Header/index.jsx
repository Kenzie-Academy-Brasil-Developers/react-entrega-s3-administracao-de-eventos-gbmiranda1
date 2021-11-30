import Burger from "../Burguer";
import {Div, SpanBeers, Container, Ul} from "./style"

function Header({open}){

    return(
        <Container>
            <Div> 
                <span>Event</span>
                <SpanBeers>Beers</SpanBeers>
            </Div>
            
            <Burger />
        </Container>
    )


}

export default Header;