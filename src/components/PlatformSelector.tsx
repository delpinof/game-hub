import {Button, Menu, MenuButton, MenuItem, MenuList, Spinner} from "@chakra-ui/react";
import {BsChevronDown} from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";
import {Platform} from "../services/platformService.ts";

interface Props {
    selectedPlatform: Platform | null;
    onSelectPlatform: (platform: Platform) => void;
}

const PlatformSelector = ({selectedPlatform, onSelectPlatform}: Props) => {
    const {data, isLoading, error} = usePlatforms();
    if (error) return null;
    if (isLoading) return <Spinner/>
    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown/>}>
                {selectedPlatform?.name || "Platform"}
            </MenuButton>
            <MenuList>
                {data.results
                    .map((platform) =>
                        <MenuItem
                            onClick={() => onSelectPlatform(platform)}
                            key={platform.id}>
                            {platform.name}
                        </MenuItem>
                    )}
            </MenuList>
        </Menu>
    );
}

export default PlatformSelector;