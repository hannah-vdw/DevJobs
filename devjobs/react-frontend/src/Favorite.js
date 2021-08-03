import React, { Component } from "react";
import IconButton from "@material-ui/core/IconButton";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';

class Favorite extends Component {
  state = { favorite: false };
  toggle = () => {
    let localFave = this.state.favorite;
  
    // Toggle the state variable liked
    localFave = !localFave;
    this.setState({ favorite: localFave });
  };
  render() {
    return (
      <IconButton aria-label="add to favorites" onClick={() => this.toggle()}>
            {this.state.favorite === false ? (
              <FavoriteBorderIcon />
            ) : (
              <FavoriteIcon color="secondary" />
            )}
      </IconButton>

    );
  }
}
  
export default Favorite;