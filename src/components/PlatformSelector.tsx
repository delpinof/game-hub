import {Button, Menu, MenuButton, MenuItem, MenuList, Spinner} from "@chakra-ui/react";
import {BsChevronDown} from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";

interface Props {
    selectedPlatformId?: number;
    onSelectPlatform: (platformId: number) => void;
}

const PlatformSelector = ({selectedPlatformId, onSelectPlatform}: Props) => {
    const {data, isLoading, error} = usePlatforms();
    if (error) return null;
    if (isLoading) return <Spinner/>
    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown/>}>
                {data.results.find(platform => platform.id === selectedPlatformId)?.name || "Platform"}
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