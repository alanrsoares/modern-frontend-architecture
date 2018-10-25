import * as React from "react";
import { applySpec } from "ramda";
import { connectWithActions } from "re-reduced";

import { actions } from "@domain";
import { selectors, Movie } from "@domain/movies";

interface Props {
  movies: Movie[];
  actions: typeof actions;
}

export class Movies extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
    props.actions.core.setBreadcrumbs([{ icon: "home" }, { text: "Movies" }]);
    props.actions.movies.fetchMovies();
  }

  public render() {
    return (
      <div className="Movies">
        <h3>Movies</h3>
        {this.renderContent()}
      </div>
    );
  }

  private renderContent() {
    if (!this.props.movies.length) {
      return <div>Loading movies...</div>;
    }

    return (
      <div>
        <ul>{this.props.movies.map(this.renderItem)}</ul>
      </div>
    );
  }

  private renderItem(item: Movie) {
    return <li key={item.id}>{item.title}</li>;
  }
}

const enhance = connectWithActions(actions)(
  applySpec<Props>({
    movies: selectors.getMovies
  })
);

export default enhance(Movies);
