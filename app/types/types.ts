import { firestore } from "firebase-admin"

export type TRowsMenu = {
    title: string,
    description: string,
    rowId: string
}[]

export type TButtons = {
    buttonText: {
        displayText: string
    }
}[]

export type TOrder = {
    title: string,
    price: number,
    description: string,
    quantity?: number,
    category?: string,
}

export type TAddress = {
    zipCode?: string,
    city?: string,
    distryct?: string,
    publicPlace?: string,
    number?: string,
}

export type TDataTemp = {
    codeState: string,
    subState: string | firestore.FieldValue,
    tempAddress: TAddress | firestore.FieldValue,
    tempOrderList: TOrder[] | firestore.FieldValue
}

export type TListResponse = {
    title: string,
    listType: number,
    singleSelectReply: {
        selectedRowId: string
    },
    description: string,
}