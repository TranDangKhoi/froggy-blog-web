import { NavLink } from "react-router-dom";
import Logo from "src/assets/logo-4.png";
import { styled } from "styled-components";
import { path } from "src/constants/path";
import { useMedia } from "react-use";
const MainNavbarWrapper = styled.div`
  background-color: ${(props) => props.theme.colors.primary};
  border-bottom: 1px solid #000;
  .main-navbar {
    max-width: 1320px;
    width: 100%;
    padding: 12px 24px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .main-navbar-logo {
    display: flex;
    align-items: center;
    gap: 12px;
    img {
      width: 50px;
      height: 50px;
      object-fit: cover;
    }
    .main-navbar-title {
      font-weight: 700;
      font-size: 32px;
      /* font-family: "Noe Display"; */
      color: #000;
    }
  }
  .main-navbar-content {
  }
  .main-navbar-list {
    display: flex;
    gap: 36px;
    align-items: center;
    .main-navbar-item {
      color: #000;
      font-weight: 500;
      &--button {
        background: #000;
        border-radius: 24px;
        color: #fff;
        padding: 6px 8px;
        width: 150px;
        display: flex;
        justify-content: center;
        align-items: center;
        /* font-family: "Pacifico"; */
      }
    }
  }
`;

const MainNavbar = () => {
  // Khi xuống mobile thì navbar sẽ là một component hoàn toàn khác => đỡ suy nghĩ CSS responsive đau đầu
  const isMobile = useMedia("(max-width:767px)");
  return (
    <MainNavbarWrapper>
      <div className="main-navbar">
        <div className="main-navbar-logo">
          <img
            src={Logo}
            alt="Logo"
          />
          <span className="main-navbar-title">Froggy Blog</span>
        </div>
        <div className="main-navbar-content">
          <ul className="main-navbar-list">
            <li className="main-navbar-item">
              <NavLink to={path.HOMEPAGE}>Story</NavLink>
            </li>
            <li className="main-navbar-item">
              <NavLink to={path.HOMEPAGE}>About</NavLink>
            </li>
            <li className="main-navbar-item">
              <NavLink to={path.HOMEPAGE}>Sign in</NavLink>
            </li>
            <li className="main-navbar-item--button">
              <NavLink to={path.HOMEPAGE}>Start Writing</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </MainNavbarWrapper>
  );
};

export default MainNavbar;