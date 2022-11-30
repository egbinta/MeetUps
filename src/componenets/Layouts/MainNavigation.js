const MainNavigation = () => {
  return (
    <header>
      <div>MeetUp</div>
      <nav>
        <ul>
          <li>
            <link to="/">All MeetUps</link>
          </li>
          <li>
            <link to="/new-meetup">Add New MeetUp</link>
          </li>
          <li>
            <link to="/favorites">My Favorites</link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
