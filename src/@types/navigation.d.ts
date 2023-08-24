import { AppRoutesParamList } from "@routes/app.routes";

type AppRoutes = AppRoutesParamList & SignInRoutesParamList;

export declare global {
  namespace ReactNavigation {
    interface RootParamList extends AppRoutes {}
  }
}
