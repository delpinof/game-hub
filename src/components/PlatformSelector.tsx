import {Button, Menu, MenuButton, MenuItem, MenuList, Spinner} from "@chakra-ui/react";
import {BsChevronDown} from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";
import usePlatform from "../hooks/usePlatform.ts";

interface Props {
    selectedPlatformId?: number;
    onSelectPlatform: (platformId: number) => void;
}

const PlatformSelector = ({selectedPlatformId, onSelectPlatform}: Props) => {
    const {data, isLoading, error} = usePlatforms();
    const selectedPlatform = usePlatform(selectedPlatformId);
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
                            onClick={() => onSelectPlatform(platform.id)}
                            key={platform.id}>
                            {platform.name}
                        </MenuItem>
                    )}
            </MenuList>
        </Menu>
    );
}

export default PlatformSelector;