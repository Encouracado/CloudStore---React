import { Context } from "react";
import React from 'react'

const storeContext = React.createContext({
  token: null,
  setToken: (token: any) => {},
});

export  default storeContext;
