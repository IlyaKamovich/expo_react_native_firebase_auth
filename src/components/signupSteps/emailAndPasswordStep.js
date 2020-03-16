import React, { Fragment, useState } from "react";
import { TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";
import { Button } from "./../button";
import { Input } from "./../input";

const EmailAndPasswordStep = ({ email, password, onChangeText, register }) => {
  const [showPassword, setShowPassword] = useState(true);

  const handleChangeShowPassword = () => setShowPassword(!showPassword);

  return (
    <Fragment>
      <Input
        placeholder="Email"
        keyboardType="email-address"
        value={email}
        onChangeText={value => onChangeText("email", value)}
      />
      <Input
        placeholder="Username"
        value={password}
        onChangeText={value => onChangeText("password", value)}
        rightIcon={
          <Icon
            type="font-awesome"
            name="key"
            Component={TouchableOpacity}
            activeOpacity={0.3}
            onPress={handleChangeShowPassword}
          />
        }
        secureTextEntry={showPassword}
      />
      <Button
        text="Register"
        onPress={register}
        disabled={email.trim().length < 5 || password.trim().length < 6}
      />
    </Fragment>
  );
};

export { EmailAndPasswordStep };
