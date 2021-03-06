import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import styled from "styled-components";
import { H1, H2, H3, globalStyles } from "../styles/globalStyles";

const MainContainer = styled.div`
  display: grid;
  grid-template-columns: ${globalStyles.gridTemplateColumns};
  font-family: Poppins, sans-serif;
`;

const StyledAppContainer = styled.div`
  grid-column: 2;

  justify-content: center;
`;

const StyledTitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const StyledContainer = styled.div`
  display: grid;
  grid-column: 2 / 3;
`;

const Styled3RowContainer = styled.div`
  display: grid;
  grid-column: 2 / 3;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 50px;
`;
const StyledContentRowContainer = styled.div<{ gridColumn?: number }>`
  grid-column: ${(props) => props.gridColumn};
`;

const TitleContainer = styled.div`
  display: grid;
  grid-template-row: repeat(4, 1fr);
  grid-gap: 20px;
  justify-items: center;
`;

const StyledTitle = styled.div`
  margin: 10px;
  color: #adadad;

  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
`;

const Name = styled.div`
  height: 28px;
  width: 179px;
  background-color: #e5fe9e;
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: 12px;
  letter-spacing: 0.05em;
`;

const Description = styled(H3)`
  text-align: center;
  margin: 0;
`;

const Button = styled.button`
  background-color: white;
  border-radius: 4px;
  height: 37px;
  filter: drop-shadow(4px 4px 0px #000000);
  a {
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 18px;
    letter-spacing: 0.02em;
    text-align: left;
    text-decoration: none;
    color: black;
  }
`;
const AboutContainer = styled.div`
  display: grid;
  background-color: #f0f0f0;
  grid-column: 1 / 4;
  grid-template-columns: 10% 1fr 10%;
`;
const Content = styled.div<{ gridColumn?: string }>`
  padding: 5% 0;
  grid-column: ${(props) => props.gridColumn || "2 / 3"};
`;

const DoubleContent = styled.div`
  display: grid;
  grid-column: 1 / 4;
  grid-template-columns: 1fr 1fr;
  margin-top: 10%;
`;
const ImageGrid = styled.div`
  display: grid;
  grid-template-rows: repeat(auto, 1fr);
  grid-gap: 20px;
`;
const ImageContainer = styled.div<{ margin?: string }>`
  margin: ${(props) => props.margin || "0"};
  position: relative;
`;
const BoarContainer = styled.div`
  position: absolute;
  left:10%;
`
const Project1: NextPage = () => {
  return (
    <MainContainer>
      <StyledAppContainer>
        <Head>
          <title>I am Sasiya</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <NavBar />

        <StyledTitleContainer>
          <ImageContainer margin="0 0 0 -10%">
            <BoarContainer>
              <Image
                src="/boar/boarboarboar.png"
                width={215}
                height={240}
                
              />
            </BoarContainer>
            <Image
              src="/boar/iphonebg.png"
              alt="Project 1"
              width={1400}
              height={850}
            />
          </ImageContainer>
          <TitleContainer>
            <StyledTitle>UX/UI Application case study</StyledTitle>
            <Name>???BOAR???</Name>
            <Description>
              All in one service{" "}
              <b>Booking & Ordering App for Restaurant business. </b>
            </Description>
            <Button>
              <a target={"blank"} href="https://www.figma.com/proto/g1Wnv2OnwpgYfM9pK2nyfN/Restaurant-cafe-ordering-app?node-id=103%3A1050&viewport=241%2C48%2C0.14&scaling=scale-down&starting-point-node-id=163%3A1050">
                VIEW PROTOTYPE
              </a>
            </Button>
          </TitleContainer>
        </StyledTitleContainer>
      </StyledAppContainer>

      <AboutContainer>
        <Content>
          <H1>
            ABOUT<b> ???BOAR???</b>
          </H1>
          <H2>OVERVIEW</H2>
          <H3>
            <b>???BOAR??? </b>is a restaurant business supporting platform created
            to simplify ordering process for client and workload reducing for
            restaurant staff(s).
          </H3>
          <H3>
            Clients could directly order and pay in-app through debit/credit
            card and electronic wallet connected, and also offered an options to
            pick-up their orders or book a table to eat in place, so restaurant
            wouldn???t have to be worried about fake order or unpaid order by
            application. And also help staffs get the right order from clients
            and prepare a table right on time.
          </H3>
        </Content>
      </AboutContainer>
      <Content>
        <H1>
          USER<b> FLOW</b>
        </H1>
        <H3>
          Restaurant get client???s order after payment success and start
          preparing, during preparing time the app show estimate finish time for
          client to get to restaurant right on time. When order is ready will
          trigger the app notification to client through the app.
        </H3>
      </Content>
      <StyledAppContainer>
        <StyledContainer>
          <Image
            src="/boar/flow1.png"
            alt="Project 1"
            width={1071}
            height={410}
            layout="responsive"
          />
        </StyledContainer>
        <Content>
          <H1>
            WIRE<b> FRAMES</b>
          </H1>
        </Content>
        <StyledContainer>
          <Image
            src="/boar/wireframe.png"
            alt="Project 1"
            width={1090}
            height={556}
          />
        </StyledContainer>

        <DoubleContent>
          <Content gridColumn="1">
            <H1>
              VISUAL<b> ELEMENT</b>
            </H1>
            <ImageContainer>
              <Image
                src="/boar/visualelement.svg"
                alt="Project 1"
                width={511}
                height={285}
              />
            </ImageContainer>
          </Content>
          <ImageContainer margin="0 0 0 20%">
            <Image
              src="/boar/iphone02-bg.png"
              alt="Project 1"
              width={476}
              height={414}
            />
          </ImageContainer>
        </DoubleContent>
        <Styled3RowContainer>
          <StyledContentRowContainer gridColumn={1}>
            <H2>SIMPLE & CLEAN LAYOUT</H2>
            <H3>
              TOP PICK best seller/ promotion/ advertising items on top with
              search bar to find your favorite item directly.
            </H3>{" "}
          </StyledContentRowContainer>

          <StyledContentRowContainer gridColumn={2}>
            <H2>EASY ORDERING</H2>
            <H3>
              Easy add menu to order in few steps. Showing dish name, details
              and major food allergens showing by icons.
            </H3>{" "}
          </StyledContentRowContainer>
          <StyledContentRowContainer gridColumn={3}>
            <H2>BOOKING & PICKUP</H2>
            <H3></H3>See all orders before checkout, require table to eat in
            place in 1 step. Showing estimate pick up time, go get it on time
            with map navigation. No more waste time in line waiting!
          </StyledContentRowContainer>
        </Styled3RowContainer>
        <StyledContainer>
          <H1>
            FINAL<b> DESIGN</b>
          </H1>
          <ImageGrid>
            <ImageContainer>
              <Image
                src="/boar/01.png"
                alt="Project 1"
                width={1071}
                height={819}
                layout="responsive"
              />
            </ImageContainer>
            <Image
              src="/boar/02.png"
              alt="Project 1"
              width={1090}
              height={820}
              layout="responsive"
            />
            <Image
              src="/boar/Dribble show 92.png"
              alt="Project 1"
              width={1090}
              height={820}
              layout="responsive"
            />
            <Image
              src="/boar/Dribble show 94.png"
              alt="Project 1"
              width={1090}
              height={820}
              layout="responsive"
            />
          </ImageGrid>
        </StyledContainer>
      </StyledAppContainer>
    </MainContainer>
  );
};

export default Project1;
