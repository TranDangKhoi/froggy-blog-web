import React from "react";
import { styled } from "styled-components";
import Typewriter from "typewriter-effect";
type THomepageBannerProps = {
  something: string;
};

const HomepageBannerContainer = styled.section`
  border-bottom: 1px solid #000;
  background-color: #ffc017;
`;

const HomepageBannerMain = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1320px;
  width: 100%;
  background-image: url("/transparent-loading.gif");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: 100% 50%;
  margin: 0 auto;
  padding-block: 100px;
  @media screen and (max-width: 1320px) {
    padding-inline: 16px;
  }
  @media screen and (max-width: 767px) {
    padding-inline: 12px;
  }
`;

const HomepageBannerLeft = styled.div`
  display: block;
`;

const HomepageBannerRight = styled.div``;

const HomepageBannerHeading = styled.h2`
  display: flex;
  gap: 10px;
  font-size: 92px;
  font-weight: 500;
  color: #000;
  .Typewriter {
    text-decoration: underline;
  }
`;

const HomepageBannerDescription = styled.p`
  font-size: 18px;
  max-width: 500px;
  font-weight: 500;
  color: #000;
  margin-top: 32px;
  word-break: break-all;
  .Typewriter {
    font-size: 18px;
    max-width: 410px;
    font-weight: 500;
    color: #000;
    margin-top: 32px;
    word-break: break-all;
    height: 105px;
  }
`;

const HomepageBannerAuthorName = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: #000;
`;

const HomepageBannerButton = styled.button`
  background: #000;
  color: #fff;
  padding: 8px 20px;
  border-radius: 100px;
  width: 200px;
  height: 40px;
  margin-top: 50px;
`;

const HomepageBanner = () => {
  return (
    <HomepageBannerContainer>
      <HomepageBannerMain>
        <HomepageBannerLeft>
          <HomepageBannerHeading>
            <span>Stay</span>
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .start()
                  .typeString("curious!")
                  .pauseFor(1500)
                  .deleteChars(8)
                  .typeString("creative!")
                  .pauseFor(1500)
                  .deleteChars(9)
                  .typeString("imaginative!")
                  .pauseFor(1500);
              }}
              options={{
                deleteSpeed: 5,
                loop: true,
              }}
            />
          </HomepageBannerHeading>
          <HomepageBannerDescription>
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .pauseFor(1000)

                  .typeString(
                    "Every time you post something online, you have a choice. You can either make it something that adds to the happiness levels in the world—or you can make it something that takes away.",
                  )
                  .start();
              }}
              options={{
                delay: 1,
              }}
            />
          </HomepageBannerDescription>
          <HomepageBannerAuthorName>
            <Typewriter
              onInit={(typewriter) => {
                typewriter.pauseFor(4500).start().typeString("- Zoe Sugg");
              }}
              options={{
                delay: 1,
                cursor: "",
              }}
            />
          </HomepageBannerAuthorName>
          <HomepageBannerButton>Start reading</HomepageBannerButton>
        </HomepageBannerLeft>
        <HomepageBannerRight></HomepageBannerRight>
      </HomepageBannerMain>
    </HomepageBannerContainer>
  );
};

export default HomepageBanner;
