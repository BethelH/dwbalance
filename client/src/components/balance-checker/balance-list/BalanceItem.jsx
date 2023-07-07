import { Component } from "react";

import { ListItem, IconButton, ListItemText } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

class BalanceItem extends Component {
  constructor(props) {
    super(props);

    this.handleUpdate = this.handleUpdate.bind(this);
  }

  handleUpdate(balance) {
    this.props.handleUpdate(balance);
  }

  render() {
    return (
      <ListItem
        secondaryAction={
          <IconButton edge="end" aria-label="delete" ic>
            <DeleteIcon />
          </IconButton>
        }
      >
        <ListItemText
          style={{ textAlign: "left" }}
          primary={"Card Ending in"}
        />
        <ListItemText style={{ textAlign: "right" }} primary={"$0.0"} />
      </ListItem>
    );
  }
}

export { BalanceItem };
