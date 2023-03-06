import styled from 'styled-components';

export const Text = styled.p`
  font-family: 'Raleway', sans-serif;
  text-decoration: none;
  font-size: 24px;
  color: white;
  padding: 2px 10px 6px 10px;
  background: linear-gradient(90deg, #1095c1 50%, #000 0) var(--_p, 100%) / 200%
    no-repeat;
  -webkit-background-clip: text;
  background-clip: text;
  transition: 0.4s;
`;

export const Div = styled.div`
  display: flex;
  position: absolute;
  right: 10px;
  top: 0;
`;

export const Button = styled.button`
  top: 50%;
  transform: translateY(50%);
  align-items: center;
  background-color: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 0.25rem;
  box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
  box-sizing: border-box;
  color: rgba(0, 0, 0, 0.85);
  cursor: pointer;
  display: inline-flex;
  font-family: system-ui, -apple-system, system-ui, 'Helvetica Neue', Helvetica,
    Arial, sans-serif;
  font-size: 16px;
  font-weight: 600;
  justify-content: center;
  line-height: 1.25;
  margin: 0;
  height: 44px;
  padding: calc(0.875rem - 1px) calc(1.5rem - 1px);
  position: relative;
  text-decoration: none;
  transition: all 250ms;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: baseline;
  width: auto;
  &:hover,
  &:focus {
    border-color: rgba(0, 0, 0, 0.15);
    box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
    color: rgba(0, 0, 0, 0.65);
  }
`;