import React from "react";
import styled from "styled-components";
import RecentProjectCard from "../components/RecentProjectCard";

const StyledRecentProjects = styled.div`
  font-family: "Roboto";
  display: flex;
  flex-direction: column;
  padding-inline: 5%;
  margin-block: 5%;

  h3 {
    font-family: "Roboto Serif";
    font-size: 48px;
    font-weight: 500;
    // padding-left: 5%;
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

  .recentProjects {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    img {
      height: 300px;
    }
  }

  p {
    max-width: 65ch;
    font-size: 20px;

    @media (max-width: 786px) {
      font-size: 18px;
    }
  }

  .dribbleCTA {
    font-style: italic;
    text-align: center;
    margin: 0 auto;
    margin-top: 5%;
  }

  .link,
  .link:visited {
    color: #ffc86b;
  }
`;

const RecentProjects = () => {
  return (
    <StyledRecentProjects id="projects">
      <h3>Recent Projects</h3>
      <div className="recentProjects">
        <RecentProjectCard
          className="projectCard"
          title={"My Recent Reading"}
          image={"myrecentreadingThumb.png"}
          url={"https://myrecentreading.netlify.app/"}
          description={
            "I’ve been reading a lot recently, so I built this to keep track of what I’ve read and some of the notes I’ve taken about each book. After adding a book, it calls an API using the books ISBN number to the the cover art.This is a serverless, Full-Stack application, initially built with the PERN stack, (PostgreSQL, Express, React, Node). I later updated it to use Supabase to make hosting easier. I’ve used the provided authentication system to handle logging in and created an admin form that allows me to add books and edit notes behind the scenes."
          }
        />
        <RecentProjectCard
          reversed={true}
          title={"Formula 1 Hub"}
          image={"f1hubThumb.png"}
          url={"https://formula1hub.netlify.app/"}
          description={
            "Designed to be a quick glance at the current F1 season. Built with React, this app fetches data from an API and features info about drivers, teams, race tracks, standings and results. It updates weekly after each race to keep up with the latest drama of the F1 season."
          }
        />
        <RecentProjectCard
          title={"Meevo"}
          image={"meevoThumb.png"}
          url={"https://www.meevo.com/"}
          description={
            "Meevo is a cloud-based, all-in-one salon, spa, and med spa management platform from Millennium Systems International. It offers a unified solution for appointment scheduling, client and staff management, point of sale, marketing, analytics, inventory, and multi‑location control"
          }
        />
        <RecentProjectCard
          reversed={true}
          title={"E-One"}
          image={"eoneThumb.png"}
          url={"https://e-one.com/vector/"}
          description={
            "E‑ONE’s product configurator acts as the backbone of their configure-price-quote (CPQ) ecosystem—transforming complex, highly customized fire apparatus manufacturing into a controlled, scalable, and customer-focused process."
          }
        />
      </div>
      <p className="dribbleCTA">
        You can see some of my other work on{" "}
        <a className="link" href="https://dribbble.com/johnathano619">
          Dribble
        </a>
        .
      </p>
    </StyledRecentProjects>
  );
};

export default RecentProjects;
