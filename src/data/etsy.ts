import EtsyJson from './etsy.json'

// export type MainImage = {
//     url_570xN: string
//   }

export interface Ietsy {
    listing_id: number,
    url: string,
    MainImage: {
        url_570xN: string
    },
    title: string,
    currency_code: string,
    price: string,
    quantity: number
}

const data = JSON.parse(JSON.stringify(EtsyJson))

export const etsy: Ietsy[] = data