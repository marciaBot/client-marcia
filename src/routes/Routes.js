import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import PedidosConfirmar from "../views/PedidosConfirmar/index";
import PedidosConfirmados from "../views/PedidosConfirmados/index";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={PedidosConfirmar} />
        <Route path="/pedidos-confirmados" component={PedidosConfirmados} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
