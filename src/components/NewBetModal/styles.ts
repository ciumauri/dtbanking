import styled from "styled-components";

import { darken, transparentize } from "polished";

export const Container = styled.form`
  h2 {
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  input,
  select {
    width: 100%;
    padding: 0 1.5rem;
    height: 3rem;
    border-radius: 0.25rem;

    border: 1px solid var(--background);
    background: var(--black);

    font-weight: 400;
    font-size: 1rem;
    color: var(--text-body);

    &::placeholder {
      color: var(--text-body);
    }

    & + input,
    & + select {
      margin-top: 1rem;
    }
  }

  button[type="submit"] {
    width: 100%;
    padding: 0 1.5rem;
    height: 3rem;
    background: var(--green);
    color: var(--text-title);
    border-radius: 0.25rem;
    border: 0;
    font-size: 1rem;
    margin-top: 1.5rem;
    font-weight: 600;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const BetStatusContainer = styled.div`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 0.5rem;
`;

interface BetStatusProps {
  isActive: boolean;
  activeColor: "white" | "green" | "red" | "gray";
}

const colors = {
  white: "#fff",
  green: "#33cc95",
  red: "#e52e4d",
  gray: "#b7b7cc",
};

export const RadioBox = styled.button<BetStatusProps>`
  height: 3rem;
  border: 1px solid var(--black);
  border-radius: 0.25rem;

  background: ${props =>
    props.isActive
      ? transparentize(0.9, colors[props.activeColor])
      : "transparent"};

  display: flex;
  align-items: center;
  justify-content: center;

  transition: border-color 0.3s;

  &:hover {
    border-color: ${darken(0.1, "#121214")};
  }

  img {
    width: 20px;
    height: 20px;
  }

  span {
    display: inline-block;
    margin-left: 1rem;
    font-size: 1rem;
    color: var(--text-title);
  }
`;
