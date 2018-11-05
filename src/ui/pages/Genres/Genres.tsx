import * as React from "react";
import { connectWithActions } from "re-reduced";

import { actions, selectors, State } from "@domain";
import { Genre } from "@domain/genres";

interface Props {
  genres: Genre[];
  actions: typeof actions;
}

export class Genres extends React.Component<Props> {
  constructor(props: Props) {
    super(props);

    props.actions.core.setBreadcrumbs([{ icon: "home" }, { text: "Genres" }]);
    props.actions.genres.fetchGenres();
  }

  public render() {
    return (
      <div className="Genres">
        <h3>Genres</h3>
        {this.renderContent()}
      </div>
    );
  }

  private renderContent() {
    if (!this.props.genres.length) {
      return <div>Loading genres...</div>;
    }

    return (
      <div>
        <ul>{this.props.genres.map(this.renderItem)}</ul>
      </div>
    );
  }

  private renderItem(item: Genre) {
    return <li key={item.id}>{item.name}</li>;
  }
}

const enhance = connectWithActions<Props>(actions, {
  genres: selectors.getGenres
});

export default enhance(Genres);
