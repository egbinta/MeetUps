import { useNavigate } from "react-router-dom";
import NewMeetupForm from "../componenets/meetup/NewMeetupForm";

const NewMeetUp = () => {
  const navigate = useNavigate();
  function addMeeupHandler(meetupData) {
    fetch(
      "https://react-meetup-app-b1d77-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: {
          "Content-type": "application/json",
        },
      }
    ).then(() => {
      navigate("/");
    });
  }
  return (
    <div>
      <h2>New Meet up</h2>
      <NewMeetupForm onAddMeetup={addMeeupHandler} />
    </div>
  );
};

export default NewMeetUp;
