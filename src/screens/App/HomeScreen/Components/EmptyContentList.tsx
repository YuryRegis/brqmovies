import React from "react";

import {BRQLogo} from "@brand";
import {Box, Text} from "@components";


interface IEmptyContentList {
    message: string;
}

export function EmptyContentList({message}: IEmptyContentList) {
    return (
        <Box alignItems="center" justifyContent="center">
            <Box>
                <BRQLogo/>
            </Box>
                
            <Text preset="headingMedium" color="grayWhite" marginTop="s16">
                {message}
            </Text>
        </Box>
    );
};
