import { Container, Wrapper } from "./Container"

export const Main = ({children}) => {

    return (
        <Wrapper>
            <Container>
                {children}
            </Container>
        </Wrapper>
    )
}