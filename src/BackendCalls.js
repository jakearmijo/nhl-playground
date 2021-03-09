export const getLiveGameFeed = (liveGameID) => {
  fetch(`https://statsapi.web.nhl.com/api/v1/game/${liveGameID}/feed/live`)
    .then((res) => res.json())
    .then(
      (result) => {
        this.setState({
          isLoaded: true,
          liveData: result.liveData,
        });
      },
      (error) => {
        this.setState({
          isLoaded: true,
          error,
        });
      }
    );
};
