import { HStack, Switch, useColorMode } from "@chakra-ui/react";

const ColorModeSwitch = () => {
    const {colorMode, toggleColorMode } = useColorMode();
    return (
        <HStack>
            <Switch 
                 isChecked={colorMode == "dark"}
                 colorScheme="green"
                 onChange={toggleColorMode}
                />
            <text>Dark Mode</text>
        </HStack>
    );
};

export default ColorModeSwitch;