import { useIsPresent } from "framer-motion";
import { Suspense, lazy, useContext } from "react";
import PageTransition from "src/components/PageTransition";
import UnauthenticatedNavbar from "src/components/UnauthenticatedNavbar";
import { AuthContext } from "src/contexts/auth.contexts";
import LoadingPage from "src/pages/LoadingPage";
import { styled } from "styled-components";
const AuthenticatedNavbar = lazy(async () => {
  const [moduleExports] = await Promise.all([
    import("src/components/AuthenticatedNavbar"),
    new Promise((resolve) => setTimeout(resolve, 2000)),
  ]);
  return moduleExports;
});

const MainLayoutWrapper = styled.div`
  max-width: 720px;
  width: 100%;
  margin: 0 auto;
  @media screen and (max-width: 1320px) {
    padding-inline: 16px;
  }
  @media screen and (max-width: 767px) {
    padding-inline: 12px;
  }
`;

type TMainLayoutProps = {
  children: React.ReactNode;
};

const StoryDetailLayout = ({ children }: TMainLayoutProps) => {
  const { isAuthenticated } = useContext(AuthContext);
  const isPresent = useIsPresent();
  return (
    <>
      {!isAuthenticated ? (
        <>
          <UnauthenticatedNavbar></UnauthenticatedNavbar>
          <MainLayoutWrapper>{children}</MainLayoutWrapper>
          <PageTransition isPresent={isPresent}></PageTransition>
        </>
      ) : (
        <Suspense fallback={<LoadingPage>Please wait, we're loading your content</LoadingPage>}>
          <AuthenticatedNavbar></AuthenticatedNavbar>
          <MainLayoutWrapper>{children}</MainLayoutWrapper>
          <PageTransition isPresent={isPresent}></PageTransition>
        </Suspense>
      )}
    </>
  );
};

export default StoryDetailLayout;
