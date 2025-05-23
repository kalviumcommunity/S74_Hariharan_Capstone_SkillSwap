const RequestButton = ({onClick}) => (
  <button onClick={onClick}
    className="mt-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
  >
    Request Skill Swap
  </button>
);

export default RequestButton;