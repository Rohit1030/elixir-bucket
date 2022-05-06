import { message } from "antd";
import dayjs from "dayjs";
import { IconContext } from "react-icons/lib";
import { MutationCache, QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "pages/Main";
import Dashboard from "pages/Dashboard";
import NotFound404 from "pages/NotFound404";
import Users from "pages/Users";
import store from "store";
import ProtectedRoute from "utils/ProtectedRoute";

// dayjs plugins
import advancedFormat from "dayjs/plugin/advancedFormat";
import isToday from "dayjs/plugin/isToday";
import isYesterday from "dayjs/plugin/isYesterday";
import localeData from "dayjs/plugin/localeData";
import relativeTime from "dayjs/plugin/relativeTime";

import "./styles/index.css";

export const route = "/route";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
  mutationCache: new MutationCache({
    onError: (err: any) => {
      if (err.response?.data?.message?.toLowerCase() !== "jwt expired")
        if (!["/auth/login"].includes(err?.config?.url))
          message.error(err.response?.data?.message?.replace("Error:", "").toSentenceCase());
    },
  }),
});

function AppRoutes() {
  dayjs.extend(localeData);
  dayjs.extend(isYesterday);
  dayjs.extend(isToday);
  dayjs.extend(relativeTime);
  dayjs.extend(advancedFormat);

  return (
    <QueryClientProvider client={queryClient}>
      <IconContext.Provider value={{ style: { verticalAlign: "middle" } }}>
        <Provider store={store}>
          <Router>
            <Switch>
              <Route exact path="/" component={Main} />
              {/* ----- Declare the new routes here like this ------ */}
              <ProtectedRoute path="/users" component={Users} />
              <ProtectedRoute path="/dashboard" component={Dashboard} />
              <Route path="*" component={NotFound404} />
            </Switch>
          </Router>
        </Provider>
      </IconContext.Provider>
    </QueryClientProvider>
  );
}
export default AppRoutes;
