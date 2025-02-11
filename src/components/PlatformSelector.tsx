import {Button, Menu, MenuButton, MenuItem, MenuList, Spinner} from "@chakra-ui/react";
import {BsChevronDown} from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";
import usePlatform from "../hooks/usePlatform.ts";
import useGameQueryStore from "../store.ts";

const PlatformSelector = () => {
    const {data, isLoading, error} = usePlatforms();
    const platformId = useGameQueryStore(s => s.gameQuery.platformId);
    const setSelectedPlatformId = useGameQueryStore(s => s.setPlatformId);
    const selectedPlatform = usePlatform(platformId);
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
                            onClick={() => setSelectedPlatformId(platform.id)}
                            key={platform.id}>
                            {platform.name}
                        </MenuItem>
                    )}
            </MenuList>
        </Menu>
    );
}

export default PlatformSelector;