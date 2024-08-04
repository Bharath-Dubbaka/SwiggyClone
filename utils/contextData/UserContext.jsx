import React from "react";
import { createContext } from "react";

const UserContext = createContext({ loginName: "DummyName" });

export default UserContext;
