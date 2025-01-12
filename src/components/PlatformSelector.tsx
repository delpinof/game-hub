import { Button, Menu, MenuButton, MenuItem, MenuList, Spinner } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";

const PlatformSelector = () => {
    const { data, error, loading } = usePlatforms();
    if (error) return null;
    if (loading) return <Spinner />
    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>Platform</MenuButton>
            <MenuList>
                {
                    data
                        .map((platform) => <MenuItem key={platform.id}>{platform.name}</MenuItem>)
                }
            </MenuList>
        </Menu>
    );
}

export default PlatformSelector;