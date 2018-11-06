import { createAsyncAction, createAction } from "re-reduced";

import {
  Feature,
  LoginPayload,
  UserProfile,
  Breadcrumb
} from "@domain/core/types";

export default {
  features: {
    fetch: createAsyncAction<void, Feature[]>("FETCH", "CORE/FEATRUES")
  },
  user: {
    login: createAsyncAction<LoginPayload, UserProfile>("LOGIN", "CORE/USER")
  },
  setBreadcrumbs: createAction<Breadcrumb[]>("CORE/SET_BREADCRUMBS")
};
