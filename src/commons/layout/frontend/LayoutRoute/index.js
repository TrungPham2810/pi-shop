import React, { Component } from "react";
import { Route } from "react-router-dom";
import DashBoard from "../../../../components/DashBoard";
class LayoutRoute extends Component {
  render() {
    const { path, component: YourComponent, exact, name } = this.props;
    return (
      <Route
        path={path}
        exact={exact}
        component={YourComponent}
        // render={(routerProps) => {
        //   return (
        //     <DashBoard name={name}>
        //       <YourComponent />
        //     </DashBoard>
        //   );
        // }}
      />
    );
  }
}
export default LayoutRoute;
