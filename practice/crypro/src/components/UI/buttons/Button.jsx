export const Button = ({ onClick, children, ...props }) => {
  return <button onClick={onClick}>{children}</button>;
};
