// eslint-disable-next-line react/prop-types
const Card = ({ title, value, icon, bgColor }) => {
  const cardBackground = {
    blue: "bg-blue-500",
    green: "bg-green-500",
    yellow: "bg-yellow-500",
    purple: "bg-purple-500",
  };

  return (
    <div
      className={`${
        cardBackground[bgColor] || "bg-gray-500"
      } shadow-md rounded-lg p-4 flex items-center gap-4`}
    >
      <div style={{
        color:'white',
        fontSize:'20px'
      }}>{icon}</div>
      <div>
        <h3
          style={{
            color:'white',
            fontWeight: "700",
            fontSize:'25px'
          }}
        >
          {title}
        </h3>
        <p style={{
          color:'white',
          fontSize:'18px',
          fontWeight:'500'
        }}>{value}</p>
      </div>
    </div>
  );
};

export default Card;
