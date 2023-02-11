import { toNews, toWeather, toDogs, toCats } from "../../routes";
import { DropDownLink, DropDownContainer, Li, List, StyledNavLink, Ul, Wrapper } from "./styled";


export const Navigation = () => {
    return (
        <Wrapper>
            <Ul>
                <Li firstElement={true}>
                    <StyledNavLink to={toNews()}>News</StyledNavLink>
                </Li>
                <Li>
                    <StyledNavLink to={toWeather()}>Pogoda</StyledNavLink>
                </Li>
                <Li>
                    <DropDownContainer>
                        <DropDownLink as="a">Zwierzęta</DropDownLink>
                        <List>
                            <Li displayUpright={true}>
                                <DropDownLink to={toDogs()} upright={true}>Kotki</DropDownLink>
                            </Li>
                            <Li displayUpright={true}>
                                <DropDownLink to={toCats()} upright={true}>Pieski</DropDownLink>
                            </Li>
                        </List>
                    </DropDownContainer>
                </Li>
            </Ul>
        </Wrapper>
    )
};