export const Statistics = ({ title }) => {
    return <div style={{ backgroundColor: getRandomHexColor() }}>{ title }Home</div>;
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


