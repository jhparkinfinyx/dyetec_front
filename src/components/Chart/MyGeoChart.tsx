import * as React from "react";
import {
  useAnalyticsApi,
  useAuthorize,
  useDataChart,
  useSignOut,
  useViewSelector,
} from "react-use-analytics-api";
import { AnalyticsDashboard, GeoChart } from "react-analytics-charts";



export function MyGeoChart() {
  const { ready, gapi, authorized, error } = useAnalyticsApi();
  const [viewId, setViewId] = React.useState('1');
  const viewSelectorContainerId = "view-selector-container";
  useViewSelector(
    authorized ? gapi : undefined,
    viewSelectorContainerId,
    (viewId) => setViewId(viewId)
  );
  const query = {
    ids: viewId,
    "start-date": "28daysAgo",
    "end-date": "today",
    metrics: "ga:sessions",
    dimensions: "ga:date",
  };
  const chart = {
    container: "data-chart-container",
    type: "LINE",
    options: {
      title: "Sessions (28 Days)",
    },
  };
  useDataChart(authorized ? gapi : undefined, query, chart);

  // Workaround for API limitation - see useAuthorize docs
  const authDiv = React.useRef(null);
  const [authorizeCalled, setAuthorizeCalled] = React.useState(false);
  const hasAuthElements =
    authDiv.current && authDiv?.current?.children?.length > 0;

  const authorize = useAuthorize(gapi, {
    clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID,
    container: "authorize-container-id",
  });
  const signOut = useSignOut(gapi);

  React.useEffect(() => {
    if (ready && !error && !authorizeCalled) {
      authorize();
      setAuthorizeCalled(true);
    }
  }, [ready, error, authorizeCalled, authorize]);

  return (
    <AnalyticsDashboard
      authOptions={{ clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID }}
      renderCharts={(gapi, viewId) => {
        return (
          <GeoChart
            gapi={gapi}
            query={{
              metrics: "ga:sessions,ga:pageviews",
              dimensions: "ga:country",
              "start-date": `28daysAgo`,
              "end-date": "today",
              ids: viewId,
            }}
            container="traffic-geo-chart"
          />
        );
      }}
    />
  );
}

