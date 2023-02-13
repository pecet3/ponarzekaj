import { toNews, toWeather, toDogs, toCats, toPets } from "../../routes";
import { DropDownLink, DropDownContainer, Li, List, StyledNavLink, Ul, Wrapper } from "./styled";


export const Navigation = () => {
    return (
        <Wrapper>
            <Ul>
                <Li>
                    <StyledNavLink to={toNews()}>News</StyledNavLink>
                </Li>
                <Li>
                    <StyledNavLink to={toWeather()}>Pogoda</StyledNavLink>
                </Li>
                <Li>
                    <DropDownContainer>
                        <DropDownLink to={toPets()}>Zwierzęta</DropDownLink>
                        <List>
                            <Li displayUpright={true.toString()}>
                                <DropDownLink to={toDogs()} upright={true.toString()}>Pieski</DropDownLink>
                            </Li>
                            <Li displayUpright={true}>
                                <DropDownLink to={toCats()} upright={true.toString()}>Kotki</DropDownLink>
                            </Li>
                        </List>
                    </DropDownContainer>
                </Li>
            </Ul>
        </Wrapper>
    )
};