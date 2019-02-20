import { createAsyncAction } from "re-reduced";

import { Genre } from "@domain/genres/types";

export default {
  fetchGenres: createAsyncAction<Genre[]>("FETCH", "GENRES")
};
