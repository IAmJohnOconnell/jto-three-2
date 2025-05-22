import styled from "styled-components";

const StyledAbout = styled.div`
  font-family: "Roboto";
  display: flex;
  flex-direction: column;
  padding-inline: 5%;

  h3 {
    font-family: "Roboto Serif";
    font-size: 48px;
    font-weight: 500;
    padding-left: 5%;
    max-width: fit-content;
    margin-bottom: 5%;

    @media (max-width: 786px) {
      padding-left: unset;
      font-size: 40px;
    }
  }

  h3:before {
    position: absolute;
    padding-top: 8px;
    content: "";
    border-bottom: 2px solid #ffc86b;
    width: 80px;
    transform: translateY(58px);
  }

  p {
    max-width: 65ch;
    margin-inline: auto;
    margin-bottom: 2%;
    font-size: 20px;

    @media (max-width: 786px) {
      font-size: 18px;
      width: 100%;
      padding: 0;
    }
  }
`;

const About = () => {
  return (
    <StyledAbout id="about">
      <h3>About</h3>
      <div>
        <p>
          I’m a web developer with 7+ years of experience helping teams build
          responsive, accessible, and user-friendly web applications.
        </p>
        <p>
          {" "}
          My background spans everything from designing component libraries to
          leading frontend builds for complex platforms. I’ve worked closely
          with designers, back-end developers, and stakeholders to ship products
          that are both intuitive to use and easy to maintain.
        </p>
        <p>
          I care a lot about clean code, clear communication, and creating
          interfaces that just make sense. I’m also diving deeper into backend
          tools like Node.js and PostgreSQL to bring more to the table.
        </p>
        <p>
          Whether you're a hiring manager, developer, or someone with a product
          that needs a thoughtful frontend — I’d love to connect.
        </p>
      </div>
    </StyledAbout>
  );
};

export default About;
