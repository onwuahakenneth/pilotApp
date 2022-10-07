import styled from "styled-components"
import {NavigationBar} from '../navigation-bar'
import {Footer} from '../footer'

interface Props {
    children: JSX.Element;
}


export const Layout: React.FC<Props> = (props) => {
    const {children} = props;
  return (
    <MainContainer>
        <NavigationBar />
        {children}
        <Footer />
    </MainContainer>
  )
}

export default Layout;


const MainContainer = styled.div``;