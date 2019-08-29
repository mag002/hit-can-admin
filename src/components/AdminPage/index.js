import React, { Component } from "react";
import { StyledAdminPage } from "./styled";
import MenuAppBar from "../Navbar";
import { Drawer, Container } from "@material-ui/core";
import Sidebar from "../Sidebar";
import * as routes from "../../constants/router";
import { Switch, Route } from "react-router-dom";

class AdminPage extends Component {
  render() {
    return (
      <StyledAdminPage>
        <MenuAppBar />
        <Drawer
          open={this.props.open}
          anchor="right"
          onClose={this.props.adminPageActions.toggleSidebar}
        >
          <Sidebar />
        </Drawer>
        <Container>
          <Switch>
            {routes.ROUTER_TEACHER.map(route => {
              return (
                <Route
                  path={route.path}
                  key={Math.random()}
                  render={() => <route.component title={route.label} />}
                />
              );
            })}
            {routes.ROUTER_ADMIN.map(route => {
              return (
                <Route
                  path={route.path}
                  key={Math.random()}
                  render={() => <route.component title={route.label} />}
                />
              );
            })}
          </Switch>
        </Container>
      </StyledAdminPage>
    );
  }
}
export default AdminPage;
