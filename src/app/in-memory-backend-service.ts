import { InMemoryDbService } from "angular-in-memory-web-api";

export interface ApiProduct {
  id: number;
  name: string;
  price: number;
  type?: string;
  description: string;
  imgUrl: string;
}

interface ApiCartItem {
  id: number;
  product: ApiProduct;
  amount: number;
  subtotal: number;
}

export class InMemoryBackendService implements InMemoryDbService {
  createDb() {
    const products: ApiProduct[] = [
      {
        id: 1,
        name: "iPhone",
        price: 500,
        type: "default",
        description: 'Apple mobile phone',
        imgUrl:
          "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-finish-select-202207-pink?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1693063160403",
      },
      {
        id: 2,
        name: "PlayStation",
        price: 250,
        type: "default",
        description: 'Version 5 white',
        imgUrl:
          "https://media.direct.playstation.com/is/image/psdglobal/PS5-console-front",
      },
      {
        id: 3,
        name: "8K OLED TV",
        price: 300,
        type: "default",
        description: 'Energy consuming E',
        imgUrl:
          "https://images.samsung.com/is/image/samsung/p6pim/pt/qe65qn750atxxc/gallery/pt-neo-qled-8k-qn700a-qe65qn750atxxc-530444977?$650_519_PNG$",
      },
      {
        id: 4,
        name: "4K Ultrabook",
        price: 700,
        type: "default",
        description: 'Dell multi series',
        imgUrl:
          "https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/Dell_XPS_13_ultrabook_4k_display_touchscreen_deal.jpg",
      },
      {
        id: 5,
        name: "iPad PRO",
        price: 600,
        type: "default",
        description: 'Apple"s tablet series',
        imgUrl:
          "https://cdn.alloallo.media/catalog/product/apple/ipad/ipad-pro-12-9-in-4e-generation/ipad-pro-12-9-in-4e-generation-space-gray.jpg",
      },
      {
        id: 6,
        name: "JBL Tune",
        price: 100,
        type: "default",
        description: 'Noise Cancelation',
        imgUrl:
          "https://www.worten.pt/i/d6d81d5ea4d79082ba7dec4bd56f6abf8f16561e.jpg",
      },
      {
        id: 7,
        name: "Canon Mirrorless",
        price: 1000,
        type: "default",
        description: '24x zoom quality',
        imgUrl:
          "https://i1.adis.ws/i/canon/5331C045_EOS-R10-RF-S-18-150mm_03/c-mara-mirrorless-canon-eos-r10-e-objetiva-rf-s-18-150mm-f3-5-6-3-is-stm-vista-frontal-do-produto-com-a-objetiva?bg=white",
      },
      {
        id: 8,
        name: "xBox",
        price: 400,
        type: "default",
        description: 'Black edition',
        imgUrl:
          "https://assets.xboxservices.com/assets/fb/d2/fbd2cb56-5c25-414d-9f46-e6a164cdf5be.png?n=XBX_A-BuyBoxBGImage01-D.png",
      },
    ];
    const cart: ApiCartItem[] = [
      { id: 1, product: products[0], amount: 1, subtotal: products[0].price },
      {
        id: 2,
        product: products[1],
        amount: 2,
        subtotal: products[1].price * 2,
      },
    ];
    return {
      products,
      cart,
    };
  }
}
