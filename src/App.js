import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { DefaultLayout } from "~/components/Layout";
import { publicRoutes } from "~/routes";
import { Fragment } from "react";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* <Route path="/" element={<Home />} />
          <Route path="/following" element={<Following />} /> */}

          {publicRoutes.map((route, index) => {
            // const Layout = route.layout === null ? Fragment : DefaultLayout;
            const Page = route.component;
            let Layout = DefaultLayout;
            if (route.layout) {
              Layout = route.layout;
            } else if (route.layout === null) {
              Layout = Fragment;
            }
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
