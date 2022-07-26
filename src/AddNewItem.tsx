import { useState } from "react";
import { AddItemButton } from "./styles";

type AddNewItemProps = {
    onAdd(text: string) : void
    toggleButtonText : string
    dark?: boolean
}