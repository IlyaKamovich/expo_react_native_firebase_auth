import React, { Fragment } from "react";
import { Button } from "./../button";
import { Input } from "./../input";

const UsernameStep = ({ userName, onChangeText, createUserName }) => (
  <Fragment>
    <Input
      placeholder="Username"
      value={userName}
      onChangeText={value => onChangeText("userName", value)}
    />
    <Button
      disabled={userName.trim().length < 4}
      text="Next"
      onPress={createUserName}
    />
  </Fragment>
);

export { UsernameStep };
